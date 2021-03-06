# ![](https://cdn.iconscout.com/icon/free/png-48/airbnb-11-722672.png "RealBnb") RealBnb

RealBnb is a full-stack web application inspired by AirBnb that allows users to search, book and review houses around the world. It utilizes Rails API connected to a PostgreSQL database, serving data to React/Redux frontend.

This application is hosted on Heroku and has photos served from AWS. It also uses Google Places API to obtain city or country coordinates from a user's search.


[LIVE LINK](https://realbnb.herokuapp.com/ "RealBnB")

---

<h3>Key Features</h3>

<p style="text-decoration: underline"><b>Google Maps Search</b></p>

<p>The index page shows a list of listings based on user's geolocation. The nav bar provides a search field where the user can search by city or country. The Google map will then pan to that location and show nearby available homes with the map view. When the user zooms or pans on the map, a new fetch request is invoked, bringing back only the listings within the boundaries of the map.</p>

```javascript
    registerListeners() {
      google.maps.event.addListener(this.map, 'idle', () => {
        const { north, south, east, west } = this.map.getBounds().toJSON();
        const bounds = {
          northEast: { latitude: north, longitude: east },
          southWest: { latitude: south, longitude: west }
        };
        this.props.updateFilter('bounds', bounds);
      });
    }
```

<p style="text-decoration: underline"><b>Bookings</b></p>
<p>Once logged in, a user can book a listing from its show page. Users need to select dates and a number of guests on the booking form. User can see which dates are available at the time of booking. To achieve this, on backend I created a method to get all booked dates for a listing using ActiveRecord (an ActiveRecord relation is an object that resembles an array that has different methods available on it)</p>

```ruby
  def book_dates
    result = []

    self.bookings.each do |booking|
      start = booking.check_in
      stop = booking.check_out

      while start < stop
        result << start
        start += 1
      end
    end

    result
  end
  ```

<p>On frontend, I created a method that checks each date in date picker and return a boolean value indicating if the current date is booked or not.</p>

```javascript
  blockedDays(day) {
    let bookedDates = this.props.property.bookedDates
    for (let i = 0; i < bookedDates.length; i++) {
      if (day.format('YYYY-MM-DD') === bookedDates[i]) {
        return true;
      }
    }
    return false;
  }
```

<p>After a property is booked, the user will be sent to list of all booked trips. For each trip on "Trips" page will be able to leave a review or cancel a trip</p>


<p style="text-decoration: underline"><b>User Reviews</b></p>
<p>User can review only booked listings. After listing is booked, the user will be sent to "Trips" page, where the user can click on "Leave a review". Review form will open along with the listing info(photo, host, average rating and number of reviews) and all the past reviews. When review is submitted, average rating and review count will update instantly.
<p>When another review is submitted, "reviewTracker" will be updated in ReviewForm component's state. </p>

```javascript
  handleSubmit(e) {
    e.preventDefault();
    const review_info = {
      property_id: parseInt(this.props.match.params.propertyId),
      user_id: this.props.currentUserId,
      body: this.state.body,
      value: this.state.rating,
    }
    this.setState({body: "", reviewTracker: !this.state.reviewTracker})
    this.props.createReview(review_info)
  }
```

<p>This will trigger "componentDidUpdate" lifecycle method that will get updated data from the database.</p>

```javascript
  componentDidUpdate(oldParams, oldState) {
    if (oldState.reviewTracker !== this.state.reviewTracker) {
      this.props.fetchProperty(this.props.match.params.propertyId)
    }
  }
```
 Reviews will also be visible on the listing show page. "Delete your review" link will appear only next to authored reviews. After review is deleted, average rating and number of reviews data will be updated.</p>


<h3>Future Features</h3>
<ul>
   <li>User can list his own house or apartment</li> 
   <li>User can filter listings by price, rating, dates</li>
   <li>User can add listing to favorits</li>
</ul>
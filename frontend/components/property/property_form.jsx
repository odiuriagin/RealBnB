import React from 'react';
import IndexNavContainer from '../index/index_nav/index_nav_container';
import { Redirect, withRouter } from 'react-router-dom';

class PropertyForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            description: "",
            address: "",
            city: "",
            state: "AL",
            zip: "",
            price: "",
            wifi: false,
            cable_tv: false,
            washer: false,
            kitchen: false,
            breakfast: false,
            body: "",
            latitude: null,
            longitude: null,
            newPropertyLat: 0,
            newPropertyLng: 0,
            redirect: false,
            newPropertyPlace: null,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);
    }

    handleChange(field) {
        return (e) => this.setState({
            [field]: e.target.value
          });
    }

    handleCheckbox(field) {
        return (e) => this.setState({
            [field]: !this.state.field
        });
    };

    handleSubmit(e) {
        e.preventDefault();
        let geocoder = new google.maps.Geocoder();
        let address = `${this.state.address}, ${this.state.city}, ${this.state.state}, ${this.state.zip}`;
        geocoder.geocode({ 'address': address }, (results, status) => {
            this.setState( {latitude: results[0].geometry.location.lng(),
                            longitude: results[0].geometry.location.lat(),
                            newPropertyPlace: results[0].geometry.location,
                            redirect: true});
            let property_info = {
                host_id: parseInt(this.props.currentUserId),
                description: this.state.description,
                address: this.state.address,
                city: this.state.city,
                state: this.state.state,
                zip: parseInt(this.state.zip),
                price: parseInt(this.state.price),
                wifi: this.state.wifi,
                cable_tv: this.state.cable_tv,
                washer: this.state.washer,
                kitchen: this.state.kitchen,
                breakfast: this.state.breakfast,
                body: this.state.body,
                latitude: parseFloat(this.state.latitude),
                longitude: parseFloat(this.state.longitude),
            }
            this.props.createProperty(property_info);
        })
    };

    render() {

        if (this.state.redirect === true) {
            return <Redirect to={{ pathname: '/index', state: { newPropertyPlace: this.state.newPropertyPlace }}} />
        } 

        return (
            <>
                <IndexNavContainer />
                <div className="property-form-container">
                    <h2>Please fill out the form below: </h2>
                    <form className="property-form">
                        <p>Listing title (Ex. "Two-bedroom apartment")</p>
                        <input type="text" value={this.state.description} onChange={this.handleChange("description")}/>
                        <p>Address: </p>
                        <input type="text" value={this.state.address} onChange={this.handleChange("address")}/>
                        <div className="property-form-city-state-container">
                            <div className="property-form-city-container">
                                <p>City: </p>
                                <input type="text" className="property-form-city" value={this.state.city} onChange={this.handleChange("city")}/>
                            </div>
                            <div className="property-form-state-container">
                                <p>State: </p>
                                <select className="property-form-state-select" value={this.state.state} onChange={this.handleChange("state")}>
                                    <option value="AL">Alabama</option>
                                    <option value="AK">Alaska</option>
                                    <option value="AZ">Arizona</option>
                                    <option value="AR">Arkansas</option>
                                    <option value="CA">California</option>
                                    <option value="CO">Colorado</option>
                                    <option value="CT">Connecticut</option>
                                    <option value="DE">Delaware</option>
                                    <option value="DC">District Of Columbia</option>
                                    <option value="FL">Florida</option>
                                    <option value="GA">Georgia</option>
                                    <option value="HI">Hawaii</option>
                                    <option value="ID">Idaho</option>
                                    <option value="IL">Illinois</option>
                                    <option value="IN">Indiana</option>
                                    <option value="IA">Iowa</option>
                                    <option value="KS">Kansas</option>
                                    <option value="KY">Kentucky</option>
                                    <option value="LA">Louisiana</option>
                                    <option value="ME">Maine</option>
                                    <option value="MD">Maryland</option>
                                    <option value="MA">Massachusetts</option>
                                    <option value="MI">Michigan</option>
                                    <option value="MN">Minnesota</option>
                                    <option value="MS">Mississippi</option>
                                    <option value="MO">Missouri</option>
                                    <option value="MT">Montana</option>
                                    <option value="NE">Nebraska</option>
                                    <option value="NV">Nevada</option>
                                    <option value="NH">New Hampshire</option>
                                    <option value="NJ">New Jersey</option>
                                    <option value="NM">New Mexico</option>
                                    <option value="NY">New York</option>
                                    <option value="NC">North Carolina</option>
                                    <option value="ND">North Dakota</option>
                                    <option value="OH">Ohio</option>
                                    <option value="OK">Oklahoma</option>
                                    <option value="OR">Oregon</option>
                                    <option value="PA">Pennsylvania</option>
                                    <option value="RI">Rhode Island</option>
                                    <option value="SC">South Carolina</option>
                                    <option value="SD">South Dakota</option>
                                    <option value="TN">Tennessee</option>
                                    <option value="TX">Texas</option>
                                    <option value="UT">Utah</option>
                                    <option value="VT">Vermont</option>
                                    <option value="VA">Virginia</option>
                                    <option value="WA">Washington</option>
                                    <option value="WV">West Virginia</option>
                                    <option value="WI">Wisconsin</option>
                                    <option value="WY">Wyoming</option>
                                </select>
                            </div>
                        </div>
                        <div className="property-form-zip-price-container">
                            <div className="property-form-zip-container">
                                <p>ZIP: </p>
                                <input type="number" className="property-form-zip" value={this.state.zip} onChange={this.handleChange("zip")}/>
                            </div>
                            <div className="property-form-price-container">
                                <p>Price per night</p>
                                <input type="number" value={this.state.price} onChange={this.handleChange("price")}/>
                            </div>
                        </div>
                        <p className="amenities-header">Please select amenities:</p>
                        <div className="property-form-amenities">
                            <label htmlFor="wifi">Wifi</label>
                            <input type="checkbox"  id="wifi" value={this.state.wifi} onClick={this.handleCheckbox("wifi")}/>
                            <label htmlFor="cable_tv">Cable</label>
                            <input type="checkbox"  id="cable_tv" value={this.state.cable_tv} onClick={this.handleCheckbox("cable_tv")}/>
                            <label htmlFor="washer">Washer</label>
                            <input type="checkbox"  id="washer" value={this.state.washer} onClick={this.handleCheckbox("washer")}/>
                            <label htmlFor="kitchen">Kitchen</label>
                            <input type="checkbox"  id="kitchen" value={this.state.kitchen} onClick={this.handleCheckbox("kitchen")}/>
                            <label htmlFor="breakfast">Breakfast</label>
                            <input type="checkbox"  id="breakfast" value={this.state.breakfast} onClick={this.handleCheckbox("breakfast")}/>
                        </div>
                        <p>Please give a breif description of your property:</p>
                        <textarea className = "property-form-text-area" value={this.state.body} onChange={this.handleChange("body")}></textarea>
                        <button className="property-form-submit" onClick={this.handleSubmit}>Submit your listing</button>
                    </form>

                </div>
            </>
        );
    }
};

export default withRouter(PropertyForm);

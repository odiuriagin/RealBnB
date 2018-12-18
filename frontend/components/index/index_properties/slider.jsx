import React from 'react';

class SimpleSlider extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: "index-photo-slider",
    };
    return (
      <Slider {...settings}>
        <div><h3><img src={this.props.property.photoUrls[0]} /></h3></div>
        <div><h3><img src={this.props.property.photoUrls[1]} /></h3></div>
        <div><h3><img src={this.props.property.photoUrls[2]} /></h3></div>
      </Slider>
    )
  }
}

export default SimpleSlider;

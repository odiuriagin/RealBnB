import React from 'react';

const ShowPhotos = (props) => {
  return (
    <div className="show-photos">
      <div className="main-photo">
        <img src={props.property.photoUrls[0]} />
      </div>
      <div className="secondary-photos">
        <div className="secondary-photo second-photo">
          <img src={props.property.photoUrls[1]} />
        </div>
        <div className="secondary-photo third-photo">
          <img src={props.property.photoUrls[2]} />
        </div>
        <div className="secondary-photo fourth-photo">
          <img src={props.property.photoUrls[3]} />
        </div>
        <div className="secondary-photo fifth-photo">
          <img src={props.property.photoUrls[4]} />
        </div>
      </div>
    </div>
  )
}

export default ShowPhotos;

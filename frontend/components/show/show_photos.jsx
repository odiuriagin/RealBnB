import React from 'react';

const ShowPhotos = () => {
  return (
    <div className="row">
      <div className="column">
        <img className="main-photo" src={"https://goo.gl/T48KR9"}></img>
      </div>
      <div className="column">
        <img className="secondary-photo" src={"https://goo.gl/T48KR9"}></img>
        <img className="secondary-photo" src={"https://goo.gl/T48KR9"}></img>
      </div>
      <div className="column">
        <img className="secondary-photo" src={"https://goo.gl/T48KR9"}></img>
        <img className="secondary-photo" src={"https://goo.gl/T48KR9"}></img>
      </div>
    </div>
  )
}

export default ShowPhotos;

import React from 'react';

const ShowPhotos = () => {
  return (
    <div className="show-photos">
      <div className="main-photo">
        <img src={"https://goo.gl/T48KR9"} />
      </div>
      <div className="secondary-photos">
        <div className="secondary-photo second-photo">
          <img src={"https://goo.gl/T48KR9"} />
        </div>
        <div className="secondary-photo third-photo">
          <img src={"https://goo.gl/T48KR9"} />
        </div>
        <div className="secondary-photo fourth-photo">
          <img src={"https://goo.gl/T48KR9"} />
        </div>
        <div className="secondary-photo fifth-photo">
          <img src={"https://goo.gl/T48KR9"} />
        </div>
      </div>
    </div>
  )
}

export default ShowPhotos;

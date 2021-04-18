import React from "react";

function Paper(props) {
  return (
    <div>
      <div>{props.GeneralData[0].ourName}</div>

      <div>
        <div>
          <img id="profile-img" src={props.picture} height="200" />
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Paper;

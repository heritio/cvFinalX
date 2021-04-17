import { TextField } from "@material-ui/core";
import React from "react";
import "./styles.css";
function General(props) {
  const generalInputsAttributes = [
    {
      InputPlaceholder: "name",
      Title: "Name",
      type: "text",
      value: props.infoGeneral[0],
      classname: "name-input",
    },
    {
      InputPlaceholder: "email",
      Title: "Email",
      type: "email",
      value: props.infoGeneral[1],
      classname: "email-input",
    },
    {
      InputPlaceholder: "phoneNr",
      Title: "Phone Number",
      type: "tel",
      value: props.infoGeneral[2],
      classname: "phone-input",
    },
    {
      InputPlaceholder: "Upload picture",
      Title: "Upload Picture",
      type: "file",
      value: props.infoGeneral[3],
      classname: "picture-input",
    },
  ];

  return (
    <div className="spacing">
      <TextField
        value={generalInputsAttributes[0].value}
        label={generalInputsAttributes[0].Title}
        type={generalInputsAttributes[0].type}
      />
      <TextField
        value={generalInputsAttributes[1].value}
        label={generalInputsAttributes[1].Title}
        type={generalInputsAttributes[1].type}
      />
      <TextField
        value={generalInputsAttributes[2].value}
        label={generalInputsAttributes[2].Title}
        type={generalInputsAttributes[2].type}
      />
      <TextField
        value={generalInputsAttributes[3].value}
        label={generalInputsAttributes[3].Title}
        type={generalInputsAttributes[3].type}
      />
    </div>
  );
}

export default General;

import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
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
      ourName: "name",
    },
    {
      InputPlaceholder: "email",
      Title: "Email",
      type: "email",
      value: props.infoGeneral[1],
      classname: "email-input",
      ourName: "email",
    },
    {
      InputPlaceholder: "phoneNr",
      Title: "Phone Number",
      type: "tel",
      value: props.infoGeneral[2],
      classname: "phone-input",
      ourName: "phone",
    },
    {
      InputPlaceholder: "Upload picture",
      Title: "Upload Picture",
      type: "file",
      value: props.infoGeneral[3],
      classname: "picture-input",
      ourName: "picture",
    },
  ];

  return (
    <div className="spacing">
      <TextField
        value={generalInputsAttributes[0].value}
        label={generalInputsAttributes[0].Title}
        type={generalInputsAttributes[0].type}
        InputLabelProps={{ shrink: true }}
        onChange={props.onChangeHandler}
        name={generalInputsAttributes[0].ourName}
      />
      <TextField
        value={generalInputsAttributes[1].value}
        label={generalInputsAttributes[1].Title}
        type={generalInputsAttributes[1].type}
        InputLabelProps={{ shrink: true }}
        onChange={props.onChangeHandler}
        name={generalInputsAttributes[1].ourName}
      />
      <TextField
        value={generalInputsAttributes[2].value}
        label={generalInputsAttributes[2].Title}
        type={generalInputsAttributes[2].type}
        InputLabelProps={{ shrink: true }}
        onChange={props.onChangeHandler}
        name={generalInputsAttributes[2].ourName}
      />
      <input
        label={generalInputsAttributes[3].Title}
        type={generalInputsAttributes[3].type}
        onChange={props.onChangeHandlerPicture}
        name={generalInputsAttributes[3].ourName}
      />
      <Button
        color={"secondary"}
        variant={"outlined"}
        onClick={props.onSubmitHandler}
      >
        Add General Info
      </Button>
    </div>
  );
}

export default General;

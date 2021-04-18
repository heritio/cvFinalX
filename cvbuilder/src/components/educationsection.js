import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import "./styles.css";
import React from "react";

function Education(props) {
  const educationInputsAttributes = [
    {
      InputPlaceholder: "School Name",
      type: "text",
      Title: "School Name",
      value: props.infoEducation[0],
      classname: "school-name",
      ourName: "school",
    },
    {
      InputPlaceholder: "Degree",
      type: "text",
      Title: "Degree",
      value: props.infoEducation[1],
      classname: "degree",
      ourName: "degree",
    },
    {
      InputPlaceholder: "Start-Date",
      type: "date",
      Title: "Start-Date",
      value: props.infoEducation[2],
      classname: "start-date",
      ourName: "startSchool",
    },
    {
      InputPlaceholder: "End-Date",
      type: "date",
      Title: "End-Date",
      value: props.infoEducation[3],
      classname: "end-date",
      ourName: "endSchool",
    },
  ];
  return (
    <div className="spacing">
      <TextField
        value={educationInputsAttributes[0].value}
        label={educationInputsAttributes[0].Title}
        type={educationInputsAttributes[0].type}
        InputLabelProps={{ shrink: true }}
        onChange={props.onChangeHandler}
        name={educationInputsAttributes[0].ourName}
      />
      <TextField
        value={educationInputsAttributes[1].value}
        label={educationInputsAttributes[1].Title}
        type={educationInputsAttributes[1].type}
        InputLabelProps={{ shrink: true }}
        onChange={props.onChangeHandler}
        name={educationInputsAttributes[1].ourName}
      />
      <TextField
        value={educationInputsAttributes[2].value}
        label={educationInputsAttributes[2].Title}
        type={educationInputsAttributes[2].type}
        InputLabelProps={{ shrink: true }}
        onChange={props.onChangeHandler}
        name={educationInputsAttributes[2].ourName}
      />
      <TextField
        value={educationInputsAttributes[3].value}
        label={educationInputsAttributes[3].Title}
        type={educationInputsAttributes[3].type}
        InputLabelProps={{ shrink: true }}
        onChange={props.onChangeHandler}
        name={educationInputsAttributes[3].ourName}
      />
      <Button
        color={"secondary"}
        variant={"outlined"}
        onClick={props.onSubmitHandler}
      >
        Add Education Info
      </Button>
    </div>
  );
}

export default Education;

import { TextField } from "@material-ui/core";
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
    },
    {
      InputPlaceholder: "Degree",
      type: "text",
      Title: "Degree",
      value: props.infoEducation[1],
      classname: "degree",
    },
    {
      InputPlaceholder: "Start-Date",
      type: "date",
      Title: "Start-Date",
      value: props.infoEducation[2],
      classname: "start-date",
    },
    {
      InputPlaceholder: "End-Date",
      type: "date",
      Title: "End-Date",
      value: props.infoEducation[3],
      classname: "end-date",
    },
  ];
  return (
    <div>
      <TextField
        value={educationInputsAttributes[0].value}
        label={educationInputsAttributes[0].Title}
        type={educationInputsAttributes[0].type}
      />
      <TextField
        value={educationInputsAttributes[1].value}
        label={educationInputsAttributes[1].Title}
        type={educationInputsAttributes[1].type}
      />
      <TextField
        value={educationInputsAttributes[2].value}
        label={educationInputsAttributes[2].Title}
        type={educationInputsAttributes[2].type}
      />
      <TextField
        value={educationInputsAttributes[3].value}
        label={educationInputsAttributes[3].Title}
        type={educationInputsAttributes[3].type}
      />
    </div>
  );
}

export default Education;

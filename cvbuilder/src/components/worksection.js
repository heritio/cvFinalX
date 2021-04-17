import { TextField } from "@material-ui/core";
import React from "react";
import "./styles.css";

function Work(props) {
  const workInputAttributes = [
    {
      Title: "Company Name",
      type: "text",
      value: props.infoWork[0],
    },
    {
      Title: "Position Tittle",
      type: "text",
      value: props.infoWork[0],
    },
    {
      Title: "Description Of Work",
      type: "textarea",
      value: props.infoWork[0],
    },
    { Title: "Start-Date", type: "date", value: props.infoWork[0] },
    { Title: "End-Date", type: "date", value: props.infoWork[0] },
  ];
  return (
    <div className="spacing">
      <TextField
        value={workInputAttributes[0].value}
        label={workInputAttributes[0].Title}
        type={workInputAttributes[0].type}
      />
      <TextField
        value={workInputAttributes[1].value}
        label={workInputAttributes[1].Title}
        type={workInputAttributes[1].type}
      />
      <TextField
        value={workInputAttributes[2].value}
        label={workInputAttributes[2].Title}
        type={workInputAttributes[2].type}
      />
      <TextField
        value={workInputAttributes[3].value}
        label={workInputAttributes[3].Title}
        type={workInputAttributes[3].type}
      />
      <TextField
        value={workInputAttributes[4].value}
        label={workInputAttributes[4].Title}
        type={workInputAttributes[4].type}
      />
    </div>
  );
}

export default Work;

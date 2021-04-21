import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";

import React from "react";
import "./styles.css";

function Work(props) {
  const workInputAttributes = [
    {
      Title: "Company Name",
      type: "text",
      value: props.infoWork[0],
      ourName: "company",
    },
    {
      Title: "Position Tittle",
      type: "text",
      value: props.infoWork[1],
      ourName: "workTitle",
    },
    {
      Title: "Description Of Work",
      type: "textarea",
      value: props.infoWork[2],
      ourName: "description",
    },
    {
      Title: "Start-Date",
      type: "date",
      value: props.infoWork[3],
      ourName: "startWork",
    },
    {
      Title: "End-Date",
      type: "date",
      value: props.infoWork[4],
      ourName: "endWork",
    },
  ];
  return (
    <div className="spacing">
      <TextField
        value={workInputAttributes[0].value}
        label={workInputAttributes[0].Title}
        type={workInputAttributes[0].type}
        InputLabelProps={{ shrink: true }}
        onChange={props.onChangeHandler}
        name={workInputAttributes[0].ourName}
      />
      <TextField
        value={workInputAttributes[1].value}
        label={workInputAttributes[1].Title}
        type={workInputAttributes[1].type}
        InputLabelProps={{ shrink: true }}
        onChange={props.onChangeHandler}
        name={workInputAttributes[1].ourName}
      />
      <TextField
        value={workInputAttributes[2].value}
        label={workInputAttributes[2].Title}
        type={workInputAttributes[2].type}
        InputLabelProps={{ shrink: true }}
        onChange={props.onChangeHandler}
        name={workInputAttributes[2].ourName}
      />
      <TextField
        value={workInputAttributes[3].value}
        label={workInputAttributes[3].Title}
        type={workInputAttributes[3].type}
        InputLabelProps={{ shrink: true }}
        onChange={props.onChangeHandler}
        name={workInputAttributes[3].ourName}
      />
      <TextField
        value={workInputAttributes[4].value}
        label={workInputAttributes[4].Title}
        type={workInputAttributes[4].type}
        InputLabelProps={{ shrink: true }}
        onChange={props.onChangeHandler}
        name={workInputAttributes[4].ourName}
      />
      <Button
        color={"secondary"}
        variant={"contained"}
        onClick={props.onSubmitHandler}
      >
        Add Work Info
      </Button>
    </div>
  );
}

export default Work;

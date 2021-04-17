import React, { Component } from "react";
import General from "./components/generalsection";
import Work from "./components/worksection";
import Education from "./components/educationsection";
import Paper from "./components/paper";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      phone: "",
      picture: "",
      school: "",
      degree: "",
      startSchool: "",
      endSchool: "",
      company: "",
      workTitle: "",
      description: "",
      startWork: "",
      endWork: "",
      GeneralData: {},
      EducationData: {},
      WorkData: {},
    };
  }

  render() {
    const {
      name,
      email,
      phone,
      picture,
      school,
      degree,
      startSchool,
      endSchool,
      company,
      workTitle,
      description,
      startWork,
      endWork,
      GeneralData,
      EducationData,
      WorkData,
    } = this.state;
    return (
      <div className="main-container">
        <header></header>
        <General infoGeneral={[name, email, phone, picture]} />
        <Education infoEducation={[school, degree, startSchool, endSchool]} />
        <Work
          infoWork={[company, workTitle, description, startWork, endWork]}
        />
        <Paper
          GeneralData={GeneralData}
          EducationData={EducationData}
          WorkData={WorkData}
        />
      </div>
    );
  }
}

export default App;

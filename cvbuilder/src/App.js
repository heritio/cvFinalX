import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import General from "./components/generalsection";
import Work from "./components/worksection";
import Education from "./components/educationsection";
import Paper from "./components/paper";
import "./App.css";
import ReactToPrint from "react-to-print";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      phone: "",
      picture: null,
      school: "",
      degree: "",
      startSchool: "",
      endSchool: "",
      company: "",
      workTitle: "",
      description: "",
      startWork: "",
      endWork: "",
      GeneralData: [],
      EducationData: [],
      WorkData: [],
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandlerGeneral = this.onSubmitHandlerGeneral.bind(this);
    this.onSubmitHandlerWork = this.onSubmitHandlerWork.bind(this);
    this.onSubmitHandlerEducation = this.onSubmitHandlerEducation.bind(this);
    this.onChangeHandlerPicture = this.onChangeHandlerPicture.bind(this);
  }

  onChangeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  onChangeHandlerPicture(e) {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      this.setState({
        picture: URL.createObjectURL(img),
      });
    }
  }

  onSubmitHandlerGeneral() {
    this.state.GeneralData.length = 0;
    this.setState({
      GeneralData: this.state.GeneralData.concat({
        ourName: this.state.name,
        ourEmail: this.state.email,
        ourPhone: this.state.phone,
      }),
      name: "",
      phone: "",
      email: "",
    });
  }

  onSubmitHandlerEducation(e) {
    if (this.state.EducationData.length > 1) return;
    this.setState({
      EducationData: this.state.EducationData.concat({
        ourSchool: this.state.school,
        ourDegree: this.state.degree,
        ourStartSchool: this.state.startSchool,
        ourEndSchool: this.state.endSchool,
      }),
      school: "",
      degree: "",
      startSchool: "",
      endSchool: "",
    });
  }
  onSubmitHandlerWork(e) {
    if (this.state.EducationData.length > 2) return;
    this.setState({
      WorkData: this.state.WorkData.concat({
        ourCompany: this.state.company,
        ourWorkTitle: this.state.workTitle,
        ourDescription: this.state.description,
        ourStartWork: this.state.startWork,
        ourEndWork: this.state.endWork,
      }),
      company: "",
      workTitle: "",
      description: "",
      startWork: "",
      endWork: "",
    });
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
        <header>CV Builder</header>
        <General
          onChangeHandler={this.onChangeHandler}
          infoGeneral={[name, email, phone, picture]}
          onSubmitHandler={this.onSubmitHandlerGeneral}
          onChangeHandlerPicture={this.onChangeHandlerPicture}
        />
        <Education
          onChangeHandler={this.onChangeHandler}
          infoEducation={[school, degree, startSchool, endSchool]}
          onSubmitHandler={this.onSubmitHandlerEducation}
        />
        <Work
          onChangeHandler={this.onChangeHandler}
          infoWork={[company, workTitle, description, startWork, endWork]}
          onSubmitHandler={this.onSubmitHandlerWork}
        />
        <ReactToPrint
          trigger={() => (
            <Button color={"secondary"} variant={"contained"}>
              Download PDF CV
            </Button>
          )}
          content={() => this.componentRef}
        />

        <Paper
          ref={(el) => (this.componentRef = el)}
          onChangeHandler={this.onChangeHandler}
          picture={picture}
          GeneralData={GeneralData}
          EducationData={EducationData}
          WorkData={WorkData}
        />
      </div>
    );
  }
}

export default App;

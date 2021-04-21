import "./styles.css";

import React, { Component } from "react";

export class Paper extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="cv-color">
        {this.props.GeneralData[0]?.ourName.length > 0 && (
          <div className="title">{this.props.GeneralData[0].ourName}</div>
        )}

        <div className="white">
          <div className="generalinfo">
            {this.props.picture && (
              <img
                className="pic"
                id="profile-img"
                src={this.props.picture}
                height="200"
              />
            )}
            {this.props.GeneralData[0]?.ourEmail.length > 0 && (
              <p className="phone-email wrap">
                Email: {this.props.GeneralData[0].ourEmail}
              </p>
            )}
            {this.props.GeneralData[0]?.ourPhone.length > 0 && (
              <p className="phone-email wrap">
                Phone Number: {this.props.GeneralData[0].ourPhone}
              </p>
            )}
          </div>
          <div className="work-education">
            <h3>Education</h3>
            <div className="education">
              {this.props.EducationData.map((element) => {
                return (
                  <div className="marg">
                    <h4>School Name: {element.ourSchool}</h4>
                    <h6>Degree: {element.ourDegree}</h6>
                    <p>Start Date: {element.ourStartSchool}</p>
                    <p>End Date: {element.ourEndSchool}</p>
                  </div>
                );
              })}
            </div>
            <h3>Work</h3>
            <div className="work">
              {this.props.WorkData.map((element) => {
                return (
                  <div className="marg">
                    <h4>Company Name: {element.ourCompany}</h4>
                    <h6>Work Title: {element.ourWorkTitle}</h6>
                    <p>Description: {element.ourDescription}</p>
                    <p>Start Date: {element.ourStartWork}</p>
                    <p>End Date: {element.ourEndWork}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Paper;

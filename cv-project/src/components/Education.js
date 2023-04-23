import "../styles/App.css";
import React from "react";
import EducationSection from "./EducationSection";

class Education extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      schoolName: "",
      profile: "",
      fromDate: "",
      toDate: "",
      errorText: false,
      sections: []
    }

    this.educationConfirmInformation = this.educationConfirmInformation.bind(this);
    this.educationResetInformation = this.educationResetInformation.bind(this);
    this.formValidation = this.formValidation.bind(this);
  }

  educationConfirmInformation = () => {
    const schoolNameValue = document.getElementById('school-name').value;
    const profileValue = document.getElementById('profile').value;
    const fromDateValue = document.getElementById('education-from-date').value;
    const toDateValue = document.getElementById('education-to-date').value;

    if (this.formValidation()) {
      this.setState({
        schoolName: schoolNameValue,
        profile: profileValue,
        fromDate: fromDateValue,
        toDate: toDateValue,
        errorText: false
      }, () => {
        const educationSection = {
          schoolName: this.state.schoolName,
          profile: this.state.profile,
          fromDate: this.state.fromDate,
          toDate: this.state.toDate
        };
        const section = document.getElementById('education-error-text');
        if (section !== undefined && section != null) {
          const parent = document.getElementById('education-error-text-place');
          parent.removeChild(section);
        }
        this.setState({
          errorText: false,
          sections: this.state.sections.concat(educationSection)
        });
        document.getElementById('school-name').value = "";
        document.getElementById('profile').value = "";
        document.getElementById('education-from-date').value = "";
        document.getElementById('education-to-date').value = "";
      });
    } else {
        this.setState({
          errorText: true
        });
        if (!this.state.errorText) {
          const section = document.getElementById('education-error-text-place');
          const newElement = document.createElement('p');
          newElement.innerText = "Wrong data";
          newElement.classList.add('error-text');
          newElement.setAttribute('id', 'education-error-text')
          section.insertBefore(newElement, section.children[1]);
        }
    }
  }

  educationResetInformation = () => {
    document.getElementById('school-name').value = "";
    document.getElementById('profile').value = "";
    document.getElementById('education-from-date').value = "";
    document.getElementById('education-to-date').value = "";

    const section = document.getElementById('education-error-text');
    if (section !== undefined && section != null) {
      const parent = document.getElementById('education-error-text-place');
      parent.removeChild(section);
    }

    this.setState({
      schoolName: "",
      profile: "",
      fromDate: "",
      toDate: "",
      errorText: false
    });
  }

  formValidation = () => {
    const schoolNameInput = document.getElementById('school-name');
    const profileInput = document.getElementById('profile');
    const fromDateInput = document.getElementById('education-from-date');
    const toDateInput = document.getElementById('education-to-date');

    if (schoolNameInput.checkValidity() && profileInput.checkValidity() && 
    fromDateInput.checkValidity() && toDateInput.checkValidity()) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const sections = Array.from({ length: this.state.sections.length}, (_, i) => (
      <EducationSection key={i} sectionData={this.state.sections[i]} sectionNumber={i} preview={this.props.generalInfo} />
    ));
    
    return (
      <div className="container">
        <section>
          <h1 className="header">Education</h1>
          {sections}
          <form id="education-error-text-place" className={`form ${this.props.generalInfo ? "hidden" : ""}`}>
            <div className="form-container">
              <div className="left">
                <div className="form-item"> 
                  <label htmlFor="school-name">School name</label>
                  <input type="text" name="school-name" id="school-name" required />
                </div>
                <div className="form-item">
                  <label htmlFor="profile">Profile</label>
                  <input type="text" name="profile" id="profile" required />
                </div>
              </div>
              <div className="right">
                <div className="form-item">
                  <label htmlFor="education-from-date">From</label>
                  <input type="date" name="education-from-date" id="education-from-date" required />
                </div>
                <div className="form-item">
                  <label htmlFor="education-to-date">To</label>
                  <input type="date" name="education-to-date" id="education-to-date" required />
                </div>
              </div>
            </div>
          </form>
          <div className={`buttons ${this.props.generalInfo ? "hidden" : ""}`}>
              <button type="button" className="add-section" onClick={this.educationConfirmInformation}>Add educational experience</button>
              <button type="button" className="add-section" onClick={this.educationResetInformation}>Reset informations</button>
            </div>
        </section>
      </div>
    );
  }
}

export default Education;
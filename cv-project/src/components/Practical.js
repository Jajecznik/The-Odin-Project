import "../styles/App.css";
import React from "react";
import PracticalSection from "./PracticalSection";

class Practical extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      companyName: "",
      positionTitle: "",
      fromDate: "",
      toDate: "",
      performedTasks: "",
      errorText: false,
      sections: []
    }

    this.practicalConfirmInformation = this.practicalConfirmInformation.bind(this);
    this.practicalResetInformation = this.practicalResetInformation.bind(this);
    this.formValidation = this.formValidation.bind(this);
  }

  practicalConfirmInformation = () => {
    const companyNameValue = document.getElementById('company-name').value;
    const positionTitleValue = document.getElementById('position-title').value;
    const fromDateValue = document.getElementById('practical-from-date').value;
    const toDateValue = document.getElementById('practical-to-date').value;
    const performedTasksValue = document.getElementById('performed-tasks').value;

    if (this.formValidation()) {
      this.setState({
        companyName: companyNameValue,
        positionTitle: positionTitleValue,
        fromDate: fromDateValue,
        toDate: toDateValue,
        performedTasks: performedTasksValue,
        errorText: false
      }, () => {
        const practicalSection = {
          companyName: this.state.companyName,
          positionTitle: this.state.positionTitle,
          fromDate: this.state.fromDate,
          toDate: this.state.toDate,
          performedTasks: this.state.performedTasks
        };
        const section = document.getElementById('practical-error-text');
        if (section !== undefined && section != null) {
          const parent = document.getElementById('practical-error-text-place');
          parent.removeChild(section);
        }
        this.setState({
          errorText: false,
          sections: this.state.sections.concat(practicalSection)
        });
        document.getElementById('company-name').value = "";
        document.getElementById('position-title').value = "";
        document.getElementById('practical-from-date').value = "";
        document.getElementById('practical-to-date').value = "";
        document.getElementById('performed-tasks').value = "";
      });
    } else {
        this.setState({
          errorText: true
        });
        if (!this.state.errorText) {
          const section = document.getElementById('practical-error-text-place');
          const newElement = document.createElement('p');
          newElement.innerText = "Wrong data";
          newElement.classList.add('error-text');
          newElement.setAttribute('id', 'practical-error-text')
          section.insertBefore(newElement, section.children[1]);
        }
    }
  }

  practicalResetInformation = () => {
    document.getElementById('company-name').value = "";
    document.getElementById('position-title').value = "";
    document.getElementById('practical-from-date').value = "";
    document.getElementById('practical-to-date').value = "";
    document.getElementById('performed-tasks').value = "";

    const section = document.getElementById('practical-error-text');
    if (section !== undefined && section != null) {
      const parent = document.getElementById('practical-error-text-place');
      parent.removeChild(section);
    }

    this.setState({
      companyName: "",
      positionTitle: "",
      fromDate: "",
      toDate: "",
      performedTasks: "",
      errorText: false
    });
  }

  formValidation = () => {
    const companyNameInput = document.getElementById('company-name');
    const positionTitleInput = document.getElementById('position-title');
    const fromDateInput = document.getElementById('practical-from-date');
    const toDateInput = document.getElementById('practical-to-date');
    const performedTasksInput = document.getElementById('performed-tasks');

    if (companyNameInput.checkValidity() && positionTitleInput.checkValidity() && 
    fromDateInput.checkValidity() && toDateInput.checkValidity() && performedTasksInput.checkValidity()) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const sections = Array.from({ length: this.state.sections.length}, (_, i) => (
      <PracticalSection key={i} sectionData={this.state.sections[i]} sectionNumber={i} preview={this.props.generalInfo} />
    ));
  
    return (
      <div className="container">
        <section>
          <h1 className="header">Practical experience</h1>
          {sections}
          <form id="practical-error-text-place" className={`form ${this.props.generalInfo ? "hidden" : ""}`}>
            <div className="form-container-practical">
              <div className="wrapper">
                <div className="left">
                  <div className="form-item"> 
                    <label htmlFor="company-name">Company name</label>
                    <input type="text" name="company-name" id="company-name" required />
                  </div>
                  <div className="form-item">
                    <label htmlFor="position-title">Position title</label>
                    <input type="text" name="position-title" id="position-title" required />
                  </div>
                </div>
                <div className="right">
                  <div className="form-item">
                    <label htmlFor="practical-from-date">From</label>
                    <input type="date" name="practical-from-date" id="practical-from-date" required />
                  </div>
                  <div className="form-item">
                    <label htmlFor="practical-to-date">To</label>
                    <input type="date" name="practical-to-date" id="practical-to-date" required />
                  </div>
                </div>
              </div>
              <div className="form-item">
                <label htmlFor="performed-tasks">Performed tasks</label>
                <input type="text" name="performed-tasks" id="performed-tasks" required />
              </div>
            </div>
          </form>
          <div className={`buttons ${this.props.generalInfo ? "hidden" : ""}`}>
              <button type="button" className="add-section" onClick={this.practicalConfirmInformation}>Add practical experience</button>
              <button type="button" className="add-section" onClick={this.practicalResetInformation}>Remove informations</button>
            </div>
        </section>
      </div>
    );
  }
}

export default Practical;
import "../styles/App.css";
import React from "react";

class General extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      surname: "",
      email: "",
      number: "",
      editMode: true,
      errorText: false
    }

    this.generalConfirmInformation = this.generalConfirmInformation.bind(this);
    this.generalResetInformation = this.generalResetInformation.bind(this);
    this.formValidation = this.formValidation.bind(this);
  }

  generalConfirmInformation = () => {
    const nameValue = document.getElementById('name').value;
    const surnameValue = document.getElementById('surname').value;
    const emailValue = document.getElementById('email').value;
    const numberValue = document.getElementById('phone-number').value;

    if (this.formValidation()) {
      this.setState({
        name: nameValue,
        surname: surnameValue,
        email: emailValue,
        number: numberValue,
        editMode: false,
        errorText: false
      });
    } else {
        this.setState({
          errorText: true
        });
        if (!this.state.errorText) {
          const section = document.getElementById('general-error-text-place');
          const newElement = document.createElement('p');
          newElement.innerText = "Wrong data";
          newElement.classList.add('error-text');
          newElement.setAttribute('id', 'general-error-text')
          section.insertBefore(newElement, section.children[1]);
        }
    }
  }

  generalResetInformation = () => {
    document.getElementById('name').value = "";
    document.getElementById('surname').value = "";
    document.getElementById('email').value = "";
    document.getElementById('phone-number').value = "";

    const section = document.getElementById('general-error-text');
    if (section !== undefined && section != null) {
      const parent = document.getElementById('general-error-text-place');
      parent.removeChild(section);
    }

    this.setState({
      name: "",
      surname: "",
      email: "",
      number: "",
      editMode: true,
      errorText: false
    });
  }

  formValidation = () => {
    const nameInput = document.getElementById('name');
    const surnameInput = document.getElementById('surname');
    const emailInput = document.getElementById('email');
    const numberInput = document.getElementById('phone-number');

    if (nameInput.checkValidity() && surnameInput.checkValidity() && 
    emailInput.checkValidity() && numberInput.checkValidity()) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    if (this.state.editMode && !this.props.generalInfo) {
      return (
        <div className="container">
          <section>
            <h1 className="container-header">General information</h1>
            <form id="general-error-text-place" className="form">
              <div className="form-container">
                <div className="left">
                  <div className="form-item"> 
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" required />
                  </div>
                  <div className="form-item">
                    <label htmlFor="surname">Surname</label>
                    <input type="text" name="surname" id="surname" required />
                  </div>
                </div>
                <div className="right">
                  <div className="form-item">
                    <label htmlFor="email">E-mail</label>
                    <input type="email" name="email" id="email" required />
                  </div>
                  <div className="form-item">
                    <label htmlFor="phone-number">Phone number</label>
                    <input type="number" name="phone-number" id="phone-number" 
                    min={100000000} max={999999999} required/>
                  </div>
                </div>
              </div>
              <div className="buttons">
                <button type="button" className="add-section" onClick={this.generalConfirmInformation}>Confirm informations</button>
                <button type="button" className="add-section" onClick={this.generalResetInformation}>Clear informations</button>
              </div>
            </form>
          </section>
        </div>
      );
    } else {
      return  (
        <div className="container">
          <section>
            <h1 className="container-header">General information</h1>
            <div className="preview-container">
              <div className="left">
                <p className="preview-label">Name</p>
                <p className="preview-value">{this.state.name}</p>
                <p className="preview-label">Surname</p>
                <p className="preview-value">{this.state.surname}</p>
              </div>
              <div className="right">
                <p className="preview-label">Email</p>
                <p className="preview-value">{this.state.email}</p>
                <p className="preview-label">Phone number</p>
                <p className="preview-value">{this.state.number}</p>
              </div>
            </div>
          </section>
        </div>
      );
    }
  }
}

export default General;
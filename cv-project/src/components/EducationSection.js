import "../styles/App.css";
import React from "react";

class EducationSection extends React.Component {
  constructor(props) {
    super(props);

    this.deleteSection = this.deleteSection.bind(this);
  }

  deleteSection = () => {
    const section = document.getElementById(`education-section-container${this.props.sectionNumber}`);
    section.remove();
  }

  render() {
    return (
      <div id={`education-section-container${this.props.sectionNumber}`} className="container">
        <section>
        <div className="preview-container">
              <div className="left">
                <p className="preview-label">School Name</p>
                <p className="preview-value">{this.props.sectionData.schoolName}</p>
                <p className="preview-label">Profile</p>
                <p className="preview-value">{this.props.sectionData.profile}</p>
              </div>
              <div className="right">
                <p className="preview-label">From</p>
                <p className="preview-value">{this.props.sectionData.fromDate}</p>
                <p className="preview-label">To</p>
                <p className="preview-value">{this.props.sectionData.toDate}</p>
              </div>
            </div>
            <div className={`buttons ${this.props.preview ? "hidden" : ""}`}>
            <button type="button" className="add-section" onClick={this.deleteSection}>Delete section</button>
            </div>
        </section>
      </div>
    );
  }
}

export default EducationSection;
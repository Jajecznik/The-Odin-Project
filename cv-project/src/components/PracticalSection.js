import "../styles/App.css";
import React from "react";

class PracticalSection extends React.Component {
  constructor(props) {
    super(props);

    this.deleteSection = this.deleteSection.bind(this);
  }

  deleteSection = () => {
    const section = document.getElementById(`practical-section-container${this.props.sectionNumber}`);
    section.remove();
  }

  render() {
    return (
      <div id={`practical-section-container${this.props.sectionNumber}`}className="container">
        <section>
        <div className="preview-container">
              <div className="left">
                <p className="preview-label">Company Name</p>
                <p className="preview-value">{this.props.sectionData.companyName}</p>
                <p className="preview-label">Position Title</p>
                <p className="preview-value">{this.props.sectionData.positionTitle}</p>
              </div>
              <div className="right">
                <p className="preview-label">From</p>
                <p className="preview-value">{this.props.sectionData.fromDate}</p>
                <p className="preview-label">To</p>
                <p className="preview-value">{this.props.sectionData.toDate}</p>
              </div>
            </div>
            <div>
              <p className="preview-label">Performed Tasks</p>
              <p className="preview-value">{this.props.sectionData.performedTasks}</p>
            </div>
            <div className={`buttons ${this.props.preview ? "hidden" : ""}`}>
            <button type="button" className="add-section" onClick={this.deleteSection}>Delete section</button>
            </div>
        </section>
      </div>
    );
  }
}

export default PracticalSection;
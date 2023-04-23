import "../styles/App.css";
import React from 'react';
import General from "./General";
import Education from "./Education";
import Practical from "./Practical";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      editButton: true,
      previewButton: false
    }
  }
  
  render() {
    const leftClicked = () => {
      this.setState({
        editButton: true, 
        previewButton: false 
      });
    }

    const rightClicked = () => {
      this.setState({
        editButton: false, 
        previewButton: true 
      });
    }
    
    return (
      <>
        <header>
          <p className="page-header">Build your CV</p>
          <div className="page-mode">
            <button className={`page-mode-btn ${this.state.editButton ? 'add-color' : ''}`} onClick={leftClicked}>Edit</button>
            <button className={`page-mode-btn ${this.state.previewButton ? 'add-color' : ''}`} onClick={rightClicked}>Preview</button>
          </div>
        </header>
        <General generalInfo={this.state.previewButton} />
        <Education generalInfo={this.state.previewButton} />
        <Practical generalInfo={this.state.previewButton} />
      </>
    );
  }
}

export default App;

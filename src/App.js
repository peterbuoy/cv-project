import React from "react";
import SplitPlane from "react-split-pane";
import "./styles/App.css";
import { ContactForm } from "./components/ContactForm";
import { EducationFormList } from "./components/EducationFormList";
import { ExperienceFormList } from "./components/ExperienceFormList";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        <SplitPlane split="vertical" minSize={600}>
          <div id="input-pane">
            <ContactForm />
            <EducationFormList />
            <ExperienceFormList />
          </div>
          <div className="preview-pane"></div>
        </SplitPlane>
      </div>
    );
  }
}

export default App;

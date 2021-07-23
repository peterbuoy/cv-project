import React from "react";
import { v4 as uuidv4 } from "uuid";
import "./styles/App.css";
import { ContactForm } from "./components/ContactForm.js";
import { EducationForms } from "./components/EducationForms.js";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        <ContactForm />
        <EducationForms />
      </div>
    );
  }
}

export default App;

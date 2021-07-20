import  React from 'react';
import {v4 as uuidv4} from 'uuid';
import { Contact } from './components/Contact.js';
import { Education } from './components/Education.js';
import { Experience } from './components/Experience.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      contact: {
        name: "Peter",
        email: "peter@gmail.com",
        number: "123-456-7890",
      },
      education: {
        name: "Technical Center P",
        degree: "I.P.",
        field: "Computer Clients",
        gradYear: "2020",
      },
      experiences: [
        {
          id: uuidv4(),
          company: "Poogle",
          position: "Product Poogler",
          tasks: ['Poogle buzzword', 'Improved performance by 100 poogles', 'Peera Expert'],
          startDate: "2020-02-02",
          endDate: "2020-03-03",
        },
        {
          id: uuidv4(),
          company: "Pacebook",
          position: "Lead Pacer",
          tasks: ['Haskell Monoid', 'Endless Pacing', 'Cambridge Decanters'],
          startDate: "2020-03-03",
          endDate: "2020-02-02",
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <Contact contact={this.state.contact} />
        <Education education={this.state.education} />
        <Experience experiences={this.state.experiences} />
      </div>
    )
  }
}

export default App;

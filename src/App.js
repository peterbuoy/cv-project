import  React from 'react';
import {v4 as uuidv4} from 'uuid';
import './styles/App.css'
import { Contact } from './components/Contact.js';
import { Education } from './components/Education.js';
import { Experience } from './components/Experience.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      contact: {
        name: "name",
        email: "email",
        number: "phone number",
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
    this.handleNameChange = this.handleNameChange.bind(this);
  }
  handleNameChange = ( event ) => {
    console.log('aaaaaaa');
    event.preventDefault();
    //let contact = {...this.state.contact};
    // use spread or something lol?
    this.setState({contact: {name: event.target.value}})
  };

  render() {
    return (
      <div class="app">
        <form>
          Name:
          <input name="name" type="text" onChange={this.handleNameChange} />
        </form>
        <Contact contact={this.state.contact} />
        <Education education={this.state.education} />
        <Experience experiences={this.state.experiences} />
      </div>
    )
  }
}

export default App;

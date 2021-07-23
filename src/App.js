import  React from 'react';
import {v4 as uuidv4} from 'uuid';
import SplitPane from 'react-split-pane'
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
    this.handleContactChange = this.handleContactChange.bind(this);
  }
  handleContactChange = ( event ) => {
    event.preventDefault();
		console.log(`change detected in ${event.target.name}`);
		// There HAS to be a better way to do deal with nested state. This is the top voted answer on stackoverflow
		// https://stackoverflow.com/questions/43040721/how-to-update-nested-state-properties-in-react
		// Almost all of the other answers tell you to mutate state directly while using setState,
		// which react explicitly warns about in the documentation LMAO
    this.setState( (state) => ({
			...state,
			contact: {
				...state.contact,
				[event.target.name]: event.target.value,
			}
		}));
  }

  render() {
    return (
      <div className="app">
        <SplitPane props={this.state} split="vertical" minSize={600}>
					<form>
						<label htmlFor="name">Name
							<input name="name" type="text" onChange={this.handleContactChange} />
						</label>
						<label htmlFor="email">Email
							<input name="email" type="text" onChange={this.handleContactChange} />
						</label>
						<label htmlFor="number">Number
							<input name="number" type="text" onChange={this.handleContactChange} />
						</label>
					</form>
					<div className="display">
						<Contact contact={this.state.contact} />
						<Education education={this.state.education} />
						<Experience experiences={this.state.experiences} />
					</div>
				</SplitPane>
				
      </div>
    )
  }
}

export default App;

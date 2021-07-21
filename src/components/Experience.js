import '../styles/Experience.css'
import { v4 as uuidv4 } from 'uuid'

const Experience = (props) => {
  const createTaskList = (tasks) => tasks.map(task => 
    <li key={uuidv4()}>{task}</li>
  );
  // experiences is an array of experience
  // tasks means job duties/tasks
  const experiences = props.experiences;
  const experienceList = experiences.map(experience => 
    <span key={uuidv4()}>
      {experience.company}, {experience.position} from {experience.startDate} to {experience.endDate}
      <ul>{createTaskList(experience.tasks)}</ul>
    </span>
  );

  return (
    <div className="experience">
      {experienceList}
    </div>
  )
}

export { Experience }
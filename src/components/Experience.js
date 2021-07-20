import '../styles/Experience.css'

const Experience = (props) => {
  const createTaskList = (tasks) => tasks.map(task => 
    <li>{task}</li>
  );
  const experiences = props.experiences;
  const experienceList = experiences.map(experience => 
    <span>
      {experience.company}, {experience.position} from {experience.startDate} to {experience.endDate}
      <ul>{createTaskList(experience.tasks)}</ul>
    </span>
  );

  return (
    <div className="experience">
      Experience
      {experienceList}
    </div>
  )
}

export { Experience }
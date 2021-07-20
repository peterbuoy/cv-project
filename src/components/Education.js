import '../styles/Education.css'

const Education = (props) => {
  return (
    <div className="education">
      Education
      <span>{props.education.name}</span>
      <span>
        {props.education.degree} {props.education.field}, {props.education.gradYear}
      </span>
    </div>
  )
}

export { Education }
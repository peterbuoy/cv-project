import '../styles/Contact.css'

const Contact = (props) => {
  return (
    <div className="contact">
      Contact
      <span>{props.contact.name}</span>
      <span>{props.contact.email}</span>
      <span>{props.contact.number}</span>
    </div>
  )
}

export { Contact } 
import "../styles/Contact.css";

const Contact = (props) => {
  return (
    <div className="contact">
      <span>{props.name}</span>
      <span>{props.email}</span>
      <span>{props.number}</span>
    </div>
  );
};

export { Contact };

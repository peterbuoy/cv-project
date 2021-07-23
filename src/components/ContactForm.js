import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  return (
    <form>
      <label htmlFor="name">
        <input
          defaultValue="Name"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label htmlFor="email">
        <input
          defaultValue="Email"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label htmlFor="number">
        <input
          defaultValue="Number"
          type="text"
          onChange={(e) => setNumber(e.target.value)}
        />
      </label>
    </form>
  );
};

export { ContactForm };

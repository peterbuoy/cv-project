import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  return (
    <div>
      <h3 class="form-header">Contact</h3>
      <form>
        <input
          defaultValue="Name"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          defaultValue="Email"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          defaultValue="Number"
          type="text"
          onChange={(e) => setNumber(e.target.value)}
        />
      </form>
    </div>
  );
};

export { ContactForm };

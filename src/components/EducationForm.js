import { useState } from "react";

const EducationForm = () => {
  const [institution, setInstitution] = useState("");
  const [degree, setDegree] = useState("");
  const [field, setField] = useState("");
  const [gradYear, setGradYear] = useState("");
  return (
    <div>
      <form>
        <label htmlFor="name">
          <input
            defaultValue="Institution"
            type="text"
            onChange={(e) => setInstitution(e.target.value)}
          />
        </label>
        <label htmlFor="email">
          <input
            defaultValue="Degree"
            type="text"
            onChange={(e) => setDegree(e.target.value)}
          />
        </label>
        <label htmlFor="number">
          <input
            defaultValue="Field"
            type="text"
            onChange={(e) => setField(e.target.value)}
          />
        </label>
        <label htmlFor="number">
          <input
            defaultValue="Grad Year"
            type="text"
            onChange={(e) => setGradYear(e.target.value)}
          />
        </label>
      </form>
    </div>
  );
};

export { EducationForm };

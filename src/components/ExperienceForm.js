import { useState } from "react";

const ExperienceForm = () => {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  return (
    <div>
      <form>
        <input
          defaultValue="Company"
          type="text"
          onChange={(e) => setCompany(e.target.value)}
        />
        <input
          defaultValue="Position"
          type="text"
          onChange={(e) => setPosition(e.target.value)}
        />
        <input
          defaultValue="Start Date"
          type="date"
          onChange={(e) => setStartDate(e.target.value)}
        />
        <input
          defaultValue="End Date"
          type="date"
          onChange={(e) => setEndDate(e.target.value)}
        />
      </form>
    </div>
  );
};

export { ExperienceForm };

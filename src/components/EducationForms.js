import { useState } from "react";
import { EducationForm } from "./EducationForm";

const EducationForms = () => {
  // some kind of state (array?) to conditionally render the forms

  return (
    <div>
      {/* some kind of map to list the forms */}
      <EducationForm />
    </div>
  );
};

export { EducationForms };

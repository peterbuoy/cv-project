import { useState } from "react";
import { EducationForm } from "./EducationForm";
import { v4 as uuidv4 } from "uuid";

const EducationFormList = () => {
  const [educationList, setEducation] = useState([uuidv4()]);
  const educationListJSX = educationList.map((form) => (
    <div id={form}>
      <EducationForm />
    </div>
  ));

  return (
    <div>
      {educationList[0] ? <h3 class="form-header">Education</h3> : null}
      {educationListJSX}
      <button onClick={() => setEducation(educationList.concat(uuidv4()))}>
        Add Education
      </button>
      <button onClick={() => setEducation(educationList.slice(0, -1))}>
        Delete Education
      </button>
    </div>
  );
};

export { EducationFormList };

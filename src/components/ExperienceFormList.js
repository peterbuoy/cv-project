import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ExperienceForm } from "./ExperienceForm";

const ExperienceFormList = () => {
  const [experienceList, setExperienceList] = useState([uuidv4()]);
  const experienceListJSX = experienceList.map((experience) => (
    <div id={experience}>
      <ExperienceForm />
    </div>
  ));
  return (
    <div>
      {experienceList[0] ? <h3 class="form-header">Experience</h3> : null}

      {experienceListJSX}
      <button
        onClick={() => setExperienceList(experienceList.concat(uuidv4()))}
      >
        Add Experience
      </button>
      <button onClick={() => setExperienceList(experienceList.slice(0, -1))}>
        Delete Experience
      </button>
    </div>
  );
};

export { ExperienceFormList };

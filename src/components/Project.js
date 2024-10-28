import React from "react";
import Fade from 'react-reveal/Fade';
import TodosImage from './assets/Todos.jpg'; // Adjust the path based on your structure

const Project = () => {
  return (
    <div>
      <div className="project project1">
        <div className="details">
          <Fade left cascade>
            <h4>TODO LIST</h4>
            <p>
              A todo list is a practical and efficient tool for organizing and managing tasks or activities that need to be completed. <br />
              It allows you to clearly outline tasks, helping ensure nothing important is missed. <br />
              By prioritizing tasks according to their urgency or importance, it enhances time management.<br />
            </p>
          </Fade>
        </div>
        <div className="img-container">
          <Fade left cascade>
            <img src={TodosImage} alt="Todo List Project" />
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default Project;

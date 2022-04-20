import React from "react";
import "../styles/Task.css";

function Task(){
    return (
        <div className="Allover">
        <div className="Taskify">
              <div className="Homely"><button>X</button></div>
              <div className="BookMe"><h3>Book Me An Artisan</h3></div>
              <div className="Secondary"
      >
<div className="Choose1">
    <p>Task</p>
</div>

<div className="Choose2">
    <p>Location</p>
</div>

<div className="Choose3">
    <p>Choose an artisan</p>
</div>

<div className="Choose4">
    <p>Confirm</p>
</div>
      </div>

      <div className="Heading"><h4>Please tell us more about your task</h4></div>
      <div className="Formheading">
          <form>
              <label>Sub Category</label>
              <input className="Sub-Category"  type="text" id="Sub" name="Sub"/>
          
              <label>Task Description </label>
              <textarea className="Sub-Category"  type="text" id="Sub" name="Sub" />
              <button>Next</button>
          </form>
        
      </div>
        </div>
        </div>
        )
    };
    export default Task 
    
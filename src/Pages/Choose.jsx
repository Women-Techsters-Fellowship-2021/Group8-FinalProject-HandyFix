import { Link } from "react-router-dom";
import React from "react";
import Picture from "../Images/Picture.jpg";
import "../styles/Choose.css";

function Choose(){
    return (
        <div className="Choose">
        <div className="First">
      
        <div className="Home"><button>X</button></div>
    <div className="Choosediv" >
      <h3>Book Me An Artisan</h3>
      <div className="Second1"
      >
<div className="Task1">
    <p>Task</p>
</div>

<div className="Task2">
    <p>Location</p>
</div>

<div className="Task3">
    <p>Choose an artisan</p>
</div>

<div className="Task4">
    <p>Confirm</p>
</div>
      </div>
    </div>

    <h4>Please choose your preffered artisan</h4>
    <p>HandyFix Artisans around you</p>
    <div className="Class">
        <div className="Third">
            <div className="image"> <img src={Picture} width={100} height={70} alt="" /></div>
            <div className="portion">
                <p>Smith John</p>
                <p>Age:32</p>
                <p>Language:Yoruba, English </p>
                <p>Available: Monday-Thursday</p>
                <p>Time: 7am-6pm</p>
            </div>
            <div > <button type="button" className="Book">Book Now</button></div> 
        </div>
    </div>
    <div className="Class">
          <div className="Third">
            <div className="image">  <img src={Picture} width={100} height={70} alt="" /></div>
            <div className="portion">
                <p>Smith John</p>
                <p>Age:32</p>
                <p>Language:Yoruba, English </p>
                <p>Available: Monday-Thursday</p>
                <p>Time: 7am-6pm</p>
            </div>
        <div> <button type="button" className="Book">Book Now</button></div> 
            </div>
            </div>
            <div className="Last">
    <div> <Link to="#" > <button type="submit" className="button1">Previous</button> </Link> </div>
  <div className="Last2" ><Link to="#"> <button type="submit">Next</button></Link></div> 
 </div>
  </div>
  </div>
    )
};
export default Choose 

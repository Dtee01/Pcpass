import { useState } from "react";
import "./AddStudent.css";

function AddStudent(){

const departmentId = sessionStorage.getItem("departmentId");

const [student,setStudent] = useState({

name:"",
surname:"",
regNumber:"",
email:"",
phone:""

});

const handleChange = (e) => {

setStudent({

...student,
[e.target.name]: e.target.value

});

};

const handleSubmit = (e) => {

e.preventDefault();

const studentData = {

...student,
departmentId: departmentId

};

console.log(studentData);

/* Later this will go to Spring Boot API */

};

return(

<div className="add-student-container">

<h1>Add Student</h1>

<form className="form-panel" onSubmit={handleSubmit}>

<input
type="text"
name="name"
placeholder="Student Name"
value={student.name}
onChange={handleChange}
/>

<input
type="text"
name="surname"
placeholder="Surname"
value={student.surname}
onChange={handleChange}
/>

<input
type="text"
name="regNumber"
placeholder="Registration Number"
value={student.regNumber}
onChange={handleChange}
/>

<input
type="email"
name="email"
placeholder="Email Address"
value={student.email}
onChange={handleChange}
/>

<input
type="text"
name="phone"
placeholder="Phone Number"
value={student.phone}
onChange={handleChange}
/>

<button className="submit-btn">

Save Student

</button>

</form>

</div>

);

}

export default AddStudent;

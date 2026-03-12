import { Link } from "react-router-dom";
import "./ViewStudents.css";

function ViewStudents(){

return(

<div>

<h1>Students</h1>

<Link to="/department/students/add">

<button className="add-btn">

Add Student

</button>

</Link>

<table className="data-table">

<thead>

<tr>

<th>Reg Number</th>
<th>Name</th>
<th>Surname</th>
<th>Email</th>
<th>Phone</th>

</tr>

</thead>

<tbody>

<tr>

<td>R22145</td>
<td>Tawanda</td>
<td>Moyo</td>
<td>tmoyo@email.com</td>
<td>0771234567</td>

</tr>

</tbody>

</table>

</div>

)

}

export default ViewStudents

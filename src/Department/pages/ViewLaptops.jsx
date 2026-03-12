import "./ViewLaptops.css";

function ViewLaptops(){

return(

<div>

<h1>Registered Laptops</h1>

<div className="table-container">

<table className="laptop-table">

<thead>

<tr>

<th>Serial Number</th>
<th>Model</th>
<th>Student Reg</th>
<th>Date Registered</th>

</tr>

</thead>

<tbody>

<tr>

<td>SN889231</td>
<td>Dell Inspiron</td>
<td>R22145</td>
<td>2026-03-07</td>

</tr>

<tr>

<td>SN772211</td>
<td>HP Elitebook</td>
<td>R22150</td>
<td>2026-03-07</td>

</tr>

</tbody>

</table>

</div>

</div>

)

}

export default ViewLaptops

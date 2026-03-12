import "./LapDeclaration.css";

function LaptopDeclaration(){

return(

<div>

<h1>Laptop Declaration</h1>

<div className="declaration-container">

<div className="declaration-form">

<label>Laptop Serial Number</label>
<input
type="text"
placeholder="Enter laptop serial"
/>

<label>Laptop Model</label>
<input
type="text"
placeholder="Enter laptop model"
/>

<label>Owner Registration Number</label>
<input
type="text"
placeholder="Enter student registration"
/>

<div className="button-group">

<button className="clear-btn">

Clear

</button>

<button className="register-btn">

Register Laptop

</button>

</div>

</div>

</div>

</div>

)

}

export default LaptopDeclaration

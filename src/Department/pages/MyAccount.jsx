import "./MyAccount.css";

function MyAccount(){

return(

<div>

<h1>My Account</h1>

<div className="account-panel">

<label>Current Password</label>
<input type="password"/>

<label>New Password</label>
<input type="password"/>

<label>Confirm Password</label>
<input type="password"/>

<button className="update-btn">

Update Password

</button>

</div>

</div>

)

}

export default MyAccount

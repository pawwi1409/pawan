function login(){
	var username=document.getElementById("userNameId").value;
	var password=document.getElementById("passwordId").value;
	var user="admin";
	var pass="admin";
	if(username==user && password==pass)
	{
		return true;
	}
	else
        alert("Username or Password does not match!!!");
		return false;
}

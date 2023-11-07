function validate(){
    var username=document.getElementById('username').value;
    var password=document.getElementById('password').value;

    if(username.trim()=="" || password.trim()==""){
        alert("Please enter a valid username and password");
        return false;
    }
    else{
        return true;
    }
}

var nameerr=document.getElementById("nameerr")
var emailerr=document.getElementById("emailerr")
var passworderr=document.getElementById("passworderr")
var submiterr=document.getElementById("submiterr")

function validatename() {
    var name =document.getElementById("name").value
    if (name==="") {
        nameerr.innerHTML="Please enter your username"
    }
    else {
        nameerr.innerHTML= "Please continue"
        return true
    }
}

function validateemail(){
    var email =document.getElementById("email").value
    if (email.length===0) {
        emailerr.innerHTML="Please enter your email"
        return false
    }
     else if (!email.match(/^\w+@[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        emailerr.innerHTML="Please provide a valid email"
        return  false
    }
    emailerr.innerHTML=" Please continue"
    return true
}

function validatepassword() {
    var password =document.getElementById("password").value
    if (password.length===0) {
        passworderr.innerHTML="Please enter your password"
        return false 
    }
    if (!password.match( /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^\w\s])(?=\S+$).{8,}$/)) {
        passworderr.innerHTML="password must be stronger"
        return false
    }
    passworderr.innerHTML="Please continue"
    return true
}

function validatebutton(){
    if(!validatename() ||!validateemail()||!validatepassword()){
        submiterr.innerHTML="Please check your input"
        return false
    }
}
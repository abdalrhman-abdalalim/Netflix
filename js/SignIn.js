var submitBtn=document.getElementById("sumbitBtn");
submitBtn.disabled=true;
// to unactive submit button
function valid(){
    var email=document.getElementById("email").value ;
// call email by his value 
    var password=document.getElementById("password").value ;
    var emailError=document.getElementById("emailError") ;
    var paswordError=document.getElementById("passwordError") ;
// ctr+d => select word directly
    if(email.indexOf("@")==-1 || email.length<=0){
// indexOf return postion of char , if it equal -1 that means not found
        emailError.innerHTML="Please Enter a valid Email";
        submitBtn.disabled=true;
    }
    else if(email.indexOf("@")>-1 && email.length>0){
        emailError.innerHTML="";
    } 
    if(password.length<4 || password.length>60){
        passwordError.innerHTML="Please Enter a valid password";
        submitBtn.disabled=true;
    } 
    else if(password.length>4 || password.length<60){
        passwordError.innerHTML="";
    } 
    if(email.indexOf("@")>-1 && email.length >0 && password.length>4 && password.length<60 ){
        submitBtn.disabled=false;
    }
}
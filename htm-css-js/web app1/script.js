function dispMessage(){
   // a=10
    //b=20
   // c=a+b
  //alert(c)
  //iblMessage.innerHTML=(document.getElementById("txtEmail").value)
 // Message.innerHTML=(document.getElementById("pass").value)
  let email=document.getElementById("txtEmail").value
  let pass=document.getElementById("pass").value
  if(email=="alekhya05@gmail.com"&&pass=="0508"){
    Message.innerHTML="Welcome"
  }
  else{
    Message.innerHTML="Access denied"
  }
  
function showLoginForm(){
    let str = `
    <h3>Login Form</h3>
      <p><label id="lblMessage"></label></p>
      <p><input type="text" id="txtEmail" /></p>
      <p><input type="password" id="txtPassword" /></p>
      <p><button class="login-btn" onclick="dispMessage()">Log In</button></p>
      <hr>
      <p><button class="register-btn" onclick="showRegisterForm()">Create Account</button></p>
    `
    root.innerHTML = str;
}

function showRegisterForm(){
    let str =  `
     <h3>Registration Form</h3>`
      root.innerHTML = str;
}
}
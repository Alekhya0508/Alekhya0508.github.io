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
}
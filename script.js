function checkPass(){
 let pass=document.getElementById("pass").value;
 if(pass==="1731"){
  window.location.href="page2.html";
 }else{
  document.getElementById("error").innerText="Wrong password";
 }
}

function moveNo(btn){
 btn.style.position="absolute";
 btn.style.top=Math.random()*80+"%";
 btn.style.left=Math.random()*80+"%";
}
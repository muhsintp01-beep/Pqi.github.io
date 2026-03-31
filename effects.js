const canvas=document.getElementById("fireworks");

if(canvas){
 const ctx=canvas.getContext("2d");
 canvas.width=innerWidth;
 canvas.height=innerHeight;

 let particles=[];

 function createFirework(){
  let x=Math.random()*canvas.width;
  let y=Math.random()*canvas.height/2;

  for(let i=0;i<70;i++){
    particles.push({
      x:x,y:y,
      angle:Math.random()*Math.PI*2,
      speed:Math.random()*5+2,
      life:100,
      color:`hsl(${Math.random()*360},100%,60%)`
    });
  }
 }

 function animate(){
  ctx.fillStyle="rgba(0,0,0,0.2)";
  ctx.fillRect(0,0,canvas.width,canvas.height);

  particles.forEach((p,i)=>{
    p.x+=Math.cos(p.angle)*p.speed;
    p.y+=Math.sin(p.angle)*p.speed;
    p.life--;

    ctx.fillStyle=p.color;
    ctx.fillRect(p.x,p.y,2,2);

    if(p.life<=0) particles.splice(i,1);
  });

  requestAnimationFrame(animate);
 }

 setInterval(createFirework,1200);
 animate();
}
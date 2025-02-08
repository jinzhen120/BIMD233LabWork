var canvas= document.getElementById("myCanvas");
var context = canvas.getContext("2d");

  // context.fillStyle ="#00ff00";
  // context.fillRect(0,0,200,200);

context.lineWidth=5;
context.moveTo(200,20);
context.lineTo(200,580);
context.moveTo(400,20);
context.lineTo(400,580);
context.moveTo(20,200);
context.lineTo(580,200);
context.moveTo(20,400);
context.lineTo(580,400);


var x1=110, y1=110, radius=75, angle=2.0*Math.PI;
var x2=300, y2=300;
var x3=490, y3=490;
context.moveTo(x1+radius,y1);
context.arc(x1, y1, radius, 0, angle);

context.moveTo(x2-90,y2-90);
context.lineTo(x2+90,y2+90);
context.moveTo(x2+90,y2-90);
context.lineTo(x2-90,y2+90);

context.moveTo(x3+radius,y3);
context.arc(x3, y3, radius, 0, angle);

context.stroke();


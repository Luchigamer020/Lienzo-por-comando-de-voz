x=0;
y=0;
screen_width=0;
screen_height=0;
apple="";
draw_apple="";
speak_data="";
to_number=0;

function preload() {
    apple=loadImage("https://img.lovepik.com/free-png/20220108/lovepik-apple-png-image_401277864_wh860.png");
}

var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();

function start() {
    document.getElementById("status").innerHTML="El sistema te está escuchando, por favor habla";
    recognition.start();
}

recognition.onresult=function(event){console.log(event);var content=event.results[0][0].transcript;
document.getElementById("status").innerHTML="Haz dicho: "+content;
if(Number.isInteger(to_number)) {
    document.getElementById("status").innerHTML="Se empezó a dibujar manzana";
    draw_apple="set";
}
else {
    document.getElementById("status").innerHTML="No se reconoció un número";   
}}

function setup() {
    screen_width=window.innerWidth;
    screen_height=window.innerHeight;
    canvas=createCanvas(screen_width,screen_height);
    canvas.position(0,150);
}

function draw() {
if(draw_apple=="set") {
    for(var i=1; i<=to_number; i++) {
        x=Math.floor(Math.random()*700);
        y=Math.floor(Math.random()*400);
        image(apple,x,y,50,50);
    }
    document.getElementById("status").innerHTML=to_number+" Manzanas dibujadas";
    speak_data=to_number+" Manzanas dibujadas";
    speak();
    draw_apple="";
}
}

function speak() {
    var synth=window.SpeechSynthesis;
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    speak_data="";
}
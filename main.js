var x = 0;
var y = 0;

draw_circle = "";
draw_rectangle = "";

var v1 = window.webkitSpeechRecognition;
var v2 = new v1();

function start() {
    document.getElementById("status").innerHTML = "System is listening please speak";
    v2.start();
}
v2.onresult = function(event) {
    console.log(event);
    var a1 = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "The speech has been recognised as : " + a1;

    if (a1 == "circle") {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing circle";
        draw_circle = "set";
    }

    if (a1 == "rectangle") {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing rectangle";
        draw_rectangle = "set";
    }
}
function setup() {
    Canvas = createCanvas(900, 600);
}

function draw() {
    if (draw_circle == "set") {
        radius = Math.floor(Math.random() * 100);
        circle(x, y, radius);
        document.getElementById("status").innerHTML = "Circle is drawn";
        draw_circle = "";
    }

    if (draw_rectangle == "set") {
       
        rect(x, y,70,50);
        document.getElementById("status").innerHTML = "rectangle is drawn";
        draw_rectangle = "";
    }
}
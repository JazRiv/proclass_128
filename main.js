cancion_1 = "";
cancion_2 = "";
dere_x = 0;
dere_y = 0;
izq_x = 0;
izq_y = 0;

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    modelo = ml5.poseNet(video, modelocargado);
    modelo.on("pose", obtener);
}

function preload(){
    cancion_1= loadSound("dance_monkey.mp3");
    cancion_2 =loadSound("never_gonna_give_you_up.mp3");
}

function draw(){
    image(video, 0, 0, 300, 300);
}

function modelocargado(){
    console.log("Modelo listo");
}

function obtener(resultado){
    if (resultado.length > 0){
        console.log(resultado);
    }
}

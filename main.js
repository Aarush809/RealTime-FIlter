function setup(){
    canvas= createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/csinA2PpI/model.json',modelLoaded)
}
function modelLoaded(){
    console.log("model is loaded")
}

function draw() {
image(video,0,0,300,300)
classifier.classify(video,gotResult)
}

function gotResult(error,result){
    if(error){
        console.error(error);

    }
    else{
        console.log(result);
        document.getElementById("Object_name").innerHTML=result[0].label;
        document.getElementById("Accuracy").innerHTML=result[0].confidence.toFixed(2);
    }
}

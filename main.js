function setup() {
    canvas = createCanvas(550, 550);
    canvas.position(510, 150);
    video = createCapture(VIDEO);
    video.size(400, 300);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is Initialized!");
}

function gotPoses(results){
    if (results.length > 0) {
    console.log(results)
    }
    
}
noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;
function setup() 
{
    video = createCapture(VIDEO);
    video.size(450, 500);

    canvas = createCanvas(700, 390);
    canvas.position(450, 150);

    poseNet = ml5.poseNet(video, modelLoaded);

    poseNet.on('pose', gotPoses)
}
function draw()
{
    background("#969A97");
    textSize(difference);
    document.getElementById("font_size").innerHTML = "Size of the text will be = " + difference + "px";
    fill('#FFE787');
    text('Medhansh', noseX,noseY);
}
function modelLoaded(){
    console.log("PoseNet Is Initialized!");
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);

        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + "noseY = " + noseY);

        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference = " + difference);    

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
    }
}
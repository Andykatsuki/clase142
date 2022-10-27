noseX=0;
noseY=0;

function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);
	video=createCapture(VIDEO);
	video.size(800,400);
	video.parent("game_console");


	poseNet=ml5.poseNet(video,modelLoaded);
	poseNet.on("pose", gotPoses);
}

function gotPoses(results)
{
  if(results.length>0)
  {
	console.log(results);
    noseX=results[0].pose.nose.x;
	noseY=results[0].pose.nose.y;
	console.log("posición en x" + noseX + "posición en y" + noseY);
  }
}

function modelLoaded()
{
   console.log("modelo cargado");
}

function draw() {
	game()
	if(noseX<300)
	{
		marioX=marioX-1;
	}
	if(noseX>300)
	{
		marioX=marioX+1;
	}
	if(noseY<150)
	{
		marioY=marioY-1,
	}
	image(img,marioX,marioY,40,70);
}








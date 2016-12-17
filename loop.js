var inittime = new Date().getTime();
var time = 0;
var lasttime = 0;

var walkingAnimationTime = 1000;

var moving = true;

while(moving) {
  time = new Date().getTime() - inittime;
  deltaTime = 0;
  
  if(time >= walkingAnimationTime) {
    inittime = new Date().getTime();
    time = 0;
    lasttime = 0;
  }
  
  if(time < 500) {
    console.log("Left front leg up !");
  }
  else if(time < 1000) {
    console.log("Left front leg down !");
  }
  else if(time < 1500) {
    console.log("Right back leg up !");
  }
  else if(time < 2000) {
    console.log("Right back leg down !");
  }
  else if(time < 2500) {
    console.log("Left back leg up !");
  }
  else if(time < 3000) {
    console.log("Left back leg down !");
  }
  else if(time < 3500) {
    console.log("Right front leg up !");
  }
  else if(time < 4000) {
    console.log("Right front leg down !");
  }
  
  while(deltaTime < 500) {
    // Wait...
    deltaTime = new Date().getTime() - time - inittime;
  }
}
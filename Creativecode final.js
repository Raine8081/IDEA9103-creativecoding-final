let colors = [];
let nums1 = [10, 100, 210, 320, 470, 500, 630, 700, 790];
let nums2 = [30, 100, 210, 300, 400, 550, 630, 750, 790];
let scaleX, scaleY;
let walkerX;
let walkerY;
let stepSize = 10;
let trail = [];
let squareX;
let squareY;
let squareSize = 50; // add the first squaresize

function setup() {
  createCanvas(windowWidth, windowHeight);
 //I delete the noloop to make the animation easier to be seen 
  noStroke();
  background(250);
  frameRate(10);//the speed of animate
  randomSeed(123); //add a fixed seed to move
 //to control how many space the rect shape would be move 
  walkerX = width / 2;
  walkerY = height / 2;
  squareX = random(0, width - squareSize);
  squareY = random(0, height - squareSize);
// color
  let grayColor = color(150);
  let blueColor = color(21, 29, 176);
  let redColor = color(161, 7, 2);

  colors.push(grayColor);
  colors.push(blueColor);
  colors.push(redColor);

  scaleX = windowWidth / 800;
  scaleY = windowHeight / 800;
}
// the window could be maintain the same shape of canvas
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  scaleX = windowWidth / 800;
  scaleY = windowHeight / 800;
}

function draw() {
  //the background has changed the ocpaity, which could easily find the trail of large rectangle
  background(250,250,250,25);
 //random walker!!
 //add the random to make the shape changes
  squareX += random(-stepSize, stepSize);
  squareY += random(-stepSize, stepSize);

 // in the right constrain between
  squareX = constrain(squareX, 0, width - squareSize);
  squareY = constrain(squareY, 0, height - squareSize);
// Actually it is a test to make sure the shape moving randomly,but I kept it
  fill(255, 0, 0);
  rect(squareX, squareY, squareSize, squareSize);
//the random move
  walkerX = lerp(walkerX, mouseX, 0.05);
  walkerY = lerp(walkerY, mouseY, 0.05);
//And adding the trail of the shape moves
  for (let i = 0; i < trail.length; i++) {
    fill(random(colors));
    rect(trail[i].x, trail[i].y, trail[i].width, trail[i].height);
  }
//vertical rectangles
  for (let i = 1; i < 10; i++) {
    if (i == 2 || i == 4 || i == 7) {
      let x = width / 40 * i * 5;
      let y = 0;
      let w = width / 50;
      let h = height / 2;
      rect(x, y, w, h);
 // and the small rect with 3 colors
      for (let k = 0; k < 15; k++) {
        fill(random(colors));
        rect(x, random(0, h), w, 20);
      }
    } else {
      let x = width / 50 * i * 5;
      let y = 0;
      let w = width / 50;
      let h = height;
      fill(255, 229, 6);
      rect(x, y, w, h);
     
      for (let k = 0; k < 15; k++) {
        fill(random(colors));
        rect(x, random(0, h), w, 20);
      }
      fill(255, 229, 6);
    }
  }
  // the random-walkers changing big rectangles
  fill(random(colors));
  rect(walkerX, walkerY, random(200, 400), random(50, 600));

  fill(random(colors));
  rect(walkerX * 2, walkerY * 2, random(200, 400), random(200, 500));

  fill(random(colors));
  rect(walkerX * 5, walkerY * 5, random(200, 400), random(200, 700));

  fill(random(colors));
  rect(walkerX / 3, walkerY * 10, random(200, 400), random(600, 1800));
 ////horizontal rectangles
  for (let j = 1; j < 8; j++) {
    if (j == 1 || j == 5 || j == 6) {
      let x = 0;
      let y = height / 8 * j;
      let w = width / 2;
      let h = height / 40;
      rect(x, y, w, h);
  // the small 3-color rectangle
      for (let k = 0; k < 15; k++) {
        rect(random(0, w), y, 20, h);
        fill(random(colors));
      }
    } else {
      x = 0;
      y = height / 8 * j;
      w = width;
      h = height / 40;
      rect(x, y, w, h);
      for (let k = 0; k < 15; k++) {
        rect(random(0, w), y, 20, h);
        fill(random(colors));
      }
      fill(255, 229, 6);
    }
  }
// the fixed rectangles(7 groups in total)
  fill(random(colors));
  rect(walkerX / 3, walkerY / 3, random(200, 400), random(200, 400));

  for (let i = 0; i < 8; i++) {
    noStroke();
    fill(colors[1]);
    rect(nums1[i] * scaleX, nums2[i] * 3 * scaleY, 100 * scaleX, 70 * scaleY);
  }

  for (let i = 0; i < 8; i++) {
    noStroke();
    fill(colors[2]);
    rect(nums1[i] * scaleX, nums2[i] * 2 * scaleY, (100 + 50) * scaleX, 80 * scaleY);
  }

  for (let i = 0; i < 8; i++) {
    noStroke();
    fill(colors[2]);
    rect(nums1[i] * 2 * scaleX, nums2[i] * scaleY, 60 * scaleX, 50 * scaleY);
  }

  for (let i = 0; i < 6; i++) {
    noStroke();
    fill(colors[2]);
    rect(nums1[i] * 2 * scaleX, nums2[i] * scaleY, 60 * scaleX, 50 * scaleY);
  }

  for (let i = 0; i < 10; i++) {
    noStroke();
    fill(colors[0]);
    rect((nums1[i] * 2 + 20) * scaleX, (nums2[i] + 10) * scaleY, 30 * scaleX, 30 * scaleY);
  }

  for (let i = 0; i < 10; i++) {
    noStroke();
    fill(255, 229, 6);
    rect((nums1[i] + 200) * scaleX, (nums2[i] + 200) * scaleY, 40 * scaleX, 80 * scaleY);
  }

  for (let i = 0; i < 10; i++) {
    noStroke();
    fill(colors[1]);
    rect((nums1[i * 2] + 220) * scaleX, (nums2[i] + 400) * scaleY, 100 * scaleX, 80 * scaleY);
  }
}


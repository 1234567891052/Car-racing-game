var car;
var track = [];
var obstacles = [];
var life = 1;
var playAgain;
var score = 0;

function setup(){
  createCanvas(1300, 600);

  car = new Car(width / 2, height - 30, 20, 40, "blue");

  for(var x = 100; x < width; x += 200){
    track[x] = [];
    for(var y = 0; y < height + 30; y += 30){
      track[x][y] = new Track(x, y);
    }
  }

  for(var x = 100; x < width - 200; x += 160){
    obstacles[x] = [];
    for(var y = 0; y < 500; y += 250){
      obstacles[x][y] = new Obstacles(x, y, 10, 20);
    }
  }
}

function draw(){
  background("black");

  if (life === 1) {
    score = round(frameCount / 100);
    text("SCORE : " + score, 1200, 10);

    for(var x = 100; x < width; x += 200){
      for(var y = 0; y < height + 30; y += 30){
        track[x][y].display();
        track[x][y].move();

        if(track[x][y].y >= height){
          track[x][y].y = 0;
        }
      }
    }
    car.display();

    if(keyIsDown(RIGHT_ARROW)){
      car.move(10, 0);
    }

    if(keyIsDown(LEFT_ARROW)){
      car.move(-10, 0);
    }

    if(car.x <= 0){
      car.x = 0;
    }

    if(car.x >= width){
      car.x = width;
    }

    for(var x = 100; x < width - 200; x += 160){
      for(var y = 0; y < 500; y += 250){
        var p = random(0, 1);
        obstacles[x][y].display();
        obstacles[x][y].move(10);

        if(obstacles[x][y].y >= height){
          obstacles[x][y].y = 0;

          if(p <= 0.5){
            obstacles[x][y].x += 20;
          }
          else{
            obstacles[x][y].x -= 20;
          }
        }

        if(obstacles[x][y].x <= 0){
          obstacles[x][y].x += 10
        }

        if(obstacles[x][y].x >= width){
          obstacles[x][y].x -= 10;
        }

        if (obstacles[x][y].IsTouching(car) === true) {
          life = life - 1;
        }
      }
    }
  }

  if (life === 0) {
    textSize(20);
    text("YOU LOSE!", width/2 - 10, height/2);
  }
}

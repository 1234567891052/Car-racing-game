function Car(x, y, width, height, colour){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.colour = colour;

    this.display = function(){
        fill(this.colour);
        noStroke();
        rectMode(CENTER);
        rect(this.x, this.y, this.width, this.height);
    }

    this.move = function(xvel, yvel){
        this.x += xvel;
        this.y -= yvel;
    }
}
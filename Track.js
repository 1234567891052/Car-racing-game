function Track(x, y){
    this.x = x;
    this.y = y;

    this.display = function(){
        fill("white");
        noStroke();
        rectMode(CENTER);
        rect(this.x, this.y, 2, 8);
    }

    this.move = function(){
        this.y += 5;
    }
}
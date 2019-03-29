var w = window.innerWidth;
      var h = window.innerHeight;
      var jumper = new jumper();
      
      function jumper() {
        this.x = 50;
        this.y = 0;
        this.gravity = 0.5; //The force of gravity
        this.lift = -10; //Opposing the force of gravity
        this.velocity = 0; //Velocity of player
        
        this.show = function() {
          fill(color('red'));
          ellipse(this.x,this.y,50,50);
        }
        
        this.up = function() {
          this.velocity += this.lift; //Jumping function
        }
        
        this.update = function() {
          this.velocity += this.gravity; //Gravity applied when not jumping
          this.y += this.velocity;
          this.velocity *= 0.98; //air resistance
          if (this.y > h-27.5) { //jumper hits the floor
            this.y = h-27.5;
            this.velocity = 0;
          }
          if (this.y < 27.5) {
            this.y = 27.5;
            this.velocity = 0;
          }
        }
        
        this.move = function() {
          if (keyIsDown(68) && this.x < w-27.5) {
          this.x += 5;
          }
          if (keyIsDown(65) && this.x > 27.5) {
          this.x -= 5;
          }
        }
      } //Jumper object ends here
      
      function keyPressed() {
        if (keyCode === 32) {
          jumper.up();
        }
      }
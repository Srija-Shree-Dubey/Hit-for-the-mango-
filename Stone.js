  class Stone
{
    constructor(x,y,r)
    {
        var options =
        {
             isStatic : false,
             resitution : 0,
             friction : 1,
             density : 0.1
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.image = loadImage("stone.png");
        this.body = Bodies.circle(x,y,r,options);
        
        World.add(world,this.body);
    }
	display()
	{
			var pos = this.body.position;
      var angle = this.body.angle;		
			push()
			translate(pos.x, pos.y);
      rotate(angle);
			imageMode(RADIUS);
      image(this.image,0,0, this.r, this.r);
			pop()
	}
}

  
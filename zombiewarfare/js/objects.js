const bullet=[];

const objects= (name,that,x,y,width,height) =>
{
	switch(name)
	{
		case "player":
		that.x=0;
		that.y=60;
		that.width=30;
		that.height=30;
		that.color="blue";
		that.step=30;
		that.image=new Image();
		that.image.src='image/stickman.png';
		break;
		
		case "bullet":
		that.x=x+width;
		that.y=y+(height/5);
		that.width=10;
		that.height=2.5;
		that.color="yellow";
		that.speed=5;
	}
}
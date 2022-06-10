let upButton=false,rightButton=false,downButton=false,leftButton=false,shootButton=false;

window.addEventListener('keydown',e=>{
    switch (e.which)
	{
        case 37:
        pressed("left")
        break;
        case 39:
        pressed("right")
        break;
        case 38:
        pressed("up")
        break;
        case 40:
        pressed("down")
        break;
		case 32: //spacebar
		pressed("shoot")
		break;
	}
    })

function pressed(key)
{
	switch(key)
	{
		case "up":
		upButton=true;
		break;
		case "right":
		rightButton=true;
		break;
		case "down":
		downButton=true;
		break;
		case "left":
		leftButton=true;
		break;
		case "shoot":
		shootButton=true;
		break;
	}
	blink(key);
}

function blink(key)
{
	const KEY=document.getElementById(key).style;
	KEY.color="black";
	KEY.backgroundColor="white";
	setTimeout(()=>{
		KEY.color="white";
		KEY.backgroundColor="black";
	},200)
}
const player=new create("player");

function game()
{
  ctx.clearRect(0,0,canvas.width,canvas.height);
  drawBg();
  player.checkCollision();
  player.control();
  player.draw();
  player.shoot();
  allBullet();
  requestAnimationFrame(game)
}
game();

function drawBg()
{
	mapImage= new Image();
	mapImage.src='image/bg.jpg';
	ctx.drawImage(mapImage,0,0,canvas.width,canvas.height)
}

function allBullet()
{
	bullet.forEach(v=>{v.draw();v.update()})
}
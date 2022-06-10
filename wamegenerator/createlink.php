<!DOCTYPE html>
<html>
<head>
<?php require "../../template/head.php" ?>
<?php require "styles.php" ?>
</head>
<body align="center">
<?php
$now="{$_SERVER['REQUEST_URI']}";
$result="";
$found=false;
for($i=0;$i<strlen($now);$i++)
{
	if($now[$i]=="=" && $now[$i-1]=="t")
	{
		$found=true;
	}
	if($found)
	{
		$result=$result.$now[$i];
	}
}
$link="https://wa.me/".$_GET[number]."?text".$result;
?>
	<h1>Wa.me Generator</h1>
	<div id="watermark">Powered by <a href="https://muraft.great-site.net">MuRafT</a></div>
	
	<section align="center">
		<?php
		echo "<h3>Your wa.me link generated succesfully</h3>";
		echo "<a href=$link><button class='button'>Visit link</button></a><br>or copy this link below";
		echo "<h4>$link</h4>";
		echo "<a href='index.php'><button class='button'>Create another link</button></a>"
		?>
	</section>

</body>
</html>
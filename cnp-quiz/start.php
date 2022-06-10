<html>
<head>
<?php
echo "<title>".$_GET[ID]."|CNP Quiz</title>";
?>
<?php require "../../template/head.php"?>
<?php require "styles.php" ?>
</head>
<body align="center">
	<h1>Create & Play Quiz</h1>
	<div id="watermark">Powered by <a href="https://muraft.great-site.net">MuRafT</a></div>
	<a href="index.php">
	<button class="button">Return to menu</button>
	</a>
	
	<section align="center">
		<?php
		if(filesize("questions/".$_GET[ID].".txt")>0)
			{
				$read = file("questions/".$_GET[ID].".txt");
				$index=0;
				$questions=[];
				foreach ($read as $line)
				{
				$questions[$index]=$line;
				$index++;
				}
				
				echo '<h3> Quiz with ID:"'.$_GET[ID].'" found!</h3>';
				echo "<h4>Total Question: ".(count($questions)/6)."</h4>";
				echo '<form action="play.php" method="POST">';
				echo 'Insert your name <br>';
				echo '<input type="text" name="username" required> <br>';
				echo '<input type="hidden" name="questionid" value="'.$_GET[ID].'">';
				echo '<input type="hidden" name="number" value="1">';
				echo '<input type="hidden" name="realnumber" value="1">';
				echo '<input type="hidden" name="score" value="0">';
				echo '<input type="hidden" name="answer" value="X">';
				echo '<input type="submit">';
				echo '</form>';
			}
		else
		{
			echo '<h3> Quiz width ID:"'.$_GET[ID].'" not found!</h3>';
			echo '<a href="index.php"><button class="button">Return to menu</button></a>';
		}
		?>
	</section>
</body>
</html>
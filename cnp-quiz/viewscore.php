<html>
<head>
<?php
echo "<title>".$_GET[ID]." score|CNP Quiz</title>";
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
	
	<section align="left">
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
			$totalQuestion=(count($questions)/6);
			
			echo '<h3>"'.$_GET[ID].'" scores list ('.$totalQuestion.' Questions)</h3>';
			
			$read2 = file("score/".$_GET[ID].".txt");
			$index2=1;
			$readed=[];
			foreach ($read2 as $line)
			{
				$readed[$index2]=$line;
				$index2++;
			}
			for($i=0;$i<count($readed);$i++)
			{
				if(($i%2)!=0 && count($readed[$i])>0)
				{
					echo "Username: ".$readed[$i];
					echo "<br>";
					echo "Score: ".$readed[($i+1)]." of ".$totalQuestion;
					echo "<br>";
					echo "<br>";
				}
			}
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
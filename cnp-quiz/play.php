<html>
<head>
<?php
echo "<title>".$_POST[questionid]."|CNP Quiz</title>";
?>
<?php require "../../template/head.php"?>
<?php require "styles.php" ?>
</head>
<body align="center">
	<?php
		$read = file("questions/".$_POST[questionid].".txt");
		$index=1;
		$questions=[];
		foreach ($read as $line)
		{
			$questions[$index]=$line;
			$index++;
		}
	?>
	
	<h1>Create & Play Quiz</h1>
	<div id="watermark">Powered by <a href="https://muraft.great-site.net">MuRafT</a></div>
	<a href="index.php">
	<button class="button">Return to menu</button>
	</a>
	
	<section align="left">
		<?php
			$number=$_POST[number];
			$addscore=0;
			if($number>1)
			{
			$correctAnswer=$questions[($number-1)];
			}
			else if($number==1)
			{
				$correctAnswer=$questions[($number+5)];
			}
			
			if($_POST[answer] == $correctAnswer[0])
			{
				$addscore=1;
			}
			else
			{
				$addscore=0;
			}
		?>
		<?php>
			$number=$_POST[number];
			if($number<count($questions))
			{
				for($i=0;$i<6;$i++)
				{
					switch($i)
					{
						case 0:
						echo "<h3>(".$_POST[realnumber]."/".(count($questions)/6).").".$questions[$number]."</h3>";
						echo "<form action='' method='POST'>";
						break;
						case 1:
						echo '<input type="radio" name="answer" id="a" value="a"><label for="a">'.$questions[$number+$i]."</label><br>";
						break;
						case 2:
						echo '<input type="radio" name="answer" id="b" value="b"><label for="b">'.$questions[$number+$i]."</label><br>";
						break;
						case 3:
						echo '<input type="radio" name="answer" id="c" value="c"><label for="c">'.$questions[$number+$i]."</label><br>";
						break;
						case 4:
						echo '<input type="radio" name="answer" id="d" value="d"><label for="d">'.$questions[$number+$i]."</label><br>";
						break;
						case 5:
						echo "<input type='hidden' name='questionid' value='".$_POST[questionid]."'>";
						echo "<input type='hidden' name='username' value='".$_POST[username]."'>";
						echo "<input type='hidden' name='score' value='".($_POST[score]+$addscore)."'>";
						echo "<input type='hidden' name='number' value='".($_POST[number]+6)."'>";
						echo "<input type='hidden' name='realnumber' value='".($_POST[realnumber]+1)."'>";
						echo "<button class='button' type='submit'>Done</button>";
						echo "</form>";
						break;
					}
				}
			}
			else
			{
				echo "<h3> Game Over</h3>";
				echo "Your Score: ".($_POST[score]+$addscore);
				$file = fopen("score/".$_POST[questionid].".txt","a+");
				fwrite($file,$_POST[username]."\n".($_POST[score]+$addscore)."\n");
				fclose($file);
				echo "<form action='viewscore.php' method='GET'>";
				echo "<input type='hidden' name='ID' value='".$_POST[questionid]."'>";
				echo "<button class='button' type='submit'>View other's score</button>";
				echo "</form>";
			}
		?>
		<?php
			
		?>
	</section>
</body>
</html>
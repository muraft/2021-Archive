<html>
<head>
<title>Create|CNP Quiz</title>
<?php require "../../template/head.php"?>
<?php require "styles.php" ?>
</head>
<body align="center">
	<h1>Create & Play Quiz</h1>
	<div id="watermark">Powered by <a href="https://muraft.great-site.net">MuRafT</a></div>
	<a href="index.php">
	<button class="button">Return to menu</button>
	</a>
	<section>
		<form action="" method="POST">
		Quiz ID
		<br>
		<?php
		echo '<input type="text" name="id" value="'.$_POST[id].'" required>'
		?>
		<br>
		Question
		<br>
		<textarea cols="25" rows="2" name="question" required></textarea>
		<br>
		A
		<input type="text" name="a">
		<br>
		B
		<input type="text" name="b">
		<br>
		C
		<input type="text" name="c">
		<br>
		D
		<input type="text" name="d">
		<br>
		Correct Option
		<br>
		<select name="correct">
			<option value="a">A</option>
			<option value="b">B</option>
			<option value="c">C</option>
			<option value="d">D</option>
		</select>
		<br>
		<br>
		<input class="button" type="submit" value="Create Question">
		</form>
	</section>
	
	<?php
	$file = fopen("questions/".$_POST[id].".txt","a+");
	if(filesize("questions/".$_POST[id].".txt")!=0){fwrite($file,"\n");};
	fwrite($file,$_POST[question]."\n");
	fwrite($file,$_POST[a]."\n");
	fwrite($file,$_POST[b]."\n");
	fwrite($file,$_POST[c]."\n");
	fwrite($file,$_POST[d]."\n");
	fwrite($file,$_POST[correct]);
	fclose($file);
	?>
	
	<section align="left">
		<h3>Questions List</h3>
		<?php
		$file = fopen("questions/".$_POST[id].".txt","a+");
		$i=1;
		while(!feof($file))
		{
			if($i==1 || ($i-1)%6==0)
			{
				for($j=0;$j<6;$j++)
				{
					switch($j)
					{
					case 0:
					echo "Question: ".fgets($file)."<br>";
					break;
					case 1:
					echo "a.".fgets($file)."<br>";
					break;
					case 2:
					echo "b.".fgets($file)."<br>";
					break;
					case 3:
					echo "c.".fgets($file)."<br>";
					break;
					case 4:
					echo "d.".fgets($file)."<br>";
					break;
					case 5:
					echo "Correct Answer:".fgets($file)."<br><br>";
					break;
					}
				};
			};
			$i++;
		};
		fclose($file);
		?>
	</section>
	
</body>
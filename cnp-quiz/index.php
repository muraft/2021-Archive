<html>
<head>
<title>CNP Quiz</title>
<?php require "../../template/head.php"?>
<?php require "styles.php" ?>
</head>
<body align="center">
	<h1>Create & Play Quiz</h1>
	<div id="watermark">Powered by <a href="https://muraft.great-site.net">MuRafT</a></div>
	
	<section>
		<h2>Welcome to Create & Play Quiz</h2>
		<h3>What will you do?</h3>
		<a href="create.php">
			<button class="button">
				Create Quiz
			</button>
		</a>
		<br>
		Or play a quiz
		<br> 
		<form action="start.php" method="GET">
		<input type="text" name="ID" placeholder="Insert Quiz ID here" required>
		<br>
		<input class="button" type="submit" value="Play Quiz">
		</form>
	</section>
	
	<section>
		<h3>Score Viewer</h3>
		<form action="viewscore.php" method="GET">
		<input type="text" name="ID" placeholder="Insert Quiz ID here" required>
		<br>
		<input class="button" type="submit" value="View Score">
		</form>
	</section>
</body>
</html>
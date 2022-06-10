<!DOCTYPE html>
<html>
<head>
	<title>Wa.me Generator by Muraft</title>
	<?php require "../../template/head.php" ?>
	<?php require "styles.php" ?>
	</style>
</head>
<body align="center">
	<h1>Wa.me Generator</h1>
	<div id="watermark">Powered by <a href="https://muraft.great-site.net">MuRafT</a></div>
	<section>
		<form action="createlink.php" method="GET">
			Insert receiver's number
			<br>
			<input type="number" name="number">
			<br>
			Type a message for the recevier:
			<br>
			<textarea type="text" name="text" rows="10" cols="30" style="resize: none;"></textarea>
			<br>
			<input type="submit" value="Submit" class="button">
		</form>
	</section>
</body>
</html>
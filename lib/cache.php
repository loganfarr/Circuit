<?php
	function checkFile($file, $newFile) {
		if(file_exists("$file"))
			delete("$file");

		file_put_contents("$file", "$newFile");
	}

	$url = "http://dev.loganfarr.com";

	checkFile("../cache/projects.json", "$url/portfolio");
	checkFile("../cache/recentProjects.json", "$url/recent-portfolio");
	checkFile("../cache/blog.json", "$url/blog");
	checkFile("../cache/recentBlog.json", "$url/recent-blog");
?>
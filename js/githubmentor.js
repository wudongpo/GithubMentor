(function() {
	var Github, $;
	if (typeof exports !== 'undefined') {
	  Github = require('./lib/github.js');
	  $ = require('http://code.jquery.com/jquery-1.10.1.min.js');
	}else{
        Github = require('./lib/github.js');
        $ = require('http://code.jquery.com/jquery-1.10.1.min.js');
	}
    var GitHubMentor = function(options){
    	 var github = Github.Github(options);
    }

    $()
}).call(this);
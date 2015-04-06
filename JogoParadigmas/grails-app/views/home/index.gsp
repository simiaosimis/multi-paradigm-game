<html>

<head>
	<title><g:message code="default.welcome.title" args="[meta(name:'app.name')]"/> </title>
	<meta name="layout" content="kickstart" />
</head>

<body>

	<section id="intro" class="first" align="center">
		<h1>Welcome to a project game made with mult-paradigm!</h1>
		<p>
			<h3>What are you waiting for? Just click the button and play! </h3>
		</p>
		<br>
		<br>
		<g:link class="btn-lg btn-warning  " controller="player" action="index">PLAY</g:link>
		<br>
		<br>
	</section>
		
	    	
	   		<div class="row">
	    		<div class="col-md-4">
		    		<div class="center">
						<h3>How to play?</h3>
				</div>
				<p>Move your player with A,S,D,W and shoot with mouse to destroy enemies and beat the game. </p>
			</div>
	    	<div class="col-md-4">
		    	<div class="center">
					<h3>Support us</h3>
				</div>
				<p>Do you want to contact us or colaborate with the project?
				See the repository on Github and send a pull request.
				</b>	

				<a href="https://github.com/simiaosimis/multi-paradigm-game">See our repository!</a>


				</p>
			</div>
			<div class="col-md-4" >
		    	<div class="center">
					<h3>Browser support</h3>
				</div>
				<p>The ParadigmGame unfortunatelly is only supported in Firefox Browser. Other browsers may not respond accordingly.</p>
				<img class="frontpageImage" src="${resource(plugin: 'kickstart-with-bootstrap', dir: 'images/frontpage',file: 'browser_logos.png')}" />
			</div>

	</section>

</body>

</html>

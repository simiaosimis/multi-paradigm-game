<html>

<head>
	<title><g:message code="default.welcome.title" args="[meta(name:'app.name')]"/> </title>
	<meta name="layout" content="kickstart" />
</head>

<body>

	<section id="intro" class="first">
		<h1>Welcome to a project game made with mult-paradigm!</h1>
		<p>
			What are you waiting for? Just click the button and play! 
		</p>
		<g:link class="btn tn-large btn-warning" controller="player" action="index">PLAY</g:link>
	</section>
		
	    	<div class="col-md-4" >
		    	<div class="center">
					<img class="frontpageImage" src="${resource(plugin: 'kickstart-with-bootstrap', dir: 'images/frontpage',file: 'browser_logos.png')}" />
					<h3>Browser support</h3>
				</div>
				<p>The ParadigmGame unfortunatelly is only supported in Firefox Browser. Other browsers may not respond accordingly.</p>
			</div>
	   		<div class="row">
	    		<div class="col-md-4">
		    		<div class="center">
						<h3>How to play?</h3>
				</div>
				<p>Move your player with A,S,D,W and shoot with mouse to destroy enemies and beat the game. </p>
			</div>
	    	<div class="col-md-4">
		    	<div class="center">
					<h3>Suport</h3>
				</div>
				<p>Do you want to contact us or colaborate with the project?
				See the repository on Github and send a pull request.
				</b>	

				<a href="https://github.com/simiaosimis/multi-paradigm-game">See our repository!</a>


				</p>
			</div>
	

	</section>

</body>

</html>

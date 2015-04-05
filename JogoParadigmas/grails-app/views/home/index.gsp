<html>

<head>
	<title><g:message code="default.welcome.title" args="[meta(name:'app.name')]"/> </title>
	<meta name="layout" content="kickstart" />
</head>

<body>

	<section id="intro" class="first">
		<h1>Welcome to a project game made with multi-paradigm!</h1>
		<p>
			What are you waiting for? Just click the button and play! 
		</p>
		<g:link class="btn tn-large btn-warning" controller="player">PLAY</g:link>
	</section>
		
	    	<div class="col-md-4">
		    	<div class="center">
					<img class="frontpageImage" src="${resource(plugin: 'kickstart-with-bootstrap', dir: 'images/frontpage',file: 'browser_logos.png')}" />
					<h3>Browser support</h3>
				</div>
				<p>Bootstrap is tested and supported in major modern browsers like Chrome 14, Safari 5+, Opera 11, Internet Explorer 7, and Firefox 5.</p>
			</div>
	   
	</section>

	<section id="info3">
		<div class="row">
	    	<div class="col-md-4">
		    	<div class="center">
					<h3>Other Features</h3>
				</div>
				<p>Kickstart contains several pages as starting points for the average website such as an About Page, Contact Page, 404, etc.</p>
			</div>
	    	<div class="col-md-4">
		    	<div class="center">
					<h3>Usage</h3>
				</div>
				<p>After installation you can call the script "grails
					kickstartWithBootstrap" which will copy some files into your
					project. It will overwrite only few files (e.g., in conf, src, and
					views) - <b>you should use it only on fresh new Grails projects</b>.
				</p>
			</div>
	    	<div class="col-md-4">
		    	<div class="center">
					<h3>Notes</h3>
				</div>
				<p></p>
				<ul>
					<li>Currently, Kickstart works with Grails 2.x!</li>
					<li>Kickstart does NOT use the Bootstrap plugin.</li>
					<li>I18N is only available for English and German!</li>
				</ul>
			</div>
<%--	    	<div class="col-md-4">--%>
<%--		    	<div class="center">--%>
<%--					<h3>Terms of Use</h3>--%>
<%--				</div>--%>
<%--				<p></p>--%>
<%--				<ul>--%>
<%--					<li>Bootstrap (from Twitter): Code licensed under the Apache--%>
<%--						License v2.0. Documentation licensed under CC BY 3.0.--%>
<%--						(<a href="http://twitter.com/TwBootstrap">@TwBootstrap</a> , <a href="http://twitter.github.com/bootstrap/">http://twitter.github.com/bootstrap/</a>)</li>--%>
<%--					<li>Kickstart Plugins: Code licensed under the Apache License--%>
<%--						v2.0. Documentation licensed under CC BY 3.0. Copyright 2011 Jörg--%>
<%--						Rech (<a href="http://twitter.com/JoergRech">@JoergRech</a>, <a href="http://joerg-rech.com">http://joerg-rech.com</a>)</li>--%>
<%--				</ul>--%>
<%--			</div>--%>
	    </div>

	</section>

</body>

</html>

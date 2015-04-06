<%@ page contentType="text/html;charset=UTF-8" %>
<html>
<head>
	<title><g:message code="default.welcome.title" args="[meta(name:'app.name')]"/> </title>
  <meta name="layout" content="kickstart" />
</head>
<body>
<ul class="list-group">
	<h1> Ranking </h1>

	<g:each in="${userList}" var="userInstance">

		<li class="list-group-item">
    		<span class="badge">${userInstance.userScore}</span>
    		${userInstance.username}
    	</li>
	
	</g:each>
</ul>

</body>
</html>
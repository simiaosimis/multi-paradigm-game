<%@ page contentType="text/html;charset=UTF-8" %>
<html>
<head>
	<title><g:message code="default.welcome.title" args="[meta(name:'app.name')]"/> </title>
  <meta name="layout" content="kickstart" />
</head>
<body>
  <div class="body" role="main">
  <canvas id = "tela" width = "950" height = "600"></canvas>

  <script type="text/javascript" src="${resource(dir: 'js', file: 'jquery-1.11.2.js')}"></script>
    <script type="text/javascript" src="${resource(dir: 'js', file: 'procedures.js')}"></script>
    <script type="text/javascript">
  		setupPlayer(${lista});
  	</script>
  </div>
</body>
</html>
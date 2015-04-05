<%@ page contentType="text/html;charset=UTF-8" %>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
	<meta name="layout" content="main"/>
</head>
<body>
  <div class="body" role="main">
  <canvas id = "tela" width = "950" height = "600"></canvas>

  <script type="text/javascript" src="${resource(dir: 'js', file: 'jquery-1.11.2.js')}"></script>
    <script type="text/javascript" src="${resource(dir: 'js', file: 'index.js')}"></script>
    <script type="text/javascript">
  		setupPlayer(${lista});
  	</script>
  </div>
</body>
</html>
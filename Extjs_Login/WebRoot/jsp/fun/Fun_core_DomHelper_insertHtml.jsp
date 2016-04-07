<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<base href="<%=basePath%>">

<title>Progress Dynamic</title>

<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">
<meta http-equiv="Content-Type" content="text/html;charset=utf-8">
<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
<!-- 引入css样式 -->
<link rel="stylesheet" href="extjs/resources/css/ext-all.css"
	type="text/css">

<style type="text/css">
	.newIcon{
		background: url("img/save.png");
	}
	.userGroup{
		background: url("img/LANJING.jpg");
	}
	.test{
		background-color: white;
	}
	.append{
		font-weight: bold;
	}
	.focus{
		font-style: italic;
	}
	.click{
		background-color: orange;
	}
</style>
<script type="text/javascript" src="extjs/ext-all.js">
	</script>
<script type="text/javascript" src="extjs/locale/ext-lang-zh_CN.js">
	</script>

<script type="text/javascript" src="js/fun/fun_core_DomHelper_insertHtml.js" charset="utf-8"></script>
</head>
<body>
	<div id="sub1"></div>
	<div id="sub2"></div>
	<div id="sub3"></div>
</body>
</html>

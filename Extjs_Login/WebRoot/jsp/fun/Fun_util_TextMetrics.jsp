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

<script type="text/javascript" src="js/fun/fun_util_textMetrics.js" charset="utf-8"></script>
</head>
<body>
	<div id='div1'>测试块状化文本规格</div>
	<div id='div2'>状化文本规格</div>
	<div id='div3'>测试块状化文本规格
	测试块状化文本规格
	测试块状化文本规格
	测试块状化文本规格</div>
	<div id='div4'>测试块状化文本规格测试块状化文本规格</div>
	
</body>
</html>

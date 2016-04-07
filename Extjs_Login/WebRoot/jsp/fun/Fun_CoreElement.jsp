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

<script type="text/javascript" src="js/fun/fun_CoreElement.js" charset="utf-8"></script>
</head>
<body>
	<table align="center" cellpadding="5px" cellspacing="5px" border="2px" width="300" height="200" >
		<tr>
			<td bgcolor="#00fa0a">测试样例</td>
		</tr>
		<tr>
			<td bgcolor="#F02344">
				<div id="the-id">
					<font>the-id  DIV的内容以及触发时间</font>
				</div>
			</td>
		</tr>
	</table>
	
	<table align="center" cellpadding="5px" cellspacing="5px" border="2px" width="300" height="200" >
		<tr>
			<td bgcolor="#fffa0a">追加元素</td>
		</tr>
		<tr>
			<td bgcolor="#0AA004">
				<div id="append-id">
					追加元素内容
				</div>
			</td>
		</tr>
	</table>
	
	<table align="center" cellpadding="5px" cellspacing="5px" border="2px" >
		<tr>
			<td id="btn">
			</td>
		</tr>		
	</table>
</body>
</html>

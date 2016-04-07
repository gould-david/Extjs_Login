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
</style>
<script type="text/javascript" src="extjs/ext-all.js">
	</script>
<script type="text/javascript" src="extjs/locale/ext-lang-zh_CN.js">
	</script>

<script type="text/javascript" src="js/Panel_Items.js" charset="utf-8"></script>
</head>

<body>
	form
	<br>
	<div id="form"></div>
	<div id="msg">
		<table id="contentEl_ID">
				<tr>
					<td>
						序号
					</td>
					<td>
						姓名
					</td>
				</tr>
				<tr>
					<td>
						0
					</td>
					<td>
						张三
					</td>
				</tr>
				<tr>
					<td>
						1
					</td>
					<td>
						李三
					</td>
				</tr>
				<tr>
					<td>
						2
					</td>
					<td>
						王五
					</td>
				</tr>
				<tr>
					<td>
						3
					</td>
					<td>
						赵六
					</td>
				</tr>
				<tr>
					<td>
						4
					</td>
					<td>
						陈七
					</td>
				</tr>
				<tr>
					<td>
						5
					</td>
					<td>
						金八
					</td>
				</tr>
			</table>
	
	</div>
</body>
</html>

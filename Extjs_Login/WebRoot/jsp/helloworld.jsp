<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>hello world</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
	<!-- 引入css样式 -->
	<link rel="stylesheet" href="extjs/resources/css/ext-all.css" type="text/css">
	<!-- 引入ext基本的几个js文件 -->
	<script type="text/javascript" src="extjs/ext-all.js">
	</script>
	<script type="text/javascript" src="extjs/locale/ext-lang-zh_CN.js">
	</script>
	
	<!-- js代码编写处 -->
	<script type="text/javascript">
		
		Ext.onReady(function(){
			//创建一个窗体
			var zq = new Ext.Window({
				width:300,
				height:300,
				items:[{
					title:'',
					height:100,
					region:'center',
					html:'这个是windows的内容',
					autoScroll:false
				}],
				//该属性作用：为false时，当其他窗体收到触发时，该窗体可以隐藏到后面
				modal:true,
				buttonAlign:'center',
				buttons:[{
					text:'zq测试',
					id:'zqbtnTest',
					handler:function(){
						/*
						执行顺序由上至下进行执行
						alert("第一个执行");
						alert("第二个执行"); 
						*/
						Ext.Msg.show({
							title:'hello',
							msg:'hello world',
							//fn关闭弹出弹出框后执行的函数
							fn:processResult,
							icon:Ext.Msg.QUESTION,
							buttons:Ext.Msg.YESNO
						});
						
					}
				}]
			});
			var zzq = new Ext.Window({
				width:300,
				height:300,
				items:[{
					title:'',
					height:100,
					region:'center',
					html:'这个是windows的内容',
					autoScroll:false
				}],
				//该属性作用：为false时，当其他窗体收到触发时，该窗体可以隐藏到后面
				modal:true,
				buttonAlign:'left',
				buttons:[{
					text:'zzq测试',
					id:'zzqbtnTest',
					handler:function(){
						Ext.Msg.show({
							title:'hello',
							msg:'hello world',
							//fn关闭弹出弹出框后执行的函数
							fn:processResult,
							icon:Ext.Msg.QUESTION,
							buttons:Ext.Msg.YESNO
						});
					}
				}]
			});
			zq.show();
			zzq.show();
		});
		
		function processResult(btn){
			Ext.Msg.alert('结果',btn);
		}
	</script>
  </head>
  <body>
    This is my JSP page. <br>
  </body>
</html>

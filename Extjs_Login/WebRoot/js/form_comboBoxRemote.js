Ext.onReady(function(){
	//创建数据模型
	Ext.regModel("BookInfo",{
		fields:[{name:'name'}]
	});
	
	//定义数据源
/*	var bookStore = new Ext.data.Store({
		model:'BookInfo',
		proxy:{
			type:'ajax',
			url:'bookSearchServer.jsp',
			reader:new Ext.data.ArrayReader({
				model:'BookInfo'
			})
		}
	});*/
	
	var bookStore = Ext.create("Ext.data.Store",{
		model:'BookInfo',
		proxy:{
				type:'ajax',
				url:'Test/booklist.action',
				reader:{
					type:'json'
				}
		}
	}); 
	
	//创建表单
	Ext.create('Ext.form.Panel',{
		title:'Ext.from.field.comboBox远程数据示例',
		frame:true,
		width:300,
		height:150,
		bodyStyle:'padding:5,5,5,5',
		renderTo:Ext.getBody(),
		defaults:{
			labelSeparator:':',
			labelWidth:70,
			width:200,
			labelAlign:'left'
		},
		items:[
			{
				xtype:'combo',
				//远程模式获取数据
				fieldLabel:'书籍列表',
				listConfig:{
					loadingText:'正在加载数据信息',
					emptyText:'未找到',
					maxHeight:100
				},
				//点击下拉框时将要完成全部信息的查询
				//设置全部信息的查询字符串
				allQuery:'allbook',
				minChars:3,
				//查询的延迟时间
				queryDelay:300,
				//查询检索时将会自动完成筛选的 查询字符串,
				//这个与allQuery要完成的工作类似,只是作为参数完成数据的过滤
				queryParam:'searchbook',
				triggerAction:'all',
				store:bookStore,
				displayField:'name',
				valueField:'name',
				queryMode:'remote'
			}
		]
	});
});
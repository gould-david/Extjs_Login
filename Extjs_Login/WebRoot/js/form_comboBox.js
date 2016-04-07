Ext.onReady(function(){
	//创建数据模型
	Ext.regModel('PostInfo',{
		fields:[{name:'province'},{name:'post'}]
	});
	//引用数据模型
	var postStore = Ext.create('Ext.data.Store',{
		model:'PostInfo',
		data:[
			{province:'北京',post:'100000'},
			{province:'天津',post:'200000'},
			{province:'上海',post:'300000'},
			{province:'南京',post:'400000'},
			{province:'江苏',post:'500000'},
			{province:'上饶',post:'600000'},
			{province:'南通',post:'700000'},
			{province:'哈尔滨',post:'800000'}
		]
	});
	Ext.create('Ext.form.Panel',{
		title:'Ext.form.field.comboBox',
		renderTo:Ext.getBody(),
		width:300,
		height:200,
		bodyStyle:'padding:5,5,5,5',
		frame:true,
		defaults:{
			labelSeparator:':',
			width:200,
			labelAlign:'left',
			labelWidth:70
		},
		items:[{
			xtype:'combo',
			listConfig:{
				emptyText:'未找到匹配值',
				maxHeight:60
			},
			name:'post',
			fieldLabel:'地址编号',
			triggerAction:'all',
			store:postStore,
			displayField:'province',
			valueField:'post',
			queryMode:'local',
			forceSelection:true,
			typeAhead:true,
			value:'200000',
			listeners:{
				select:function(item){
					alert(item.getValue());
				}
			}
		}]
	})
		
	
});
Ext.onReady(function(){
	Ext.QuickTips.init();
	var testform = new Ext.form.Panel({
		title:'Ext.form.field.trigger',
		bodyStyle:'padding:5,5,5,5',
		frame:true,
		width:270,
		height:100,
		renderTo:'form',
		defaults:{
			labelSeparator:':',
			labelWidth:70,
			width:200,
			labelAlign:'left'
		},
		items:[
			{
				xtype:'triggerfield',
				id:'memo',
				fieldLabel:'触发字段',
				onTriggerClick:function(){
					//var v_memo = testform.getForm().findField('memo');
					//alert(v_memo.getValue());
					/*
					 * 对比上方获取组件值的方法
					 * */
					var v_memo = Ext.getCmp("memo").getValue();
					alert(v_memo);
					Ext.getCmp("memo").setValue("test");
				}
			}
		]
	});
})
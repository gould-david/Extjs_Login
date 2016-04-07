Ext.onReady(function(){
	Ext.QuickTips.init();
	var testform = new Ext.form.Panel({
		title:'Ext.form.field.spinner',
		bodyStyle:'padding:5,5,5,5',
		frame:true,
		height:300,
		width:300,
		renderTo:'form',
		defaults:{
			labelSeparator:':',
			labelWidth:70,
			width:200,
			labelAlign:'left'
		},
		items:[
			{
				xtype:'spinnerfield',
				fieldLable:'微调组件',
				id:'salary',
				value:100,
				onSpinUp:function(){
					var salaryCmp = Ext.getCmp("salary");
					salaryCmp.setValue(Number(salaryCmp.getValue())+1);
				},
				onSpinDown:function(){
					var salaryCmp = Ext.getCmp("salary");
					salaryCmp.setValue(Number(salaryCmp.getValue())-1);
				}
			}
		]
	});
});
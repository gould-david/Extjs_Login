Ext.onReady(function(){
	Ext.QuickTips.init();
	Ext.create('Ext.form.Panel',{
		title:'Ext.form.FieldSet示例',
		width:500,
		height:300,
		renderTo:'form',
		bodyPadding:5,
		frame:true,
		items:[{
			title:'基本信息',
			xtype:'fieldset',
			collapsible:true,
			bodyPadding:5,
			defaults:{
				labelSeparator:':',
				labelWidth:70,
				width:300
			},
			defaultType:'textfield',
			items:[
			{
				fieldLabel:'设备位号'
			},
			{
				fieldLabel:'设备名称'
				//,inputType:'password'
			}
			]
		}]
		
	});
	
})
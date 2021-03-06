Ext.onReady(function(){
	Ext.QuickTips.init();
	Ext.create('Ext.form.Panel',{
		title:'Ext.form.field.Date示例',
		frame:true,
		height:400,
		width:400,
		renderTo:'form',
		bodyPadding:5,
		items:[{
			fieldLabel:'日期选择项',
			xtype:'datefield',
			labelSeparator:':',
			msgTarget:'side',
			autoFitErrors:false,
			format:'Y/m/d',
			maxValue:'12/31/2015',
			maxText:'应小于次日期',
			minValue:'10/31/2015',
			maxText:'应大于次日期',
			disabledDays:[0,6],
			disabledDaysText:'禁止选择该日期',
			width:220,
			value:'2015/3/1'
		}]
	})
	
});
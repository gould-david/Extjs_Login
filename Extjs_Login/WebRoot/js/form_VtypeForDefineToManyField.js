Ext.onReady(function(){
	Ext.QuickTips.init();
	Ext.apply(Ext.form.field.VTypes,{
		dateRange:function(value,field){
			var _beginDate = null,
				_beginDateComponent = null,
				_endDate = null,
				_endDateComponent = null
				validStatus = true;
				
			if(field._rangeDate){
				//获取出发时间与返回时间，并进行比较
				
				//if(!Ext.isEmpty(field._rangeDate.begin)){
					_beginDate = Ext.getCmp(field._rangeDate.begin).getValue();
				//}
				//if(!Ext.isEmpty(field._rangeDate.end)){
					_endDate = Ext.getCmp(field._rangeDate.end).getValue();
				//}
				if(!Ext.isEmpty(_beginDate) && !Ext.isEmpty(_endDate)){
					validStatus = _beginDate<_endDate;
				}
			}
			return validStatus;
		},
		dateRangeText:'开始时间晚于返回时间'
	});
	
	var dateRangeForm = Ext.create('Ext.form.Panel',{
		title:'出发日期与返回日期的自定义验证示例',
		frame:true,
		bodyPadding:5,
		renderTo:'form',
		fieldDefaults:{
			labelSeparator:':',
			labelWidth:70,
			width:300,
			msgTarget:'side',
			format:'Y年n月j日',
			allowBlank:false,
			autoFitErrors:false//不自动调整字段宽度
		},
		defaultType:'datefield',
		items:[
			{
				id:'beginDate1',
				fieldLabel:'出发日期',
				_rangeDate:{
					begin:'beginDate1',
					end:'endDate1'
				},
				vtype:'dateRange'
			},
			{
				id:'endDate1',
				fieldLabel:'返回日期',
				_rangeDate:{
					begin:'beginDate1',
					end:'endDate1'
				},
				vtype:'dateRange'
			}
		]
		
	})
	
})
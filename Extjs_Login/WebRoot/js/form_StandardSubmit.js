Ext.onReady(function(){
	Ext.QuickTips.init();
	var downFileForm = Ext.create('Ext.form.Panel',{
		title:'表单提交示例',
		width:430,
		frame:true,
		renderTo:'form',
		bodyPadding:5,
		fieldDefaults:{
			labelSeparator:':',
			labelWidth:70,
			width:220,
			msgTarget:'side',
			autoFitError:false
		},
		defaultType:'textfield',
		standardSubmit:true,
		items:[
			{
				fieldLabel:'文件名',
				name:'fileName',
				allowBlank:false
			}
		],
		buttons:[
			{
				text:'文件下载',
				handler:downfile
			}
		]
	});
	function downfile(){
		downFileForm.getForm().submit({
			clientValidation:true,
			url:'Test/Form_StandartSubmitController.action',
			method:'POST',
			failure:function(form,action){
				Ext.Msg.alert('提示','文件下载失败');
			}
		});
	}
	
	
})
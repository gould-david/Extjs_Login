Ext.onReady(function(){
	var tarobj={},srcobj;
	srcobj = {};
	srcobj.name = "张全";
	srcobj.sex = "male";
	srcobj.age = 24;
	srcobj.favorate = "music";
	
	Ext.apply(tarobj,srcobj);
	Ext.Msg.alert('Ext.Apply属性拷贝的作用',"将原srcobj的属性拷贝至srcobj中"+"<br/>"+
			"姓名:"+tarobj.name+"<br/>"+
			"爱好:"+tarobj.favorate+"<br/>"
			
		)
	
})
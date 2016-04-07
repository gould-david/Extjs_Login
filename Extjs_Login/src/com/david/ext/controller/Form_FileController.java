package com.david.ext.controller;

import java.io.IOException;
import java.util.List;
import java.util.ListIterator;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.fileupload.DiskFileUpload;
import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileUploadException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/Test")
public class Form_FileController {

	//提交图片的控制器
	@RequestMapping("/uploadFile.action")
	public void uploadFile(HttpServletRequest request,HttpServletResponse response){
		DiskFileUpload upload = new DiskFileUpload();
		upload.setHeaderEncoding("utf-8");
		try {
			List list = upload.parseRequest(request);
			ListIterator list_iterator = list.listIterator();
			String fileName = null;
			while(list_iterator.hasNext()){
				FileItem item = (FileItem)list_iterator.next();
				if(!item.isFormField()){//是否是普通的表单类型，如果为否，则是file类型的
					fileName = item.getName();
					fileName = fileName.substring(fileName.lastIndexOf("\\")+1);
				}
			}
			String msg = "{success:true,file:'"+fileName+"'}";
			//作为返回值返回给前端页面，且返回的是一个json串，经过试验，方法前有无@ResponseBody 都没有关系
			response.getWriter().write(msg);
		} catch (FileUploadException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}

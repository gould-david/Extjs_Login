package com.david.ext.controller;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/Test")
public class Form_StandartSubmitController {
	@RequestMapping("/Form_StandartSubmitController.action")
	public void downFileForm(HttpServletRequest request,HttpServletResponse response) throws IOException{
		String _filename = request.getParameter("fileName")+".txt";
		response.setCharacterEncoding("utf-8");
		response.setContentType("application/x-msdownload");
		response.setHeader("Content-disposition", "attachment; filename="+_filename);
		response.getWriter().write("下载文件内容");
	}
}

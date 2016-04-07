package com.david.ext.controller;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/Test")
public class form_ActionSubmitController {
	@RequestMapping("/form_ActionSubmitController.action")
	public void subLoginForm(HttpServletRequest request,HttpServletResponse response) throws IOException{
		String msg = null;
		response.setCharacterEncoding("utf-8");
		String _username = request.getParameter("username");
		if(_username.length() <= 6 ){
			msg = "{failure:true,errorMessage:'用户名太短'}";
		}
		else{
			msg = "{success:true}";
		}
		response.getWriter().write(msg);
	}
}

package com.david.ext.controller;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/Test")
public class Form_ActionLoadController {
	@RequestMapping("/getProductIntroduction.action")
	public @ResponseBody void getProductIntroduction(HttpServletRequest request,HttpServletResponse response) throws IOException{
		String _productId = request.getParameter("productId");
		response.setCharacterEncoding("utf-8");
		if("001".equals(_productId)){
			String msg = "{success:true,data:{introduction:'本产品美观实用'}}";
			response.getWriter().write(msg);
		}
		else{
			String msg = "{failure:true,errorMessage:'数据不存在'}";
			response.getWriter().write(msg);
		}
	}
}

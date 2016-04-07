package com.david.ext.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.david.ext.po.Book;

@Controller
@RequestMapping("/Test")
public class ComboBoxTestController {
	//测试将组合框的数据返回至前台的Ext的comboBox的标签中
	
	@RequestMapping("/booklist.action")
	public @ResponseBody ModelAndView listBook(){
		Book books = new Book();
		books.setName("入门");
		
		ModelAndView modelandview = new ModelAndView();
		modelandview.addObject("books", books);
		modelandview.setViewName("form_comboBoxRemote");
		return modelandview;
	}
}

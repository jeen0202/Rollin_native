package com.poscoict.rollin.mail.controller;

import com.poscoict.rollin.mail.model.MailDto;
import com.poscoict.rollin.mail.service.MailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("mail")
public class MailController {

    @Autowired
    MailService mailService;

    @Autowired
    MailDto mailDto;

    @PostMapping("/send")
    public void sendMail(@RequestBody MailDto mailDto){

//        mailDto.setAddress(email);
//        mailDto.setTitle("test");
//        mailDto.setMessage("test test");
        mailDto.setAddress("gudwodjssl2@gmail.com");
        mailService.sendMail(mailDto);

//        return mailDto;
    }
}

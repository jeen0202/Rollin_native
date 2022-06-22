package com.poscoict.rollin.mail.service;

import com.poscoict.rollin.mail.model.MailDto;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
@Slf4j
public class MailServiceImpl implements MailService{

    private JavaMailSender mailSender;

    public void sendMail(MailDto mail){
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(mail.getAddress());
        message.setFrom("gudwodjssl2@gmail.com"); // from 값을 설정하지 않으면 application.yml의 username값이 설정
        message.setSubject(mail.getTitle());

        String msg = "=========================================================\n";

        msg += mail.getMessage() + "\n\n";
        msg += "상품 이름 : " + mail.getGiftName() + "\n";
        msg += "상품 가격 : " + mail.getGiftPrice() + "원 \n";
        msg += "상품 설명 : " + mail.getGiftContent() + "\n";
        msg += "환불은 불가능합니다.\n감사합니다\n";
        msg += "=========================================================";

        message.setText(msg);
        log.info(mail.toString());

        mailSender.send(message);
    }
}

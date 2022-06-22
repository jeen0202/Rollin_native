package com.poscoict.rollin.mail.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

@Data
@Component
public class MailDto {

    private String address;
    private String title;
    private String message;
    private String giftName;
    private String giftContent;
    private Integer giftPrice;

}

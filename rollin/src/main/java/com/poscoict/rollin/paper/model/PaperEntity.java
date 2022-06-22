package com.poscoict.rollin.paper.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.*;
import org.springframework.stereotype.Component;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Date;

@NoArgsConstructor(access = AccessLevel.PUBLIC)
@JsonInclude(JsonInclude.Include.NON_NULL)
@AllArgsConstructor
@Builder
@Data
@Entity(name = "papers")
@Component
public class PaperEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Integer id;
    @Column(name="userId")
    private Integer userId;
    @Column(name="nickname")
    private String nickname;
    @Column(name="content")
    private String content;
    @Column(name="date")
    private LocalDateTime date=LocalDateTime.now();
    @Column(name="giftId")
    private Integer giftId;
}

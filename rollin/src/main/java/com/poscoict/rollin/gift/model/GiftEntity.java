package com.poscoict.rollin.gift.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.*;
import org.springframework.stereotype.Component;

import javax.persistence.*;

@NoArgsConstructor(access = AccessLevel.PUBLIC)
@JsonInclude(JsonInclude.Include.NON_NULL)
@AllArgsConstructor
@Builder
@Data
@Entity(name = "gifts")
@Component
public class GiftEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Integer id;
    @Column(name="name")
    private String name;
    @Column(name="count")
    private Integer count;
    @Column(name="price")
    private Integer price;
    @Column(name="content")
    private String content;
    @Column(name="img")
    private String img;
    @Column(name="views")
    private Integer views;
}

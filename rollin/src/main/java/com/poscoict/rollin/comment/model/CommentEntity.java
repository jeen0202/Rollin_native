package com.poscoict.rollin.comment.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.*;
import org.springframework.stereotype.Component;

import javax.persistence.*;
import java.time.LocalDateTime;

@NoArgsConstructor(access = AccessLevel.PUBLIC)
@JsonInclude(JsonInclude.Include.NON_NULL)
@AllArgsConstructor
@Builder
@Data
@Entity(name = "comments")
@Component
public class CommentEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Integer id;
    @Column(name="userId")
    private String userId;
    @Column(name="boardId")
    private Integer boardId;
    @Column(name="img")
    private String img;
    @Column(name="comment")
    private String comment;
    @Column(name="date")
    private LocalDateTime date=LocalDateTime.now();
}

package com.poscoict.rollin.comment.controller;


import com.poscoict.rollin.comment.model.CommentEntity;
import com.poscoict.rollin.comment.service.CommentService;
import com.poscoict.rollin.config.SecurityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/comment")
public class CommentController {

    @Autowired
    CommentService commentService;

    @Autowired
    SecurityService securityService;


    @GetMapping("")
    public List<CommentEntity> GetAll(){

        return commentService.getAllComment();
    }

    @PostMapping("")
    public Integer postComm(@RequestBody CommentEntity commentEntity){
        return commentService.insertComment(commentEntity);
    }

}

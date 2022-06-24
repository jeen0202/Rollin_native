package com.poscoict.rollin.comment.service;

import com.poscoict.rollin.comment.model.CommentEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface CommentService {

    List<CommentEntity> getAllComment();

    Integer insertComment(CommentEntity commentEntity);
}

package com.poscoict.rollin.comment.service;

import com.poscoict.rollin.comment.model.CommentEntity;
import com.poscoict.rollin.comment.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentServiceimpl implements CommentService {

    @Autowired
    CommentRepository commentRepository;

    @Override
    public List<CommentEntity> getAllComment() {
        return commentRepository.findAll();
    }

    @Override
    public Integer insertComment(CommentEntity commentEntity) {
        CommentEntity new_comment=commentRepository.save(commentEntity);
        if(new_comment.getId()!=null) {
            return 1;
        }else{
            return 0;
        }
    }
}

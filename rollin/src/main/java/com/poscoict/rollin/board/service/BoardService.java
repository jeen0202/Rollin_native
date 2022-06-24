package com.poscoict.rollin.board.service;

import com.poscoict.rollin.board.model.BoardEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface BoardService {
    Boolean postBoard(BoardEntity boardEntity);
    List<BoardEntity> findAllBoard();
}

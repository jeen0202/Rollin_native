package com.poscoict.rollin.board.service;

import com.poscoict.rollin.board.model.BoardEntity;
import com.poscoict.rollin.board.repository.BoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BoardServiceImpl implements BoardService {

    @Autowired
    BoardRepository boardRepository;

    @Override
    public Boolean postBoard(BoardEntity boardEntity) {
        BoardEntity new_board=boardRepository.save(boardEntity);
        if(new_board.getId()!=null){
            return true;
        }else{
            return false;
        }
    }

    @Override
    public List<BoardEntity> findAllBoard() {
        return boardRepository.findAll();
    }
}

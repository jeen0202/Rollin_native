package com.poscoict.rollin.board.controller;

import com.poscoict.rollin.board.model.BoardEntity;
import com.poscoict.rollin.board.service.BoardService;
import com.poscoict.rollin.config.SecurityService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("board")
@Slf4j
public class BoardController {
    @Autowired
    BoardService boardService;
    @Autowired
    BoardEntity boardEntity;

    @Autowired
    SecurityService securityService;

    @PostMapping("/")
    public Boolean postBoard(@RequestBody BoardEntity boardEntity){
//        log.info(String.valueOf(securityService.getIdAtToken()));
//        boardEntity.setUserId(securityService.getIdAtToken());
        boardEntity.setUserId(1);
        return boardService.postBoard(boardEntity);
    }

    @GetMapping("/")
    public List<BoardEntity> getAllBoard(){
        return boardService.findAllBoard();
    }
}

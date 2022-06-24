package com.poscoict.rollin.board.repository;

import com.poscoict.rollin.board.model.BoardEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BoardRepository extends JpaRepository<BoardEntity,Integer> {
}

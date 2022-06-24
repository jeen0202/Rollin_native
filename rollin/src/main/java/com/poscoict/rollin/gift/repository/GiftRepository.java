package com.poscoict.rollin.gift.repository;

import com.poscoict.rollin.gift.model.GiftEntity;
import com.poscoict.rollin.user.model.UserEntity;
import lombok.extern.slf4j.Slf4j;
import org.apache.ibatis.annotations.Param;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GiftRepository extends JpaRepository<GiftEntity,Integer> {
    public List<GiftEntity> findAll();

    public List<GiftEntity> findByNameLike(String name);

}

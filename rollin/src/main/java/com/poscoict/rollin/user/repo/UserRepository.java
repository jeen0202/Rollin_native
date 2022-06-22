package com.poscoict.rollin.user.repo;

import com.poscoict.rollin.gift.model.GiftEntity;
import com.poscoict.rollin.paper.model.PaperEntity;
import com.poscoict.rollin.user.model.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<UserEntity,Integer> {
    public long countByUserId(String userId);
    public Optional<UserEntity> findByUserIdAndPassword(String userId, String password);

    public List<UserEntity> findByUserId(String userId);
}

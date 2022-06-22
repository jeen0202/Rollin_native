package com.poscoict.rollin.user.service;

import com.poscoict.rollin.user.model.UserEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface UserService {

    List<UserEntity> getAllUser();

    Boolean insertUser(UserEntity userEntity);

    long idCheck(UserEntity userEntity);

    Optional<UserEntity> LoginCheck(UserEntity userEntity);

    Optional<UserEntity> getUserById(Integer id);

    List<UserEntity> kaoCheck(UserEntity userEntity);


    Optional<UserEntity> serviceLogin(UserEntity userEntity);


}

package com.poscoict.rollin.user.controller;


import com.poscoict.rollin.aspect.TokenRequired;
import com.poscoict.rollin.config.SecurityService;
import com.poscoict.rollin.user.model.UserEntity;
import com.poscoict.rollin.user.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

import java.util.Optional;


@RestController
@RequestMapping("/user")
@Slf4j
public class UserController {

    @Autowired
    UserService userService;


    @Autowired
    SecurityService securityService;




    @GetMapping
    public List<UserEntity> getUser() {
        return userService.getAllUser();
    }
    @GetMapping("/{id}")
    public Optional<UserEntity> getUserById(@PathVariable String id){
        return userService.getUserById(Integer.valueOf(id));
    }

    @GetMapping("/me")
    @TokenRequired
    public Optional<UserEntity> getUserByMe(){
        Integer id=Integer.valueOf(securityService.getIdAtToken());
        return userService.getUserById(id);
    }

    @PostMapping
    public Boolean insert(@RequestBody UserEntity userEntity){
        return userService.insertUser(userEntity);
    }

    @PostMapping("/Id")
    public long idCheck(@RequestBody UserEntity userEntity){

        return userService.idCheck(userEntity);
    }

    @PostMapping("/login")
    public Optional<UserEntity> LoginCheck(@RequestBody  UserEntity userEntity){
        return userService.LoginCheck(userEntity);
    }

    @PostMapping("/kaologin")
    public List<UserEntity> kaoCheck(@RequestBody UserEntity userEntity){
        return userService.kaoCheck(userEntity);
    }

    @PostMapping("/Login")

    public Optional<UserEntity> loginUser(@RequestBody UserEntity userEntity){
        Optional<UserEntity> returnUser =userService.serviceLogin(userEntity); //쿼리 입력 후 결과값
        returnUser.ifPresent(selectUser->{
            selectUser.setUserId(selectUser.getUserId());
            selectUser.setId(selectUser.getId());
            selectUser.setName(selectUser.getName()); //반값으로 형성된 곳에 하나씩 채워진다.
            selectUser.setImg(selectUser.getImg());
            selectUser.setPcnt(selectUser.getPcnt());
            String token = securityService.createToken(selectUser.getId().toString()); //받아온 값을 셋토큰에 넣어준다.
            selectUser.setToken(token);
        });
        return returnUser;

//        loginDto.setToken(returnDto.getToken());



// =======
//     public LoginDto loginUser(@RequestBody UserDto userDto){
//         UserDto returnDto =userService.serviceLogin(userDto); //쿼리 입력 후 결과값
//         LoginDto loginDto = new LoginDto();
//         loginDto.setUserId(returnDto.getUserId());
//         loginDto.setId(returnDto.getId());
//         loginDto.setName(returnDto.getName()); //반값으로 형성된 곳에 하나씩 채워진다.
//         loginDto.setImg(returnDto.getImg());
//         loginDto.setPcnt(returnDto.getPcnt());
// //        loginDto.setToken(returnDto.getToken());
//         String token = securityService.createToken(returnDto.getId().toString()); //받아온 값을 셋토큰에 넣어준다.
//         loginDto.setToken(token);

//         return loginDto;
// >>>>>>> gift
        //리액트에 던져준다
    }


}

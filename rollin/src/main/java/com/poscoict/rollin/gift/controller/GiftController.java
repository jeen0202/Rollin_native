package com.poscoict.rollin.gift.controller;

import com.poscoict.rollin.gift.model.GiftEntity;
import com.poscoict.rollin.gift.serive.GiftService;
import com.poscoict.rollin.paper.model.PaperEntity;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("gift")
@Slf4j
public class GiftController {
    @Autowired
    GiftService giftService;



    @GetMapping("/")
    public List<GiftEntity> getAllGift(){
        return giftService.findAllGift();
    }

    @GetMapping("/search/{name}")
    public List<GiftEntity> getGiftByName(@PathVariable String name){
        log.info(name);
        return giftService.findGiftByName(name);
    }
    @PutMapping("/{id}")
    public Optional<GiftEntity> updateGiftView(
            @PathVariable String id
    ) {
        return giftService.viewCount(Integer.valueOf(id));
    }

    @GetMapping("/{id}")
    public Optional<GiftEntity> getGiftById(@PathVariable String id){
        log.info("getGiftById 실행");
        return giftService.getGiftById(Integer.valueOf(id));
    }

    // insertGift(papaer에 등록)
    // => 프론트에서  userId, nickname, content (Body에), giftId 받아와서 등록하기
    @PostMapping("")
    public ResponseEntity<?> postGift(@RequestBody PaperEntity paperEntity){
        //log.info(paperDto.toString());
        HttpStatus httpStatus;
        httpStatus=giftService.insertGiftInPaperAndUpdateGiftCount(paperEntity)? HttpStatus.CREATED : HttpStatus.BAD_REQUEST;

        return new ResponseEntity<>(httpStatus);
    }

}

package com.poscoict.rollin.gift.serive;

import com.poscoict.rollin.gift.model.GiftEntity;
import com.poscoict.rollin.gift.repository.GiftRepository;
import com.poscoict.rollin.paper.model.PaperEntity;
import com.poscoict.rollin.paper.repo.PaperRepository;
import lombok.extern.slf4j.Slf4j;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Slf4j
public class GiftServiceImpl implements GiftService {

    @Autowired
    GiftRepository giftRepository;

    @Autowired
    PaperRepository paperRepository;

    @Override
    public List<GiftEntity> findAllGift() {
        return giftRepository.findAll() ;
    }

    @Override
    public List<GiftEntity> findGiftByName(String name) {
        log.info(name);

        return giftRepository.findByNameLike("%"+name+"%");
    }

    @Override
    public Optional<GiftEntity> viewCount(Integer id) {
        Optional<GiftEntity> gift=giftRepository.findById(id);
        gift.ifPresent(selectGift->{
            selectGift.setViews(selectGift.getViews()+1);

            giftRepository.save(selectGift);
        });
        log.info(String.valueOf(gift));
        return gift;
    }
    @Override
    public Optional<GiftEntity> getGiftById(Integer id) {
        return giftRepository.findById(id);
    }
    @Override
    public Boolean insertGiftInPaperAndUpdateGiftCount(PaperEntity paperEntity) {

        log.info(String.valueOf(paperEntity));
        log.info(String.valueOf(paperEntity.getUserId()));
        PaperEntity new_paper=paperRepository.save(paperEntity);
        log.info(String.valueOf(new_paper.getId()));
        if(new_paper.getId()!=null){
            Optional<GiftEntity> gift=giftRepository.findById(paperEntity.getGiftId());
            gift.ifPresent(selectGift->{
                selectGift.setCount(selectGift.getCount()+1);

                giftRepository.save(selectGift);
            });
            return true;
        }else{
            return false;
        }
    }

}

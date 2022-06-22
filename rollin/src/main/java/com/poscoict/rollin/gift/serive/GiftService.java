package com.poscoict.rollin.gift.serive;


import com.poscoict.rollin.gift.model.GiftEntity;
import com.poscoict.rollin.paper.model.PaperEntity;

import java.util.List;
import java.util.Optional;

public interface GiftService {
    List<GiftEntity> findAllGift();
    List<GiftEntity> findGiftByName(String name);

    Optional<GiftEntity> viewCount(Integer id);

    Optional<GiftEntity> getGiftById(Integer id);

    Boolean insertGiftInPaperAndUpdateGiftCount(PaperEntity paperEntity);



}

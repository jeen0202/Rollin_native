insert into users(userId, password, name,img)
	values("sejin", "1234", "김세진", null);
insert into users(userId, password, name,img)
	values("seongyoon", "1234", "김성윤", null);
insert into users(userId, password, name,img)
	values("gian", "1234", "임기안", null);
insert into users(userId, password, name,img)
	values("ayeon", "1234", "임아연", null);
insert into users(userId, password, name,img)
	values("jungho", "1234", "이정호", null);
    
insert into papers(userId,nickname,content) 
	values(1,"yoon","세진에게 보낸 Rollin");
insert into papers(userId,nickname,content) 
	values(2,"Zn","성윤에게 보낸 Rollin");
insert into papers(userId,nickname,content) 
	values(3,"84","기안에게 보낸 Rollin");
insert into papers(userId,nickname,content) 
	values(4,"ho","아연에게 보낸 Rollin");
insert into papers(userId,nickname,content) 
	values(5,"jing","정호에게 보낸 Rollin");

insert into gifts(`name`,`price`,`desc`)
	values("스트로베리 초콜릿 생크림",35000,"투썸플레이스의 초콜릿 케이크");
insert into gifts(`name`,`price`,`desc`)
	values("버라이어티팩",20000,"베스킨라빈스의 아이스크림 샘플러세트");
insert into gifts(`name`,`price`,`desc`)
	values("듀얼 와츄원",30000,"베스킨라빈스의 아이스크림세트");
insert into gifts(`name`,`price`,`desc`)
	values("니몸내몸 영양젤리 3종 세트",29900,"건강에 좋은 성분이 포함된 젤리 세트");
insert into gifts(`name`,`price`,`desc`)
	values("모바일 상품권 2만원권",20000,"GS25 2만원 상품권");
insert into gifts(`name`,`price`,`desc`)
	values("섬유탈취제 섬유향수세트",25900,"100% 편백잎으로 만든 자연 탈취제");
    
select * from gifts;
select * from papers;
select * from users;
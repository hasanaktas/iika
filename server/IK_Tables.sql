CREATE TABLE public.kullanici (
    id 				bigserial 	NOT NULL,
    kurum_id		bigint 		NOT NULL,
    adi 			text 		NOT NULL,
    soyadi 			text 		NOT NULL,
    eposta 			text 		NOT NULL,
    parola 			text 		NOT NULL,
	uid 			bigint 		NOT NULL,
    silindi 		boolean 	NOT NULL,
    CONSTRAINT pk_kullanici PRIMARY KEY (id)
);
insert into kullanici values(1, 1, 'Sistem', 'Kullanıcısı', 'admin@ik.com.tr','18bf5977f3966f1c52b338811b5e047b8e5269d9e8f0a0000a6eae3b22d49b5893671ea5319dedd55cfbcbe3922212ab123ac7289725dce4f20a6c96a416084f',1, false);

CREATE TABLE public.kurum (
    id 			    bigserial 	NOT NULL,
    adi 		    text 		NOT NULL,
	uid 		    bigint 		NOT NULL,
    silindi 	    boolean 	NOT NULL,
    CONSTRAINT pk_kurum PRIMARY KEY (id)
);
insert into kullanici values(1, 'STY Inc.',1, false);

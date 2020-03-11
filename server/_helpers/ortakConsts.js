const kurumTurleri = {
    BELEDIYE: 'BELEDIYE',
    UNIVERSITE: 'UNIVERSITE',
    KIT: 'KIT',
    BAKANLIK: 'BAKANLIK',
};

const kurumAltTurleri = {
    BUYUKSEHIR: 'BUYUKSEHIR',
    IL: 'IL',
    ILCE_BS: 'ILCE_BS',
    ILCE_IL: 'ILCE_IL',

    DEVLET: 'DEVLET',
    OZEL: 'OZEL',
    VAKIF: 'VAKIF',

    KIT: 'KIT',

    BAKANLIK: 'BAKANLIK',
};

const calismaTipleri = {
    HAZIRLIK_PROGRAMI: 'HAZIRLIK_PROGRAMI',
    DURUM_ANALIZI: 'DURUM_ANALIZI',
    GELECEGE_BAKIS: 'GELECEGE_BAKIS',
    FARKLILASMA_STRATEJISI: 'FARKLILASMA_STRATEJISI',
    STRATEJI_GELISTIR: 'STRATEJI_GELISTIR',
    EYLEM_PLANI: 'EYLEM_PLANI',
    PERFORMANS_PROGRAMI: 'PERFORMANS_PROGRAMI',
    UYGULAMA_PER_GOS: 'UYGULAMA_PER_GOS',
    UYGULAMA_FAALIYET: 'UYGULAMA_FAALIYET',
    SP_IZLEME: 'SP_IZLEME',
    SP_DEGERLENDIR: 'SP_DEGERLENDIR',
    BIRIM_FAALIYET: 'BIRIM_FAALIYET',
    KURUM_FAALIYET: 'KURUM_FAALIYET',
};

const ustPolitikaBelgeTipleri = {
    CB_YILLIK_P: 'CB_YILLIK_P',
    KALKINMA_PLANI: 'KALKINMA_PLANI',
    O_DONUSUM_P: 'O_DONUSUM_P',
    ORTA_VADELI_P: 'ORTA_VADELI_P',
};

const gorevTipleri = {
    BASLAMA_TALEBI: 'BASLAMA_TALEBI',
    SP_GENELGESI_SGK: 'SP_GENELGESI_SGK',
    SPE_OLUSTUR: 'SPE_OLUSTUR',
    SP_GOREV_DAGITIMI: 'SP_GOREV_DAGITIMI',
    EGITIM_IHTIYACI: 'EGITIM_IHTIYACI',
    KONTROL_LISTESI: 'KONTROL_LISTESI',
    GERCEKLESME_DUZEYI: 'GERCEKLESME_DUZEYI',
    GERCEKLESME_NEDENI: 'GERCEKLESME_NEDENI',
    GERCEKLESME_TAHMINI: 'GERCEKLESME_TAHMINI',
    YASAL_YUKUMLULUK: 'YASAL_YUKUMLULUK',
    GECMEYEN_HIZMET: 'GECMEYEN_HIZMET',
    URUN_HIZMET: 'URUN_HIZMET',
    KALKINMA_PLANI: ustPolitikaBelgeTipleri.KALKINMA_PLANI,
    O_DONUSUM_P: ustPolitikaBelgeTipleri.O_DONUSUM_P,
    ORTA_VADELI_P: ustPolitikaBelgeTipleri.ORTA_VADELI_P,
    CB_YILLIK_P: ustPolitikaBelgeTipleri.CB_YILLIK_P,
    FAALIYET_ALANI: 'FAALIYET_ALANI',
    SATIS_GELIRLER: 'SATIS_GELIRLER',
    URUN_KIYASLA: 'URUN_KIYASLA',
    PAYDAS_TESPITI: 'PAYDAS_TESPITI',
    PAYDAS_ONCELIK: 'PAYDAS_ONCELIK',
    PAYDAS_URUN_MATRIS: 'PAYDAS_URUN_MATRIS',
    PAYDAS_DEGERLENDIR: 'PAYDAS_DEGERLENDIR',
    PAYDAS_GORUS_PLAN: 'PAYDAS_GORUS_PLAN',
    PAYDAS_GORUS_RAPOR: 'PAYDAS_GORUS_RAPOR',
    YETKINLIK_ANALIZI: 'YETKINLIK_ANALIZI',
    KURUM_KULTURU: 'KURUM_KULTURU',
    TASINMAZ_ANALIZI: 'TASINMAZ_ANALIZI',
    TASITLAR_ANALIZI: 'TASITLAR_ANALIZI',
    BILISIM_ANALIZI: 'BILISIM_ANALIZI',
    DONANIM_ANALIZI: 'DONANIM_ANALIZI',
    MKAYNAK_ANALIZI: 'MKAYNAK_ANALIZI',
    FINANSAL_ORANLAR: 'FINANSAL_ORANLAR',
    AKADEMIK_FAALIYET: 'AKADEMIK_FAALIYET',
    UNIVERSITE_DURUMU: 'UNIVERSITE_DURUMU',
    PESTLE_ANALIZI: 'PESTLE_ANALIZI',
    YAPI_ANALIZI: 'YAPI_ANALIZI',
    GUC_ANALIZI: 'GUC_ANALIZI',
    SEKTOR_INCELE: 'SEKTOR_INCELE',
    GZFT_ANALIZI: 'GZFT_ANALIZI',
    TESPIT_IHTIYAC: 'TESPIT_IHTIYAC',
    MISYON_BELIRLE: 'MISYON_BELIRLE',
    VIZYON_BELIRLE: 'VIZYON_BELIRLE',
    TEMEL_DEGERLER: 'TEMEL_DEGERLER',
    FS_GORUS_ARASTIR: 'FS_GORUS_ARASTIR',
    FS_KONUM_TERCIHI: 'FS_KONUM_TERCIHI',
    FS_BASARI_BOLGESI: 'FS_BASARI_BOLGESI',
    FS_DEGER_SUNUMU: 'FS_DEGER_SUNUMU',
    FS_TEMEL_YETKINLIK: 'FS_DEGER_SUNUMU',
    AMAC_BELIRLE: 'AMAC_BELIRLE',
    HEDEF_BELIRLE: 'HEDEF_BELIRLE',
    HEDEF_KARTI: 'HEDEF_KARTI',
    HEDEF_MALIYET: 'HEDEF_MALIYET',
    TEMEL_PER_GOS: 'TEMEL_PER_GOS',
    EYLEM_PLANI_KARTI: 'EYLEM_PLANI_KARTI',
    PERF_HEDEF_KARTI: 'PERF_HEDEF_KARTI',
    PERF_FAALIYET_KARTI: 'PERF_FAALIYET_KARTI',
    PERF_KAYNAK_IHTIYAC: 'PERF_KAYNAK_IHTIYAC',
    PER_GOS_VERI_GIRIS: 'PER_GOS_VERI_GIRIS',
    FAALIYET_VERI_GIRIS: 'FAALIYET_VERI_GIRIS',
    HEDEF_IZLE: 'HEDEF_IZLE',
    HEDEF_DEGERLENDIR: 'HEDEF_DEGERLENDIR',
    DEGERLENDIR_ETKI: 'DEGERLENDIR_ETKI',
    DEGERLENDIR_RISK: 'DEGERLENDIR_RISK',
    DEGERLENDIR_KAPASITE: 'DEGERLENDIR_KAPASITE',
    FAAL_AMAC_HEDEF: 'FAAL_AMAC_HEDEF',
    BRM_FAAL_DETAY: 'BRM_FAAL_DETAY',
    BRM_FAAL_PG_DETAY: 'BRM_FAAL_PG_DETAY',
    BRM_FAAL_USTUN: 'BRM_FAAL_USTUN',
    BRM_FAAL_ZAYIF: 'BRM_FAAL_ZAYIF',
    BRM_FAAL_IC_KON_GUV: 'BRM_FAAL_IC_KON_GUV',
    KRM_FAAL_DETAY: 'KRM_FAAL_DETAY',
    KRM_FAAL_PG_DETAY: 'KRM_FAAL_PG_DETAY',
    KRM_FAAL_USTUN: 'KRM_FAAL_USTUN',
    KRM_FAAL_ZAYIF: 'KRM_FAAL_ZAYIF',
    KRM_FAAL_IKG_UST: 'KRM_FAAL_IKG_UST',
    KRM_FAAL_IKG_SGB: 'KRM_FAAL_IKG_SGB',
    CALISMA_ALANI: 'CALISMA_ALANI',
    ALT_ASAMA: 'ALT_ASAMA'
};

const gorevDurumlari = {
    YENI: 'YENI',
    DEVAM_EDIYOR: 'DEVAM_EDIYOR',
    TAMAMLANDI: 'TAMAMLANDI',
    ONAY_BEKLIYOR: 'ONAY_BEKLIYOR',
    ONAYLANDI: 'ONAYLANDI',
    REDDEDILDI: 'REDDEDILDI'
};

function getCalismaGrubu(calisma_tipi, user) {
    let res = [];
    if ([calismaTipleri.HAZIRLIK_PROGRAMI,calismaTipleri.DURUM_ANALIZI,calismaTipleri.GELECEGE_BAKIS,calismaTipleri.FARKLILASMA_STRATEJISI,calismaTipleri.STRATEJI_GELISTIR]
        .includes(calisma_tipi)) {
        res.push({calisma_tipi: calismaTipleri.HAZIRLIK_PROGRAMI, kisaAdi: 'Hazırlık Süreci', adi: 'Stratejik Plan Hazırlık Süreci'});
        res.push({calisma_tipi: calismaTipleri.DURUM_ANALIZI, kisaAdi: 'Durum Analizi', adi: 'Durum Analizi'});
        res.push({calisma_tipi: calismaTipleri.GELECEGE_BAKIS, kisaAdi: 'Geleceğe Bakış', adi: 'Geleceğe Bakış'});
        // if (user.kurum_turu === kurumTurleri.UNIVERSITE) {
            res.push({calisma_tipi: calismaTipleri.FARKLILASMA_STRATEJISI, kisaAdi: 'Farklılaşma Stratejisi', adi: 'Farklılaşma Stratejisi'});
         // }
        res.push({calisma_tipi: calismaTipleri.STRATEJI_GELISTIR, kisaAdi: 'Strateji Geliştirme', adi: 'Strateji Geliştirme'});
    }
    if (calisma_tipi === calismaTipleri.EYLEM_PLANI) {
        res.push({calisma_tipi: calismaTipleri.EYLEM_PLANI, kisaAdi: 'Eylem Planı', adi: 'Eylem Planı'});
    }
    if (calisma_tipi === calismaTipleri.PERFORMANS_PROGRAMI) {
        res.push({calisma_tipi: calismaTipleri.PERFORMANS_PROGRAMI, kisaAdi: 'Performans Programı', adi: 'Performans Programı'});
    }
    if (calisma_tipi === calismaTipleri.UYGULAMA_PER_GOS) {
        res.push({calisma_tipi: calismaTipleri.UYGULAMA_PER_GOS, kisaAdi: 'Uygulama-Per.Gös.', adi: 'Uygulama-Per.Gös.'});
    }
    if (calisma_tipi === calismaTipleri.UYGULAMA_FAALIYET) {
        res.push({calisma_tipi: calismaTipleri.UYGULAMA_FAALIYET, kisaAdi: 'Uygulama-Faaliyet', adi: 'Uygulama-Faaliyet'});
    }
    if (calisma_tipi === calismaTipleri.SP_IZLEME) {
        res.push({calisma_tipi: calismaTipleri.SP_IZLEME, kisaAdi: 'Stratejik Plan İzleme Raporu', adi: 'Stratejik Plan İzleme Raporu'});
    }
    if (calisma_tipi === calismaTipleri.SP_DEGERLENDIR) {
        res.push({calisma_tipi: calismaTipleri.SP_DEGERLENDIR, kisaAdi: 'Stratejik Plan Değerlendirme Raporu', adi: 'Stratejik Plan Değerlendirme Raporu'});
    }
    if (calisma_tipi === calismaTipleri.BIRIM_FAALIYET) {
        res.push({calisma_tipi: calismaTipleri.BIRIM_FAALIYET, kisaAdi: 'Birim Faaliyet Raporu', adi: 'Birim Faaliyet Raporu'});
    }
    if (calisma_tipi === calismaTipleri.KURUM_FAALIYET) {
        res.push({calisma_tipi: calismaTipleri.KURUM_FAALIYET, kisaAdi: 'İdare Faaliyet Raporu', adi: 'İdare Faaliyet Raporu'});
    }

    return res;
}

const ekipTipleri = {
    SGK: 'SGK',
    SPE: 'SPE',
};

const comboTipleri = {
    EVET: 'EVET',
    HAYIR: 'HAYIR',
    KISMEN: 'KISMEN',

    URUN: 'URUN',
    HIZMET: 'HIZMET',
};

const gorevlerimAnaMenuler = {
    GELEN_KUTUM: 'GELEN_KUTUM',
    ATADIKLARIM: 'ATADIKLARIM',
    TAMAMLADIKLARIM: 'TAMAMLADIKLARIM',
    OLUSTURDUKLARIM: 'OLUSTURDUKLARIM',
    ONAYLADIKLARIM: 'ONAYLADIKLARIM',
    REDDETTIKLERIM: 'REDDETTIKLERIM',
};
const gorevlerimDigerMenuler = {
    YILDIZLI: 'YILDIZLI',
    ONEMLI: 'ONEMLI',
};

const gorevlerimMenuleri = [
    {baslik: 'Gelen Kutum', deger: gorevlerimAnaMenuler.GELEN_KUTUM},
    {baslik: 'Atadıklarım', deger: gorevlerimAnaMenuler.ATADIKLARIM},
    {baslik: 'Tamamladıklarım', deger: gorevlerimAnaMenuler.TAMAMLADIKLARIM},
    {baslik: 'Oluşturduklarım', deger: gorevlerimAnaMenuler.OLUSTURDUKLARIM},
    {baslik: 'Onayladıklarım', deger: gorevlerimAnaMenuler.ONAYLADIKLARIM},
    {baslik: 'Reddettiklerim', deger: gorevlerimAnaMenuler.REDDETTIKLERIM},
];

const agacIslem = {oncesi:'ONCESI', sonrasi:'SONRASI', icine:'ICINE'};

const gerDuzDurumlari = {ulasildi: 'ULASILDI', makul: 'MAKUL', ulasilamadi: 'ULASILAMADI'};

const paydasOncelikSonuclar = {
    IZLE: 'IZLE',
    BILGILENDIR: 'BILGILENDIR',
    GOZET: 'GOZET',
    CALIS: 'CALIS'
};

const gorusYontemComboVals = [
    {label: "Mülakat-Yüzyüze", value: "MULAKAT"},
    {label: "Anket uygulaması", value: "ANKET"},
    {label: "Atölye çalışması", value: "ATOLYE"},
    {label: "Toplantı", value: "TOPLANTI"},
    {label: "Arama konferansı", value: "ARAMA"},
    {label: "Çalıştay", value: "CALISTAY"},
];

const akademikFaaliyetTurleri = [
    {label: "Eğitim", value: "01_EGITIM"},
    {label: "Araştırma", value: "02_ARASTIRMA"},
    {label: "Girişimcilik", value: "03_GIRISIMCILIK"},
    {label: "Toplumsal katkı", value: "04_TOPLUMSAL_KATKI"},
];
const akademikFaaliyetTipleri = [
    {label: "GÜÇLÜ YÖNLER", value: "01_GUCLU_YONLER"},
    {label: "ZAYIF YÖNLER/SORUNLU ALANLAR", value: "02_ZAYIF_YONLER"},
];

const pestleEtkenTipleri = [
    {label: "Politik", value: "01_POLITIK"},
    {label: "Ekonomik", value: "02_EKONOMIK"},
    {label: "Sosyokültürel", value: "03_SOSYOKULTUREL"},
    {label: "Teknolojik", value: "04_TEKNOLOJIK"},
    {label: "Yasal", value: "05_YASAL"},
    {label: "Çevresel", value: "06_CEVRESEL"},
];
const pestleEgilimYonleri = [
    {label: "POZİTİF", value: "01_POZITIF"},
    {label: "BELİRSİZ", value: "02_BELIRSIZ"},
    {label: "NEGATİF", value: "03_NEGATIF"},
];

const yapiEtkenTipleri = kurum_turu => {
    if (kurum_turu === kurumTurleri.UNIVERSITE) {
        return [{label: "Rakipler", value: "01_RAKIPLER"},
            {label: "Paydaşlar", value: "02_PAYDASLAR"},
            {label: "Tedarikçiler", value: "03_TEDARIKCILER"},
            {label: "Düzenleyici / Denetleyici Kuruluşlar", value: "04_KuruLUSLAR"},];
    } else if (kurum_turu === kurumTurleri.KIT) {
        return [{label: "Pazarın Durumu", value: "01_PAZAR"},
            {label: "Rekabet Durumu", value: "02_REKABET"},
            {label: "Paydaşlar", value: "03_PAYDAS"},];
    }
    return [];
};

const gzftIcCevreTipleri = [
    {label: "GÜÇLÜ", value: "GUCLU"},
    {label: "ZAYIF", value: "ZAYIF"},
];
const gzftMatrisTipleri = [
    {label: "GÜÇLÜ - FIRSAT", value: "GF"},
    {label: "GÜÇLÜ - TEHDİT", value: "GT"},
    {label: "ZAYIF - FIRSAT", value: "ZF"},
    {label: "ZAYIF - TEHDİT", value: "ZT"},
];

const temelDegerKonulari = [
    {value: "1", label: "Kişiler-İdare çalışanlarına yönelik değerler"},
    {value: "2", label: "Kişiler-Paydaşlarla ilişkilere yönelik değerler"},
    {value: "3", label: "Süreçler-Yönetim sürecine ilişkin değerler"},
    {value: "4", label: "Süreçler-Karar alma sürecine ilişkin değerler"},
    {value: "5", label: "Süreçler-Hizmet sunumu sürecine ilişkin değerler"},
    {value: "6", label: "Performans-Politika oluşturma sürecinin kalitesiyle ilgili değerler"},
    {value: "7", label: "Performans-Sunulan ürün ve/veya hizmetlerin kalitesiyle ilgili değerler"},
];

const fsGorusArastirTipleri = [
    {value: "MERKEZI", label: "Merkezi İdare"},
    {value: "YEREL", label: "Yerel/Bölgesel İdare"},
];
const fsGorusArastirKonulari = [
    {value: "Yerel/Bölgesel Özellikler", label: "Yerel/Bölgesel Özellikler"},
    {value: "Yerel/Bölgesel Sanayi Kümeleri", label: "Yerel/Bölgesel Sanayi Kümeleri"},
    {value: "Yerel/Bölgesel İşgücü Talebi Eğilimleri", label: "Yerel/Bölgesel İşgücü Talebi Eğilimleri"},
];

const fsKonumTercihleri = [
    {value: "EGITIM", label: "Eğitim Odaklı"},
    {value: "GIRISIM", label: "Girişim Odaklı"},
    {value: "ARASTIRMA", label: "Araştırma Odaklı"},
];
const fsKonumTercihiKonulari = [
    {value: "1", label: "Yükseköğretim politikaları"},
    {value: "2", label: "Tarihsel Nedenler"},
    {value: "3", label: "Ulusal/Uluslararası eğilimler"},
    {value: "4", label: "Yerel/Bölgesel Özellikler"},
    {value: "5", label: "Yerel/Bölgesel Sanayi Kümeleri"},
    {value: "6", label: "Yerel/Bölgesel İşgücü Talebi Eğilimleri"},
    {value: "7", label: "Kurumsal Kapasite Yetkinlikleri"},
];
const fsKonumTercihiDegisiklikTipleri = [
    {value: "1", label: "Yapısal"},
    {value: "2", label: "Yönetsel"},
    {value: "3", label: "İdari"},
];

const fsBasariBolgesiOncelikTurleri = [
    {value: "O", label: "Öncelikli"},
    {value: "S", label: "Stratejik"},
];
const fsBasariBolgesiPaydasGorusTipleri = [
    {value: "B", label: "Beklenti"},
    {value: "O", label: "Öneri"},
    {value: "S", label: "Şikâyet"},
];

const fsDegerSunumuTercihleri = [
    {value: "YE", label: "Yok Et"},
    {value: "AZ", label: "Azalt"},
    {value: "AR", label: "Artır"},
    {value: "YY", label: "Yenilik Yap"},
];
const fsTemelYetkinlikEylemTipleri = [
    {value: "1", label: "Geliştirilecek"},
    {value: "2", label: "Korunacak"},
];

const amacDengeliKartTipleri = [
    {value: "1", label: "Müşteriler - Yararlanıcılar Perspektifi"},
    {value: "2", label: "İş Süreçlerinin İyileştirilmesi Perspektifi"},
    {value: "3", label: "Kurumsal Kapasitenin Geliştirilmesi Perspektifi"},
    {value: "4", label: "Finansal Perspektif"},
];

const hedefFaaliyetTipleri = [
    {value: "FAALIYET", label: "Faaliyet"},
    {value: "PROJE", label: "Proje"},
];

const perGosTipi = {
    KUMULATIF_ARTIS: '1',
    YUZDE_OLARAK_ARTIS: '2',
    AZALMA_SEKLINDE: '3',
    AYNI_DEGERI_KORUMA: '4',
    HER_YIL_ARTAN_DEGER: '5',
    TEK_SEFERDE_GERCEKLESEN: '6',
    STANADART_SIRALAMA: '7',
};

const perGosTipleri = [
    {value: "1", label: "Kümülatif Artış"},
    {value: "2", label: "Yüzde Olarak Artış"},
    {value: "3", label: "Azalma Şeklinde"},
    {value: "4", label: "Aynı Değeri Koruma"},
    {value: "5", label: "Her Yıl Ayrı Değer"},
    {value: "6", label: "Tek Seferde Gerçekleşen"},
    {value: "7", label: "Standart Sıralama"},
];
const perGosSiniflari = [
    {value: "1", label: "Girdi Göstergesi"},
    {value: "2", label: "Çıktı Göstergesi"},
    {value: "3", label: "Sonuç Göstergesi"},
    {value: "4", label: "Kalite Göstergesi"},
    {value: "5", label: "Verimlilik Göstergesi"},
    {value: "6", label: "Diğer"},
];

const pgDurumlari = [
    {value: "1", label: "Tamamlandı"},
    {value: "2", label: "Kısmen Tamamlandı"},
    {value: "3", label: "Tamamlanmadı"},
];

const ustunZayifTipleri = {
    USTUN: 'USTUN',
    ZAYID: 'ZAYID',
};

module.exports = {
    kurumTurleri,
    kurumAltTurleri,
    calismaTipleri,
    gorevTipleri,
    gorevDurumlari,
    getCalismaGrubu,
    ekipTipleri,
    gerDuzDurumlari,
    comboTipleri,
    ustPolitikaBelgeTipleri,
    paydasOncelikSonuclar,
    gorusYontemComboVals,
    akademikFaaliyetTurleri,
    akademikFaaliyetTipleri,
    pestleEtkenTipleri,
    pestleEgilimYonleri,
    yapiEtkenTipleri,
    gzftIcCevreTipleri,
    gzftMatrisTipleri,
    temelDegerKonulari,
    fsGorusArastirTipleri,
    fsGorusArastirKonulari,
    fsKonumTercihleri,
    fsKonumTercihiKonulari,
    fsKonumTercihiDegisiklikTipleri,
    fsBasariBolgesiOncelikTurleri,
    fsBasariBolgesiPaydasGorusTipleri,
    fsDegerSunumuTercihleri,
    fsTemelYetkinlikEylemTipleri,
    amacDengeliKartTipleri,
    hedefFaaliyetTipleri,
    perGosTipi,
    perGosTipleri,
    perGosSiniflari,
    pgDurumlari,
    ustunZayifTipleri,
};

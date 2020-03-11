const express = require('express');
const router = express.Router();

const dbUtils = require('db-utils.js');
const ortakFuncs = require('./_helpers/ortakFuncs');
const ortakConsts = require('./_helpers/ortakConsts');

router.get('/kurum-liste', getKurumlar);
router.get('/kurum', getKurum);
router.post('/kurum', kurumEkle);
router.put('/kurum', kurumGuncelle);
router.delete('/kurum', kurumSil);

module.exports = {
    router,
};

async function getKurumlar(req, res, next) {
    const sonuc = await dbUtils.query(`select * from kurum where not silindi`,[]);
    res.status(200).json({ data: sonuc.rows});
}

async function getKurum(req, res, next) {
    console.log(req.query);
    const sonuc = await dbUtils.query(`select * from kurum where not silindi and id = $1`,[req.query.id]);
    res.status(200).json({ data: sonuc.rows[0]});
}

async function kurumEkle(req, res, next) {
    await dbUtils.query(`insert into kurum values(default,$1,$2,false)`,[req.body.adi,req.user.id]);
    res.status(200).json({ data: null});
}

async function kurumGuncelle(req, res, next) {
    await dbUtils.query(`	update kurum set adi=$1,uid=$2 where id=$3`,[req.body.adi,req.user.id,req.body.id]);
    res.status(200).json({ data: null});
}

async function kurumSil(req, res, next) {
    await dbUtils.query(`update kurum set silindi = true, uid=$1 where id=$2`,[req.user.id,req.query.id]);
    res.status(200).json({ data: null});
}

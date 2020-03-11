const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const config = require('config.json');
const dbUtils = require('db-utils.js');
const ortakFuncs = require('./_helpers/ortakFuncs');

router.get('/echo', echo);
router.post('/authenticate', authenticate);

module.exports = router;

function echo(req, res, next) {
	res.status(200).json({ mesaj: 'Sistem çalışıyor..' });
}

async function authenticate(req, res, next) {
    const hashed = await ortakFuncs.getHashed(req.body.parola);
	const dbSonuc = await dbUtils.query(`select * from kullanici where eposta =$1 and parola=$2 and not silindi`,[req.body.eposta, hashed]);

	if (dbSonuc.rows.length) {
        const kullanici = dbSonuc.rows[0];
        const kurum = (await dbUtils.query(`select * from kurum where id = $1`,[kullanici.kurum_id])).rows[0];

        const token = jwt.sign({
			id: kullanici.id,
            eposta: kullanici.eposta,
			kurum_id: kullanici.kurum_id,
            kurum_adi: kurum.adi,
		}, config.secret);
        const sonuc = {
            result: true,
            user: {
            	id: kullanici.id,
                eposta: kullanici.eposta,
                adi: kullanici.adi,
                soyadi: kullanici.soyadi,
                kurum_id: kullanici.kurum_id,
                kurum_adi: kurum.adi,
                token: token
            }
        };
	   res.status(200).json({ sonuc });
	   return;
	}	
	res.status(400).json({ message: 'Yanlış kullanıcı adı/parola!' });
}

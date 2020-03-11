const moment = require('moment');
const crypto = require('crypto');

module.exports = {
    getSistemZamani,
    toMoment,
    toDBDate,
    toStrDate,
    getUnique,
    formatMoney,
    getLabel,
    getHashed
};

function getSistemZamani() {
    return new moment().format('YYYYMMDDHHmmss');
}

function toMoment(tarih) {
    if (!tarih) return null;
    return moment(tarih, 'YYYYMMDD');
}

function toDBDate(tarih) {
    if (!tarih) return null;
    return moment(tarih).format('YYYYMMDD');
}

function toStrDate(tarih) {
    if (!tarih) return '';
    return toMoment(tarih).format('DD.MM.YYYY');
}

function getUnique(arr) {
    return [...new Set(arr) ];
};

function formatMoney(amount, decimalCount = 2, decimal = ".", thousands = ",") {
    if (amount === 0) return 0;
    if (!amount) return '';
    try {
        decimalCount = Math.abs(decimalCount);
        decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

        const negativeSign = amount < 0 ? "-" : "";

        let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
        let j = (i.length > 3) ? i.length % 3 : 0;

        return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
    } catch (e) {
        console.log(e)
    }
}

function getLabel(liste, value) {
    let str = '';
    const filtered = liste.filter(o => o.value === value);
    if (filtered.length) str = filtered[0].label;
    return str;
}

async function getHashed(secret) {
    const key = await crypto.pbkdf2Sync(secret, 'fghERT545tyuFDSDFSDFqW', 100000, 64, 'sha512');
    return key.toString('hex');
}

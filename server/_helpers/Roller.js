module.exports = {
    ADMIN: {rol: 'ADMIN'},
    UST_YONETICI: {rol: 'UST_YONETICI', baslamaTalebiOnayla: 'baslamaTalebiOnayla', spGenelgesiSgkOnayla: 'spGenelgesiSgkOnayla',
        speOnayla: 'speOnayla', spGorevDagitimiOnayla: 'spGorevDagitimiOnayla', egitimIhtiyaciOnayla: 'egitimIhtiyaciOnayla',
        kontrolListesiOnayla: 'kontrolListesiOnayla',
        perspektifVer: 'perspektifVer', misyonBelirle: 'misyonBelirle', misyonOnayla: 'misyonOnayla',
        amacBelirle: 'amacBelirle', hedefBelirle: 'hedefBelirle',
        eylemPlaniOnayla: 'eylemPlaniOnayla',
        perfHedefOnayla: 'perfHedefOnayla',
        izlemeOnayla: 'izlemeOnayla',
        degerlendirmeOnayla: 'degerlendirmeOnayla',
    },
    SGB_BASKANI : {rol: 'SGB_BASKANI'},
    yetkili,
    getRoller,
    getRol,
    getOzellikler,
};

function yetkili(roller, rol, ozellik) {
    let found = null;
    if (roller) {
        found = roller.filter( val => val.rol === rol && (!ozellik || val.ozellikler.includes(ozellik)) );
    }
    if (!found || found.length === 0) {
        return false;
    }
    return true;
}

function getRoller() {
    const roller = Object.keys(this)
        .filter( key => this[key].rol)
        .map(key => this[key]);
    return roller;
}

function getRol(rol) {
    return this[rol];
}

function getOzellikler(rol) {
    const ozellikler = Object.keys(rol)
        .filter( key => key !== 'rol');
    return ozellikler;
}

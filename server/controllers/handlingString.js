
const change_sing = (arr) => {
    var str = arr;
        str = str.toLowerCase();
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
        str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
        str = str.replace(/đ/g,"d");
        str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ");
        str = str.replace(/\s+/g ,"");
        str = str.toUpperCase();
    return str;
}

const change_character = (arr) => {
    var str = arr;
        str = str.replace(/!|@|%|\^|\*|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ");
        str = str.trim();
        str = str.replace(/\s+/g ," ");
    return str;
}

const change_number = (arr) => {
    let str = arr.replace(/,|\./g, '')
    return str;
}


const change_special = (special) => {
    let data = Object.fromEntries(
        Object.entries(special).map(([key , value]) => 
            [key , change_character(value)]
        )
    );
    return data
}

const change_alias = (alias) => {
    let data = Object.fromEntries(
        Object.entries(alias).map(([key , value]) => 
            [key , change_sing(value)]
        )
    );
    return data
}

const filter_whitespace = (obj) => {
    let data = Object.fromEntries(
        Object.entries(obj).map(([key , value]) => 
            [key , value.trim().replace(/\s+/g, ' ')]
        )
    );
    return data;
}

const change_Number = (obj) => {
    let data = Object.fromEntries(
        Object.entries(obj).map(([key , value]) => 
            [key , change_number(value)]
        )
    );
    return data
}

module.exports = {
    change_alias ,
    filter_whitespace ,
    change_special ,
    change_Number
}
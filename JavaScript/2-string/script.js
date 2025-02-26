

//Bir cümlenin ilk harfini büyük, geri kalan harflerini küçük hale getiren bir fonksiyon yaz.

let input = "psndsvıoapğbpıfjvWBIVLKeqfoğvbaetmgpolxykdykökjhtg  atehwetyjkptrlıoykhglf cOmİnG sooN";

function ilkHarf(text) {

    let firstLetter = text.charAt(0).toUpperCase();
    let endLetter = text.slice(1).toLowerCase();
    return firstLetter + endLetter;
}


console.log(ilkHarf(input));

//Bir metindeki tüm sesli harfleri (a, e, ı, i, o, ö, u, ü) kaldıran kodu yaz.

let metin = "i am the best always";

function remove(text){

    let regex = /[aeıioöuüAEIİOÖUÜ]/g ;

    return text.replace(regex,"");

}

console.log(remove(metin));




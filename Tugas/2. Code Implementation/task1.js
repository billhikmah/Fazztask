const deteksiPalindrom = (input)=>{
    const word = input.toLowerCase();
    for(i=0; i<word.length; i++){                   //Revisi panjangTeks dihapus
        if(word[i] !== word[word.length-1-i]){
            return "bukan palindrom";
        }
    };
    return "palindrom";                             //Revisi variabel output
};

const teks = "Kasur kakak rusak";
const cetak = deteksiPalindrom(teks);
console.log(cetak);
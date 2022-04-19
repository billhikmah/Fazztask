const deteksiPalindrom = (input)=>{
    const word = input.toLowerCase();
    const panjangTeks = word.length;
    let output = "palindrom";
    for(i=0; i<panjangTeks; i++){
        if(word[i] !== word[panjangTeks-1-i]){
            return output = "bukan palindrom";
        }
    };
    return output;
};

const teks = "Kasur kakak rusak";
const cetak = deteksiPalindrom(teks);
console.log(cetak);
const reverse = (input)=>{
    const words = input.toLowerCase();
    const wordsLength = words.length;
    let container = "";
    let output = "";

    for(i=0; i<wordsLength; i++){
        if(words[i] !== " "){
            container = container + words[i];
        }
        if(words[i] === " "){
            output = " " + container +  output;
            container = "";
        }
    }
    output = container + " " + output;
    return output;
};

const teks = "Bill mencoba belajar Javascript";
const cetak = reverse(teks);
console.log(`\n${cetak}\n`)
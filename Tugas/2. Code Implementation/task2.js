const reverse = (input)=>{
    const words = input.toLowerCase();          //Revisi variabel wordsLength dihapuskan
    let container = "";
    let output = "";

    for(i=0; i<words.length; i++){
        if(words[i] !== " "){
            container = container + words[i];
            continue;                           //Revisi penambahan continue
        }
        output = " " + container +  output;
        container = "";
    }

    output = container + " " + output;
    return output;
};

const teks = "Bill mencoba belajar Javascript";
const cetak = reverse(teks);
console.log(`\n${cetak}\n`)
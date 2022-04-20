const sortir = (input)=>{
    if(typeof input !== "number"){
        return "\nInput harus berupa number!\n"
    };
    let arr = input.toString().split("");
    let container = [];
    let output = [];                                        //Revisi: Penamaan variabel

    for(i=0; i<arr.length; i++){
        if(arr[i] !== "0"){
            container = container.concat(arr[i]);
            continue;                                       //Revisi: Else digantikan dengan continue
        }
        output = output.concat(container.sort());
        container = [];
    };

    output = output.concat(container.sort()).join("");
    output = Number(output);
    return output;
};

const integer = 5956560159466056;
const cetak = sortir(integer);

console.log(cetak); // hasil yang diharapkan: 55566914566956
console.log(typeof cetak);
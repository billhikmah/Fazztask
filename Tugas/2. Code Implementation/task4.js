const sortir = (input)=>{
    if(typeof input !== "number"){
        return "\nInput harus berupa number!\n"
    };
    let str = input.toString();
    let arr = str.split("")
    const arrLength = arr.length;
    let container = [];
    let container2 = [];

    if(typeof input !== "number"){
        return "Input harus berupa number!"
    }

    for(i=0; i<arrLength; i++){
        if(arr[i] !== "0"){
            container = container.concat(arr[i]);
        } else{
            container2 = container2.concat(container.sort());
            container = [];
        };
    };

    container2 = container2.concat(container.sort());
    let join = container2.join("");
    let output = Number(join);
    return output;
};

const integer = 5956560159466056;
const cetak = sortir(integer);

console.log(cetak); // hasil yang diharapkan: 55566914566956
console.log(typeof cetak);
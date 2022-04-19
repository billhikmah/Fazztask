const ArkFood = (harga, voucher, jarak, pajak)=>{
    let potongan = 0;
    let biayaAntar = 5000;
    let biayaPajak = 0;
    let total = 0;

    if(typeof harga !== "number"){
        return console.log("\nHarga harus berupa number!\n");
    }
    if(typeof jarak !== "number"){
        return console.log("\nJarak harus berupa number!\n");
    }
    if(voucher !== "ARKAFOOD5" && voucher !== "DITRAKTIRDEMY" && voucher !== null){
        return console.log("\nVoucher tidak valid\n");
    }
    if(voucher === "ARKAFOOD5"){
        if(harga<=50*1000){
            return console.log("\nVoucher tidak dapat digunakan, pesanan belum memenuhi jumlah minimum pembelian\n");
        }
        potongan = harga * 50 / 100;
    }
    if(voucher === "DITRAKTIRDEMY"){
        if(harga<=25*1000){
            return console.log("\nVoucher tidak dapat digunakan, pesanan belum memenuhi jumlah minimum pembelian\n");
        }
        potongan = harga * 60 / 100;
    }
    if(voucher === "ARKAFOOD5" && potongan >= 50 * 1000){
        potongan = 50 * 1000;
    }
    if(voucher === "DITRAKTIRDEMY" && potongan >= 25 * 1000){
        potongan = 25 * 1000;
    }
    if(jarak >= 2){
        biayaAntar = ((5 * 1000) + ((Math.ceil(jarak) - 2) * 3 * 1000));
    }
    if(pajak === true){
        biayaPajak = 5 / 100 * harga;
    }
    total = harga - potongan + biayaAntar + biayaPajak;

    return console.log(`
    Harga = ${harga}
    Potongan = ${potongan}
    Biaya Antar = ${biayaAntar}
    Pajak = ${biayaPajak}
    Total = ${total}\n`)
}

const harga = 100000;
const voucher = "ARKAFOOD5";
// const voucher = "DITRAKTIRDEMY";
const jarak = 10;
const pajak = true;

ArkFood(harga, voucher, jarak, pajak);
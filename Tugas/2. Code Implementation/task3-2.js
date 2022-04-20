const ArkFood = (harga, voucher, jarak, pajak)=>{
    let potongan = 0;
    let biayaAntar = 5000;
    let biayaPajak = 0;
    let total = 0;

    if(typeof harga !== "number"){                              //Revisi: console.log pada return dihapus
        return "\nHarga harus berupa number!\n";
    }
    if(typeof jarak !== "number"){
        return "\nJarak harus berupa number!\n";
    }
    if(typeof pajak !== "boolean"){                             //Revisi: Penambahan validasi pajak
        return "\nPajak harus berupa boolean!\n";
    }
    if(voucher !== "ARKAFOOD5" && voucher !== "DITRAKTIRDEMY" && voucher !== null){
        return "\nVoucher tidak valid\n";
    }
    if(voucher === "ARKAFOOD5"){
        if(harga<=50*1000){
            return "\nVoucher tidak dapat digunakan, pesanan belum memenuhi jumlah minimum pembelian\n";
        }
        potongan = harga * 50 / 100;
        if(potongan >= 50 * 1000){                              //Revisi: Potongan dimasukan dengan nested if
            potongan = 50 * 1000;
        }
    }
    if(voucher === "DITRAKTIRDEMY"){
        if(harga<=25*1000){
            return "\nVoucher tidak dapat digunakan, pesanan belum memenuhi jumlah minimum pembelian\n";
        }
        potongan = harga * 60 / 100;
        if(potongan >= 25 * 1000){                              //Revisi: Potongan dimasukan dengan nested if
            potongan = 25 * 1000;
        }
    }
    if(jarak >= 2){
        biayaAntar = ((5 * 1000) + ((Math.ceil(jarak) - 2) * 3 * 1000));
    }
    if(pajak === true){
        biayaPajak = 5 / 100 * harga;
    }
    total = harga - potongan + biayaAntar + biayaPajak;

    const cetak = `
    Harga = ${harga}
    Potongan = ${potongan}
    Biaya Antar = ${biayaAntar}
    Pajak = ${biayaPajak}
    Total = ${total}\n`

    return cetak;                                                //Revisi: console.log diganti dengan cetak
}

const harga = 100000;
// const voucher = "ARKAFOOD5";
const voucher = "DITRAKTIRDEMY";
const jarak = 3;
const pajak = false;

console.log(ArkFood(harga, voucher, jarak, pajak));

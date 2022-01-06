function chuyenDoiTien() {
    let amount = Number(document.getElementById('number').value);
    let fromCurrency = document.getElementById('fromCurrency').value;
    let toCurrency = document.getElementById('toCurrency').value;
    let tinhTien ="";

    if(fromCurrency == "VietNam" && toCurrency == "USD") {
        tinhTien = amount / 23000;
    }else if (fromCurrency == "USD" && toCurrency == "VietNam") {
        tinhTien = amount * 23000;
    }else if (fromCurrency == "VietNam" && toCurrency == "VietNam"){
        tinhTien = amount * 1;
    } else if (fromCurrency == "USD" && toCurrency == "USD"){
        tinhTien = amount * 1;
    }
    document.getElementById('result').innerText = tinhTien + " " + "USD";


}

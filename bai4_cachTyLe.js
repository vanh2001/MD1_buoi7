function chuyenDoiTien1() {
    let amount = Number(document.getElementById('number').value);
    let fromCurrency = document.getElementById('fromCurrency').value;;
    let toCurrency = document.getElementById('toCurrency').value;
    let rate =toCurrency/fromCurrency;
    let tinhTien = amount * rate;


    document.getElementById('result').innerText = tinhTien + " " + "USD";


}
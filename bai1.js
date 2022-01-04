//bài 1
var i = 10;
var f = 20.5;
var b = true;
var s = "Hà nội "

document.write('Bài 1:')
document.write('<br/>')
document.write('i = ' + i)
document.write('<br/>')
document.write('f = ' + f)
document.write('<br/>')
document.write('b = ' + b)
document.write('<br/>')
document.write('s = '+s)
document.write('<br/>')
document.write('<br/>')

//bài 2
document.write('Bài 2:')
var width = 20;
var height = 10;
var area = width + height;
document.write('<br/>')
document.write('Area = ' + area)
document.write('<br/>')
document.write('<br/>')

//bài 3
document.write('Bài 3:')
var a,b;
    a = prompt('Nhập biến a: ');
    b= prompt('Nhập biến b: ');
    if (a%b==0){
        alert('a là chia hết cho b');
    }else {
        alert('a không chia hết cho b');
    }
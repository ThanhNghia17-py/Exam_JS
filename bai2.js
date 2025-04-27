/**Bài 2
 * Đầu vào
    -Tạo biến num1, num2, num3, num4, num5, cho người dùng nhập vào
    -Tạo nút nhấn tính trung bình
 * Xử lý
    -Tạo biến numTB =(num1+num2+num3+num4+num5)/5;
    -Tạo biến display in giá trị trung bình ra màn hình
 * Đầu ra
    -Xuất giá trị display ra màn hình
 */
let btnTrungBinh=document.getElementById("btnTrungBinh");
btnTrungBinh.onclick=function(){
    let num1=document.getElementById("num1").value*1;
    let num2=document.getElementById("num2").value*1;
    let num3=document.getElementById("num3").value*1;
    let num4=document.getElementById("num4").value*1;
    let num5=document.getElementById("num5").value*1;
    let numTB= (num1+num2+num3+num4+num5)/5;
    let trungBinhDisplay=document.getElementById("trungBinhDisplay");
    trungBinhDisplay.innerHTML=numTB;
}
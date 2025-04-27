/**Bài 5
 * Đầu vào
   -Tạo biến num, cho người dùng nhập vào con số
   -Tạo nút nhấn tính tổng 2 ký số
 * Xử lý
   -Tạo biến chuc là giá trị hàng chục của num
   -Tạo biên donVi là giá trị đơn vị của num
   -Tạo biến tongKySo băng chuc+donVi
   -Tạo biến tongKySo display in ra màn hình
 * Đầu ra
   -Xuất giá trị tổng 2 ký số ra màn hình
 */
let btnTinhKySo=document.getElementById("btnTinhKySo");
btnTinhKySo.onclick=function(){
    let num=document.getElementById("num").value*1;
    let chuc=Math.floor(num/10);
    let donVi=num%10;
    let tongKySo=chuc+donVi;
    let tongDisplay=document.getElementById("tongDisplay");
    tongDisplay.innerHTML=tongKySo;
}
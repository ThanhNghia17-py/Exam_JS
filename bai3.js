/**Bài 3
 * Đầu vào
   -Tạo biến tienUsd, cho người dùng nhập vào số tiền usd
   -Tạo nút nhấn quy đổi
 * Xử lý
   -Tạo biến quyDoi=tienUsd*23500
   -Tạo biến quyDoiDisplay in ra màn hình giá trị quyDoi
 * Đầu ra
   -Xuất gái trị quyDoiDisplay ra màn hình
 */
   let btnQuydoi = document.getElementById("btnQuyDoi");
   btnQuydoi.onclick = function() {
       let tienUsd = document.getElementById("tienUsd").value;
       let quyDoi = tienUsd*23500;
       let quyDoiDisplay = document.getElementById("quyDoiDisplay");
       quyDoiDisplay.innerHTML = quyDoi;
   };
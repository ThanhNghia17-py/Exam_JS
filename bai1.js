/** Bài  1
 * Đầu vào
    -Tạo biến ngayLam, cho người dùng nhập vào ngày làm
    -Tạo nút nhấn tính lương
 * Xử lý
    -Tạo biến luong = ngayLam*100000;
    -Tạo biến luongDisplay in giá trị luong ra màn hình
 * Đầu ra
    -Xuất giá trị luongDisplay ra màn hình
 */
let tinhLuong = document.getElementById("tinhLuong");
tinhLuong.onclick = function() {
    let ngayLam = document.getElementById("ngayLam").value;
    let luong = ngayLam * 100000;
    let luongDisplay = document.getElementById("luongDisplay");
    luongDisplay.innerHTML = luong;
};

    




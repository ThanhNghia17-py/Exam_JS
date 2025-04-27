/**Bài 4
 * Đầu vào
    -Tạo biến chieuDai hình chủ nhật
    -Tạo biến chieuRong hình chủ nhật
    -Tạo nút nhấn tính toán cả chu vi và chiều dài hình chữ nhật
 * Xử lý
    -Tạo biến chuVi=(chieuDai+chieuRong)*2
    -Tạo biến dienTich=chieuDai*ChieuRong
    -Tao biến chuViDisplay in ra màn hình chu vi
    -Tạo biến dienTichDisplay in ra màn hình diện tích
 * Đầu ra
    -Xuất ra màn hình chu vi và diện tích
 */
let btnTinhToan = document.getElementById("btnTinhToan");
btnTinhToan.onclick = function() {
    let chieuDai = document.getElementById("chieuDai").value * 1;
    let chieuRong = document.getElementById("chieuRong").value * 1;
    let chuVi = (chieuDai + chieuRong) * 2;
    let dienTich = chieuRong * chieuDai;
    let chuViDisplay = document.getElementById("chuViDisplay");
    let dienTichDisplay = document.getElementById("dienTichDisplay");
    chuViDisplay.innerHTML = chuVi;
    dienTichDisplay.innerHTML = dienTich;
    console.log("1");
}
    
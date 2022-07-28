// 1.1 Nếu đặt tên biến sai thì sẽ báo SyntaxError
// 1.2 ví dụ đặt tên  biến sai
// trùng với các key word trong js
// dùng space trong tên biến
// bắt đầu bằng số

// 2 Để kiểm tra kiểu dữ liệu 
// sử dụng Typeof value
// 3 
// 8 kiểu dữ liệu 
// 7 thủy nguyên dữ liệu kiểu (boolean, null, undefined, number, BigInt, string, Symbol )
// 1 tham chiếu dạng dữ liệu kiểu (đối tượng)


// 2.a 
let msg = "Rikkei is awesome";
console.log(msg);

// 2.b 
let studentCount = 0;
console.log(studentCount);


// 3.a 
 msg = "Coding is hard but super cool and fun";
 console.log(msg);
 // 3.b
  studentCount = 30;
 console.log(studentCount);
 // 3.c
 console.log(msg.toUpperCase());
console.log(msg.toLowerCase());
 // 3.d
 let n = 3;
 studentCount = studentCount + n;
 studentCount += n;
 console.log(studentCount);


 // 4
 alert("i love you");

 // 5
 let ten1 = "Manh"

 let ten = prompt ("Bạn tên là gì")
 console.log("Chào bạn " + ten + " tôi yêu bạn");

// 6 
 let firstName = prompt ("họ bạn là gì");
 let lastName = prompt ("tên bạn là gì");
 console.log("Xin chào " +  firstName  + " " + lastName);

 // 7 
 let canhhv = prompt ("Nhập giá trị cạnh x! ");
let dientich = Number(canhhv) *  Number(canhhv);
 alert("Diện tích hình vuông là: " + dientich);


// 8
let rbankinh = Number(10);
let dientichHT1 = 3.14 * rbankinh * rbankinh;
console.log(dientichHT1);


// 9
let doC = Number(37);
let doF = doC*37;
// console.log(doF);

// 10
alert("The quick ___ fox jumps over the ___ dog");
let giatri1 = prompt("Nhập giá trị 1: ");
let giatri2 = prompt("Nhập giá trị 2: ");
console.log("The quick " + giatri1 + " fox jumps over the " + giatri2 + " dog");




// Bài tập biến và kiểu dữ liệu toán tử


// 1 
let diemVatly = prompt("Nhập điểm vật lý: ");
let diemHoa = prompt("Nhập điểm Hóa Học: ");
let diemSinh = prompt("Nhập điểm Sinh Học: ");
let diemTBinh = (Number(diemVatly) + Number(diemHoa) + Number(diemSinh))/3;
let tong = Number(diemVatly) + Number(diemHoa) + Number(diemSinh);
console.log("Điểm trung bình là : "+ diemTBinh);
console.log("Tổng điểm 3 môn là " + tong);


// 2 chuyển đổi độ C sang F
// F= (C*9/5)+32
let giaTriDoC = prompt("Nhap gia tri do C: ");
let giatriDoF = (Number(giaTriDoC)*9/5) + 32;
console.log("Giá trị độ F là : "+ giatriDoF);

// 3 diện tích hình tròn
let bankinh = 12;
let pi = 3.14;
let dientichHT3 = Number(bankinh) * Number(bankinh) * pi;
console.log("Diện tích hình tròn là : "+ dientichHT3);

// 4 diện tích hình vuông
let canhHv = 10;
let dientichHV = Number(canhHv) * Number(canhHv);
console.log("Diện tích hình vuông là : "+ dientichHV);


// Viết các function(thêm, sửa, xóa, và hiển thị) tương tác với HTMl
let myStore = new Store("Cửa hàng của Nam "); // dữ liệu sẽ lấy từ myStore

// Dữ liệu giả
let p1 = new Product(
  1,
  "Bánh mì",
  200,
  "https://img.websosanh.vn/v2/users/review/images/0itbm0521moph.jpg?compress=85"
);
let p2 = new Product(
  2,
  "Bánh cáy",
  100,
  "https://bizweb.dktcdn.net/thumb/grande/100/368/625/articles/keo-nougat.png?v=1634447968447"
);
myStore.addProduct(p1);
myStore.addProduct(p2);
console.log(myStore.listProduct);

showAll();

function add() {
  let idInput = document.getElementById("id").value;
  let nameInput = document.getElementById("name").value;
  let priceInput = document.getElementById("price").value;
  let imgInput = document.getElementById("img").value;
  let newProduct = new Product(idInput, nameInput, priceInput, imgInput);
  myStore.addProduct(newProduct);
  alert("Thêm thành công");
  showAll();
}
function remove(index) {
  let isConfirm = confirm("Bạn chắc chứ?");
  if (isConfirm) {
    myStore.removeProduct(index);
    alert("Xóa thành công");
    showAll();
  }
}

function showAll() {
  let list = myStore.listProduct;
  let str = `
     <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Image</th>
            <th colspan="2">Action</th>
     </tr>
     `;
  for (let i = 0; i < list.length; i++) {
    str += `
        <tr>
            <td>${list[i].id}</td>
            <td>${list[i].name}</td>
            <td>${list[i].price}</td>
            <td><img src="${list[i].img}"alt=""></td>
            <td><button onclick="showEdit(${i})">Sửa</button></td>
            <td><button onclick="remove(${i})">Xóa</button></td>
        </tr>
    `;
  }
  document.getElementById("table-product").innerHTML = str;
}
function showEdit(index) {
  let editProduct = myStore.getOneProduct(index);
  document.getElementById("id").value = editProduct.id;
  document.getElementById("name").value = editProduct.name;
  document.getElementById("price").value = editProduct.price;
  document.getElementById("img").value = editProduct.img;
  document.getElementById(
    "btn-save"
  ).innerHTML = `<button onclick="edit(${index})">Edit</button>`;
}

function edit(index) {
  let idInput = document.getElementById("id").value;
  let nameInput = document.getElementById("name").value;
  let priceInput = document.getElementById("price").value;
  let imgInput = document.getElementById("img").value;
  let editProduct = new Product(idInput, nameInput, priceInput, imgInput);
  myStore.update(index, editProduct);
  showAll();
  resetForm();
}

function resetForm() {
  document.getElementById("id").value = "";
  document.getElementById("name").value = "";
  document.getElementById("price").value = "";
  document.getElementById("img").value = "";
  document.getElementById(
    "btn-save"
  ).innerHTML = `<button onclick="add()">Add</button>`;
}

// Tạo khung (các file => các class => dữ liệu => Test (Dữ liệu giả - console.log))
// Chức năng: Tạo HTML (Sử dụng dữ liệu cứng để giả dụ)
// => xây dựng hàm (Note: Nhớ dữ liệu lấy thông qua đối tượng ~ myStore)
// => Gọi hàm => Kiểm tra lỗi (trong màn hình console)

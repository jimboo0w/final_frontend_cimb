var inputUser = prompt("Masukkan Username Anda");
var inputPass = prompt("Masukkan Password Anda");
// var inputPin  = prompt("Masukkan PIN Anda");
var user = "admin"
var pass = "admin";
// var pin  = 272727;

// if (inputUser == "admin" && inputPass == "admin") {
//   alert("Password benar! Welcome");
// } else {
//   window.location = "./index.html";
// }

(inputUser == "admin" && inputPass === "admin") ? alert("Password benar! Welcome") : window.location = "./index.html";

function showData(item) {
  let listData = document.getElementById("data");
  // bersihkan data
  listData.innerHTML = "";
  // print semua data
  var retrievedObject = localStorage.getItem('saveData');
  // let a = JSON.parse(retrievedObject)
  let x = JSON.parse(retrievedObject)
  if (item != null) {
    item.forEach((a, i) => {
      listData.innerHTML += "<tr>" +
        "<td>" + (i + 1) + "</td>" +
        "<td>" + a.nama + "</td>" +
        "<td>" + a.email + "</td>" +
        "<td>" + a.phone + "</td>" +
        "<td>" + a.account + "</td>" +
        "<td>" + a.address + "</td>" +
        "<td>" + a.done + "</td>" +
        "<td><button class='btn btn-info' onclick='editData(" + i + "," + a.id + ")'>Edit</button></td>" +
        "<td><button class='btn btn-danger' onclick='deleteData(" + i + "," + a.id + ")'>Delete</button></td>" +
        "</tr>";
    });
  } else {
    x.forEach((a, i) => {
      listData.innerHTML += "<tr>" +
        "<td>" + (i + 1) + "</td>" +
        "<td>" + a.nama + "</td>" +
        "<td>" + a.email + "</td>" +
        "<td>" + a.phone + "</td>" +
        "<td>" + a.account + "</td>" +
        "<td>" + a.address + "</td>" +
        "<td>" + a.done + "</td>" +
        "<td><button class='btn btn-info' onclick='editData(" + i + "," + a.id + ")'>Edit</button></td>" +
        "<td><button class='btn btn-danger' onclick='deleteData(" + i + "," + a.id + ")'>Delete</button></td>" +
        "</tr>";
    });

  }

  // for (let i = 0; i < a.length; i++) {
  //   listData.innerHTML += "<tr>" +
  //     "<td>" + (i + 1) + "</td>" +
  //     "<td>" + a[i].nama + "</td>" +
  //     "<td>" + a[i].email + "</td>" +
  //     "<td>" + a[i].phone + "</td>" +
  //     "<td>" + a[i].account + "</td>" +
  //     "<td>" + a[i].address + "</td>" +
  //     "<td><button class='btn btn-info' onclick='edit(" + i + ")'>Edit</button></td>"+
  //     "<td><button class='btn btn-danger' onclick='edit(" + i + ")'>Delete</button></td>"+
  //     "</tr>";
  // }
};
showData();

function editData(item, id) {
  let listData = localStorage.getItem('saveData');
  let x = JSON.parse(listData)

  a = x[item];

  var edit = prompt("Status Done/Undone");

  if (edit) {
    for (var i = 0; i < x.length; i++) {
      if (x[i].id == id) {  //look for match with name
        x[i].done = edit;
        break;  //exit loop since you found the person
      }
    }
    localStorage.setItem("saveData", JSON.stringify(x));
    showData();
  }
  else {
    showData();
  }
}

function deleteData(item, id) {
  let listData = localStorage.getItem('saveData');
  let x = JSON.parse(listData)
  a = x[item];
  var del = prompt("Delete? Yes or No");
  var index = x.map(x => {
    return x.id;
  }).indexOf(id);

  console.log(index)
  if (del == 'yes') {
    for (var i = 0; i < x.length; i++) {
      if (x[i].id == id) {  //look for match with name
        // console.log(x[i].id, 'ajaja');
        // console.log(id, 'ini id');

        x.splice(index, 1)
        localStorage.setItem("saveData", JSON.stringify(x));
        showData();
        break;  //exit loop since you found the person
      }
    }
  }
  else {
    showData();
  }
}

function filterList(listSearch) {
  let searchName = document.getElementById("filterSearch").value;
  let tempVar = listSearch.nama;

  if (tempVar.includes(searchName)) {
    return tempVar;
  }
}

function filterName() {
  var retrievedObject = localStorage.getItem('saveData');
  let x = JSON.parse(retrievedObject);
  let search = document.getElementById("filterSearch").value;

  list = x.filter(filterList);
  if (search !== null) {
    list = x.filter(filterList);
    if (list.length == 0) {
      showData(list);
    } else {
      showData(list);
    }
  }
  else {
    document.getElementById("listData").innerHTML = "";
    showData();
  }
}
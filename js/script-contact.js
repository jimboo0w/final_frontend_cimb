var retrievedObject = localStorage.getItem('saveData');
let data = localStorage.getItem('saveData') || '[]';
data = JSON.parse(data);

function info() {
  alert("Save Success");
  let getNama = document.getElementById('name').value;
  let getEmail = document.getElementById('email').value;
  let getPhone = document.getElementById('phone').value;
  let getAccountType = document.getElementById('accountType').value;
  let getAddress = document.getElementById('address').value;
  let saveData = {
    id: Date.now(),
    nama: getNama,
    email: getEmail,
    phone: getPhone,
    account: getAccountType,
    address: getAddress,
    done: 'Undone'
  };

  // Put the object into storage
  data.push(saveData);
  localStorage.setItem('saveData', JSON.stringify(data));

  // Retrieve the object from storage
  var retrievedObject = localStorage.getItem('saveData');

}
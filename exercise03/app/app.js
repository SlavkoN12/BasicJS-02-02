let fName = document.getElementById('fname');
let lName = document.getElementById('lname');
let phoneNum = document.getElementById('phone');
let SaveBtn = document.getElementById('saveBtn');
let tableBody = document.getElementById('tbody')

tableBody
function Contact(firstName, lastName, phoneNumber) {
    this.firstN = firstName;
    this.lastN = lastName;
    this.number = phoneNumber;
}

let newContacts = [];

function displayContacts() {
    tableBody.innerHTML +=
        `<tr>
    <td>${fName.value}</td>
    <td>${lName.value}</td>
    <td>${phoneNum.value}</td>
    </tr>`
}

function addNewContact() {
    let newContact = new Contact(`${fName.value}`, `${lName.value}`, `${phoneNum.value}`);
    newContacts.push(newContact);
}

SaveBtn.addEventListener('click', function (e) {
    e.preventDefault();
    displayContacts();
    addNewContact();
    console.log(newContacts);
    fName.value = "";
    lName.value = "";
    phoneNum.value = "";
})



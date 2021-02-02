let fName = document.getElementById('fname');
let lName = document.getElementById('lname');
let phoneNum = document.getElementById('phone');
let SaveBtn = document.getElementById('saveBtn');
let tableBody = document.getElementById('tbody')


function Contact(firstName, lastName, phoneNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
}

let newContact = new Contact(fName, lName, phoneNum);
console.log(newContact)
let newContacts = [];

function displayContacts() {
    tableBody.innerHTML +=
    `<tr>
    <td>${newContact.firstName.value}</td>
    <td>${newContact.lastName.value}</td>
    <td>${newContact.phoneNumber.value}</td>
    </tr>`
}




function addNewContact() {
    newContacts.push(newContact);
}


SaveBtn.addEventListener('click', function (e) {
    e.preventDefault();
    displayContacts();
    addNewContact();
    console.log(newContacts);
})

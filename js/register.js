// object literal for the pet salon info
const salon ={
    name: "The Fashion Pet",
    phone:"619.587.5566",
    address:{
    street:"123 Center Drive",
    number: "333-7"
    },
    counter:function(){
    alert("A pet was registered");
    },
    pets:[]
}

//object destructuring
let{name,phone,address:{street,number}} = salon;

document.getElementById('footer-info').innerHTML=`
    <p class="text-center"> ${name}, ${phone}, ${street} ${number}</p>
`;

//object constructor
var c=0; // declaration and initialization of the counter
class Pet{
    constructor(name,age,breed,gender,service,ownerName,contactPhone) {
        this.name=name;
        this.age=age;
        this.breed=breed;
        this.gender=gender;
        this.service=service;
        this.ownerName=ownerName;
        this.contactPhone=contactPhone;
        this.id='pet'+c; // assigns the id to the pet
        c+=1; // updating (increasing the counter)
    }
}

//create 2 objects
const Scooby = new Pet("Scooby",60,"Dane","Male","Full Service","Shaggy","760.665.2345");
salon.pets.push(Scooby);
displayTable(Scooby);

const Doggie = new Pet("Doggie",5,"Unknown","Male","Full Service","Trevor","619.586.8855");
salon.pets.push(Doggie);
displayTable(Doggie);

// get the info from the HTML form

let txtName = document.getElementById("petName");
let txtAge = document.getElementById("petAge");
let txtBreed = document.getElementById("petBreed");
let txtGender = document.getElementById("petGender");
let txtService = document.getElementById("petService");
let txtOwner = document.getElementById("ownerName");
let txtContactPhone = document.getElementById("contactPhone");


// register function

function register() {
    let thePet = new Pet(txtName.value, txtAge.value, txtBreed.value, txtGender.value, txtService.value, txtOwner.value, txtContactPhone.value);
    console.log("The pet was registered");
    console.log(thePet);
    salon.pets.push(thePet);
    displayTable(thePet);
    clearInputs();
    document.getElementById("pet-number").innerHTML =`<h2>Pets Registered: ${salon.pets.length}</h2>`;
}

function clearInputs(){
    txtName.value="";
    txtAge.value="";
    txtBreed.value="";
    txtGender.value="";
    txtService.value="";
    txtOwner.value="";
    txtContactPhone.value="";
    txtContactPhone.value="";

}

// display function

function display(aPet) {
    listBody=document.getElementById("petList");
    let item=`<li> ${aPet.name} ${aPet.age} ${aPet.breed} ${aPet.gender} ${aPet.service}</li>`;
    listBody.innerHTML+=item;
    //salon.counter();
}

//display in a Table

function displayTable(aPet){
    var tableBody=document.getElementById("rowPet");
    var row = `
        <tr id="${aPet.id}">
            <td> ${aPet.name} </td>
            <td> ${aPet.age} </td>
            <td> ${aPet.gender} </td>
            <td> ${aPet.breed} </td>
            <td> ${aPet.service} </td>
            <td> ${aPet.ownerName} </td>
            <td> ${aPet.contactPhone} </td>
            <td> <button onclick='deletePet("${aPet.id}")'> Delete </button> </td>
        
        </tr>`;
    tableBody.innerHTML+=row;

}

//delete a pet
function deletePet(petId) {
        var tr =document.getElementById(petId);
    var indexDelete;
    // search process
    for (var i=0;i<salon.pets.length;i++) {
        var selectedPet=salon.pets[i];
        if (selectedPet.id==petId) {
            indexDelete=i;
        }
    }
    // delete the pet from the array
    console.log(salon.pets[indexDelete]);
    salon.pets.splice(indexDelete,1);
    // delete the pet from the HTML
    console.log(tr);
    tr.remove();
    console.log(salon.pets);
    document.getElementById("pet-number").innerHTML =`<h2>Pets Registered: ${salon.pets.length}</h2>`;
}

// search a pet
function searchPet() {
    console.log("Search function executed");
    var ss = document.getElementById('petSearch').value;
    var searchString = ss.toLowerCase();

    for (var i=0; i<salon.pets.length;i++) {
        var theFoundPet = salon.pets[i];
    if (theFoundPet.name.toLowerCase() == searchString) {
            document.getElementById('pet'+i).setAttribute('class','found');
        }  
    }

    console.log(searchString);
    document.getElementById('petSearch').value="";
}

//updating the count on HTML
document.getElementById("pet-number").innerHTML =`<h2>Pets Registered: ${c}</h2>`;
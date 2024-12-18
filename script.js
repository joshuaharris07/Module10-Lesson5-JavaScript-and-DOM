let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];


for (const product of products) {
    console.log(`Product: ${product.name}\nPrice: $${product.price}\nDescription: ${product.description}`)
} // Need to get this to display to the webpage, not the console.

let { name: product1, price: price1, description: description1 } = products[0];
let { name: product2, price: price2, description: description2 } = products[1];
let { name: product3, price: price3, description: description3 } = products[2];


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("productList").innerHTML = `<strong>List of Products:</strong><br>
    <strong>Product 1:</strong> ${product1}, <strong>Price:</strong> $${price1}, <strong>Description:</strong> ${description1}<br>
    <strong>Product 2:</strong> ${product2}, <strong>Price:</strong> $${price2}, <strong>Description:</strong> ${description2}<br>
    <strong>Product 3:</strong> ${product3}, <strong>Price:</strong> $${price3}, <strong>Description:</strong> ${description3}`
});

//Task 2
function User(name, email, message) {
    this.name = name;
    this.email = email;
    this.message = message
}

let users = [];

document.getElementById("userForm").addEventListener('submit', function(event) {
    event.preventDefault();

    let userName = document.getElementById("userName").value;
    let userEmail = document.getElementById("userEmail").value;
    let userMessage = document.getElementById("userMessage").value;

    let newUser = new User(userName, userEmail, userMessage);
    users.push(newUser);
    console.log(users); //This line is not needed but useful for verifying that the user was added in the console's log.

    document.getElementById("userForm").reset();
});

function changeColor() {
    this.classList.add("bg-danger")
}

function enlargeFont() {
    this.classList.add("fs-1")
}

function shrinkFont() {
    this.classList.remove("fs-1")
}

function centerText() {
    this.classList.add("text-center")
}
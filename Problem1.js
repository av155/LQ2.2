let userName = prompt("Enter your username:");
let password = prompt("Enter your password:");

//Simulate stored password (replace with secure method in a real application)
let storedPassword = "password123";


if (password === storedPassword) {
  alert(`Welcome ${userName}!`);
} else {
  alert("Maybe Username or Password is Invalid or Does not Match");
}

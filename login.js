const loginBox = document.getElementById("login-box");
const registerBox = document.getElementById("register-box");
const showRegister = document.getElementById("showRegister");
const showLogin = document.getElementById("showLogin");

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");


let users = [
  {name:"Test User", email:"test@innit.com", password:"123456"}
];

showRegister.addEventListener("click", () => {
  loginBox.classList.add("hidden");
  registerBox.classList.remove("hidden");
});

showLogin.addEventListener("click", () => {
  registerBox.classList.add("hidden");
  loginBox.classList.remove("hidden");
});


registerForm.addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("regName").value.trim();
  const email = document.getElementById("regEmail").value.trim();
  const password = document.getElementById("regPassword").value.trim();

  if(users.some(u => u.email === email)){
    alert("Email already registered.");
    return;
  }

  users.push({name,email,password});
  alert("Registration successful! Please login.");
  registerForm.reset();
  registerBox.classList.add("hidden");
  loginBox.classList.remove("hidden");
});


loginForm.addEventListener("submit", e => {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  const user = users.find(u => u.email === email && u.password === password);
  if(user){
    window.location.href = "main.html";
  } else {
    alert("Invalid email or password.");
  }
});

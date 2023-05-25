const submitBtn = document.querySelector("#submit");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const rawPasswordDisplay = document.querySelector("#raw");
const hashedPaswordDisplay = document.querySelector("#hashed");

submitBtn.addEventListener("click", (e) => {
  if (username.value === "" || password.value === "")
    return alert("Please enter username and password");

  const rawPassword = password.value;
  const hashedPassword = dcodeIO.bcrypt.hashSync(rawPassword, 10);
  rawPasswordDisplay.innerText = rawPassword;
  hashedPaswordDisplay.innerText = hashedPassword;
});

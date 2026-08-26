const button = document.getElementsByClassName("cssbuttons-io-button")[0];
const status = document.getElementById("status");

button.addEventListener("click", async () => {
    const response = await fetch("http://localhost:4000/api/status");
    const data = await response.json();

    status.textContent = data.message;
});
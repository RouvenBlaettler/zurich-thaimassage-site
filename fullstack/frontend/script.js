const button = document.getElementsByClassName("cssbuttons-io-button")[0];
const status = document.getElementById("status");
const form = document.getElementById("bookingForm");

button.addEventListener("click", async () => {
    const response = await fetch("http://localhost:4000/api/status");
    const data = await response.json();

    status.textContent = data.message;
});


form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const response = await fetch("http://localhost:4000/api/bookings", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            firstname: document.getElementById("fname").value,
            lastname: document.getElementById("lname").value,
            email: document.getElementById("email").value,
            bookingDate: document.getElementById("bookingDate").value,
            bookingTime: document.getElementById("bookingTime").value,
            massagetype: document.getElementById("massagetype").value
        })
    });

    const data = await response.json();

    status.textContent = data.message;

    form.reset();


    console.log(data);
});
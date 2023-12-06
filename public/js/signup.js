const loginForm = document.getElementById("signup-form");

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const usernameElem = document.getElementById("username");
    const passwordElem = document.getElementById("password");

    const name = usernameElem.value;
    const pwd = passwordElem.value;

    fetch("http://localhost:5000/auth/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: name,
            password: pwd,
        }),
    });
});

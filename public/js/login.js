const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const usernameElem = document.getElementById("username");
    const passwordElem = document.getElementById("password");

    const name = usernameElem.value;
    const pwd = passwordElem.value;

    fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: name,
            password: pwd,
        }),
    }).then((res) => {
        if (res.status === 200) {
            window.location.href = "http://localhost:5000/upload";
        }
    });
});

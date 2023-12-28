const token = sessionStorage.getItem("auth_token");

if (token) {
    fetch("http://13.201.1.195:5000/auth/jwtverify", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
        .then((res) => res.json())
        .then((res) => {
            if (res.success) {
                window.location.href = `http://13.201.1.195:5000`;
            }
        });
}

const loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const usernameElem = document.getElementById("username");
    const passwordElem = document.getElementById("password");

    const name = usernameElem.value;
    const pwd = passwordElem.value;

    fetch("http://13.201.1.195:5000/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: name,
            password: pwd,
        }),
    })
        .then((res) => res.json())
        .then((res) => {
            console.log(res);

            if (res.auth_token)
                sessionStorage.setItem("auth_token", res.auth_token);

            if (res.success) {
                window.location.href = `http://13.201.1.195:5000`;
            }
        });
});

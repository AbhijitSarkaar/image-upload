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

const loginForm = document.getElementById("signup-form");

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const usernameElem = document.getElementById("username");
    const passwordElem = document.getElementById("password");

    const name = usernameElem.value;
    const pwd = passwordElem.value;

    fetch("http://13.201.1.195:5000/auth/signup", {
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
            if (res.success) {
                sessionStorage.setItem("auth_token", res.auth_token);
                window.location.href = `http://13.201.1.195:5000`;
            }
        });
});

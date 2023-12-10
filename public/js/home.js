const token = sessionStorage.getItem("auth_token");

fetch(`http://localhost:5000/user/profile`, {
    headers: {
        Authorization: `Bearer ${token}`,
    },
})
    .then((res) => res.json())
    .then((res) => {
        if (res.success) {
            const body = document.body;
            const p = document.createElement("p");
            p.innerText = `Welcome ${res.username}`;
            body.appendChild(p);
        }
    });

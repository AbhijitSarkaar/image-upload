const token = sessionStorage.getItem("auth_token");

if (token) {
    const form = document.getElementById("form");
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name");
        const files = document.getElementById("files");

        const formData = new FormData();
        formData.append("name", name.value);
        for (let i = 0; i < files.files.length; ++i) {
            formData.append("files", files.files[i]);
        }

        fetch("http://localhost:5000/upload", {
            method: "POST",
            body: formData,
        }).then((res) => {
            console.log(res);
        });
    });
} else window.location.href = "http://localhost:5000/user/login";

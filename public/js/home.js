const token = sessionStorage.getItem("auth_token");

if (!token) {
    window.location.href = "http://13.201.1.195:5000/auth/login";
}

const upload = () => {
    window.location.href = "http://13.201.1.195:5000/upload";
};

const logout = () => {
    sessionStorage.removeItem("auth_token");
    window.location.href = "http://13.201.1.195:5000/auth/login";
};

const homepage = (res) => {
    const body = document.body;
    const p = document.createElement("p");
    p.innerText = `Welcome ${res.username}`;

    const uploadButton = document.createElement("button");
    uploadButton.innerText = "upload file";
    uploadButton.addEventListener("click", upload);

    const logoutButton = document.createElement("button");
    logoutButton.innerText = "logout";
    logoutButton.addEventListener("click", logout);

    body.appendChild(p);
    body.appendChild(uploadButton);
    body.appendChild(logoutButton);
};

const image_upload_service = "http://13.201.1.195:5000";

fetch(`${image_upload_service}/user/profile`, {
    headers: {
        Authorization: `Bearer ${token}`,
    },
})
    .then((res) => res.json())
    .then((res) => {
        if (res.success) {
            homepage(res);
        }
    });

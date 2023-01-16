async function login(form) {
    const data = {
        "username" : form.elements.username.value,
        "password" : form.elements.password.value
    }
    
    // const res = await fetch(window.location.href + "server/login.php", {
        const res = await fetch("http://localhost/advent/" + "server/login.php", {
            method: 'POST', 
            body: JSON.stringify(data) 
        })

    const response = await res.json();

    if (response.code === 200) {
        localStorage.setItem("token", response.jwt)
    }
    return response;
}


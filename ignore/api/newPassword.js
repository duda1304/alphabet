async function newPassword(form) {
    const data = {
        "password" : form.elements.password.value,
        "token" : localStorage.getItem("token")
    }
    
    // const res = await fetch(window.location.href + "server/new_password.php", {
        const res = await fetch("http://localhost/advent/" + "server/new_password.php", {
            method: 'POST', 
            body: JSON.stringify(data) 
        })

    const response = await res.json();
   
    return response;
}


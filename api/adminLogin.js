async function login(form) {
    const data = {
        "username" : form.elements.username.value,
        "password" : form.elements.password.value
    }
    
    // const res = await fetch(window.location.href.slice(0,-6) + "server/admin_login.php", {
        const res = await fetch("http://localhost/advent/" + "server/admin_login.php", {   
            method: 'POST', 
            body: JSON.stringify(data) 
        })

    const response = await res.json();
  
    return response;
}


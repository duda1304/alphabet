async function createAccount(form) {
    const data = {
        "username" : form.elements.username.value,
        "email" : form.elements.email.value,
        "password" : form.elements.password.value,
        "code" : form.elements.code.value
    }
    
    // const res = await fetch(window.location.href + "server/create_account.php", {
        const res = await fetch("http://localhost/advent/" + "server/create_account.php", {
            method: 'POST', 
            body: JSON.stringify(data) 
        })

    const response = await res.json();
   
    return response;
}


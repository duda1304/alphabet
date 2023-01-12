async function sendEmail(email) {
    const data = {
        "email" : email
    }
    
    // const res = await fetch(window.location.href + "server/sendEmail.php", {
        const res = await fetch("http://localhost/advent/" + "server/sendEmail.php", {
            method: 'POST', 
            body: JSON.stringify(data) 
        })

    const response = await res.json();

    return response;
}


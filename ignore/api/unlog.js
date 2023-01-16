async function unlog() {
    const data = {
        "token" : localStorage.getItem("token")
    }
    
    // const res = await fetch(window.location.href + "server/unlog.php", {
        const res = await fetch("http://localhost/advent/" + "server/unlog.php", {
            method: 'POST', 
            body: JSON.stringify(data) 
        })

    const response = await res.json();

    return response;
}


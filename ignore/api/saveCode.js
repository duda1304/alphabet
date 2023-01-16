async function saveCode(code) {
    const data = {
        "code" : code
    }
    
    // const res = await fetch(window.location.href.slice(0,-6) + "server/save_code.php", {
        const res = await fetch("http://localhost/advent/" + "server/save_code.php", {
            method: 'POST', 
            body: JSON.stringify(data) 
        })

    const response = await res.json();
   
    return response;
}


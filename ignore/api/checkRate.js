async function checkRate() {
    let data;

    if (localStorage.getItem("token")) {
        data = {
            "token" : localStorage.getItem("token")
        }
    } else {
        data = {
            "token" : ""
        }
    }

    // const res = await fetch(window.location.href + "server/check_rate.php", {
        const res = await fetch("http://localhost/advent/" + "server/check_rate.php", {
            method: 'POST', 
            body: JSON.stringify(data) 
        })

    const response = await res.json();

    return response;
}


async function updateRate(challengeNo, correctCount, questionsCount) {
    let token;

    if (localStorage.getItem("token")) {
        token = localStorage.getItem("token")
    } else {
       token = ""
    }

    const data = {
        "token" : token,
        "challengeNo" : challengeNo,
        "correct" : correctCount,
        "count" : questionsCount
    }

    // const res = await fetch(window.location.href + "server/update_rate.php", {
        const res = await fetch("http://localhost/advent/" + "server/update_rate.php", {
            method: 'POST', 
            body: JSON.stringify(data) 
        })

    const response = await res.json();

    return response;
}



function identityget(){
    const username = document.getElementById("user-name").value;
    const birth = document.getElementById("user-date").value;
    const message = document.getElementById("messages").value;

    
    if (document.getElementById('Male').checked) {
        gender = document.getElementById('Male').value;
    } else if (document.getElementById('female').checked){
        gender = document.getElementById('female').value;
    }

    if(username === "" || birth === "" || gender === "" || message === ""){
        console.log("Input is nihil");
        alert("Please fill the necessary information");
        return
    }
    else{
        setindetity(username, birth, gender, message);
    }
    
}

function setindetity(username, birth, gender, message){
    const setuser = document.getElementById("hiuser")
    const setname = document.getElementById("set-name");
    const setbirth = document.getElementById("set-birth");
    const setgender = document.getElementById("set-gender");
    const setmessage = document.getElementById("set-message");

    setname.textContent = username;
    setuser.textContent = username;
    setbirth.textContent = birth;
    setgender.textContent = gender;
    setmessage.textContent = message;

    running = setInterval(updator, 1000);
}

function updator(){
    const localtime = new Date();
    const flextime = new Intl.DateTimeFormat("en-GB", {
        timeZone: `${"Asia"}/${"Jakarta"}`,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
        }).format(localtime);

    const settimedate = document.getElementById("currenttime");
    settimedate.textContent = flextime;
}

buttonX = document.getElementById("buttonX");

buttonX.addEventListener("click", identityget)
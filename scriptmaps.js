const btn = document.querySelector(".rate-button");

btn.addEventListener("click",()=>{
    let selection = document.querySelector("#rate-selection").value;
    event.preventDefault();
    console.log("clickk");

    if(selection == "Ul. Prusa (Sulechów)") {
        window.location.href = "https://maps.app.goo.gl/YfCKk4rbV3AuJm6o9";
    }
    else if(selection == "Ul. Wiśniowa (Sulechów)") {
        window.location.href = "https://maps.app.goo.gl/7JjKsYQRNmwq7MBg7";
    }
    else if(selection == "Os. Żaków (Świebodzin)") {
        window.location.href = "https://maps.app.goo.gl/s86Bf3AhdrHyvA9s6";
    }
    else {
        console.log("błąd wczytania");
    }
});
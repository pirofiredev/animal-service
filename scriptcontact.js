const dataprusa = document.querySelector("#contact-prusa-data");
const datawisnowa = document.querySelector("#contact-wisniowa-data");
const datazakow = document.querySelector("#contact-zakow-data");

document.getElementById("contact-address-selection").addEventListener("click",()=>{

    selection = document.getElementById("contact-address-selection").value;
    
        if(selection == "Ul. Prusa (Sulechów)") {
            dataprusa.style.display = "flex";
            datawisnowa.style.display = "none";
            datazakow.style.display = "none";
        }
        else if(selection == "Ul. Wiśniowa (Sulechów)") {
            dataprusa.style.display = "none";
            datawisnowa.style.display = "flex";
            datazakow.style.display = "none";
        }
        else if(selection == "Os. Żaków (Świebodzin)") {
            dataprusa.style.display = "none";
            datawisnowa.style.display = "none";
            datazakow.style.display = "flex";
        }

});



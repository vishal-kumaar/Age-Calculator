const error = document.getElementsByClassName("error")[0];
const dob = document.getElementById("dob");

dob.addEventListener("change", () =>{
    displayAge();
})

function getAge(){
    return dob.value;
}


function calcAge(){
    const date = new Date();
    const dateOfBirth = new Date(getAge());
    let dayOfAge = Math.floor(date.getTime() - dateOfBirth.getTime())/(1000 * 3600 * 24);
    let years = 0;
    let months = 0;

    if (dayOfAge >= 365){
        years = Math.floor(dayOfAge / 365);
    }
    else if (dayOfAge >= 30){
        months = Math.floor((dayOfAge - years*365)/30);
    }

    let days = Math.floor(dayOfAge - years * 365 - months * 30);
    
    return [years, months, days];
}

function displayAge(){
    let age = calcAge();
    
    for (let i of age){
        if (i < 0){
            error.style.display = 'block';
        }
        else{
            error.style.display = 'none';
        }
    }

    document.getElementById("years").innerText = age[0];
    document.getElementById("months").innerText = age[1];
    document.getElementById("days").innerText = age[2];
}


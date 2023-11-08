let form = document.querySelector("form"); // get values 
let main = document.querySelector(".main"); // display data

form.addEventListener("submit", (event) => {
    let name = event.target.inputName.value;
    let dob = event.target.inputDOB.value;
    let edu = event.target.inputEdu.value;
    let hei = event.target.inputHeight.value;
    let weight = event.target.inputWeight.value;
    let add = event.target.inputAdd.value;

    let userdata = JSON.parse(localStorage.getItem("userdetails")) ?? []; // convert the objects into strings and send it to the save place
    userdata.push({
        'name': name,
        'dob' : dob,
        'edu' : edu,
        'hei' : hei,
        'wei' : weight,
        'add' : add
    })
    localStorage.setItem("userdetails", JSON.stringify(userdata))
    event.target.reset(); // clear input fields after submiting the one data.......
    display(); // called before prevent default......
    event.preventDefault(); // stop reloading all events.....
})

let display = () => {
    let userdata = JSON.parse(localStorage.getItem("userdetails")) ?? [];
    let final = '';

    userdata.forEach((element, i) => {
        final += `<div class="">${element.name}</div>
        <div class="">${element.name}</div>
        <div class="">${element.name}</div>
        <div class="">${element.name}</div>
        <div class="">${element.name}</div>
        <div class="">${element.name}</div>`
    });
    main.innerHTML = final;
}

// localStorage.clear(); 

display(); //used bcz we dont want to delete data after reload...
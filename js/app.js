const submit = document.querySelector("form");
console.log(submit);

submit.addEventListener("submit", (e) => {
    e.preventDefault();

    const firstname = document.querySelector("#firstname");
    const lastname = document.querySelector("#lastname");
    const email = document.querySelector("#email");
    const hiredate = document.querySelector("#hire_date");
    const date  = new FormData(submit);
    const profilephoto = document.querySelector("#profilephoto");

    const tr = document.createElement("tr");

    const thphoto = document.createElement("th");
    const photo = document.createElement("img");
    console.log(profilephoto.files[0]);
    photo.setAttribute("src", profilephoto.files[0] ? `./images/${profilephoto.files[0].name}`: "");
    //thphoto.innerText = profilephoto.files[0] ? "true": "false";
    thphoto.appendChild(photo);

    const thfirstname = document.createElement("th");
    thfirstname.innerText = firstname.value;

    const thlastname = document.createElement("th");
    thlastname.innerText = lastname.value;

    const themail = document.createElement("th");
    themail.innerText = email.value;

    const thdate = document.createElement("th");

    const thbtn = document.createElement("th");
    const deletebtn = document.createElement("button");
    deletebtn.innerText = "Delete"
    thbtn.appendChild(deletebtn);

    tr.appendChild(thphoto);
    tr.appendChild(thfirstname);
    tr.appendChild(thlastname);
    tr.appendChild(themail);
    tr.appendChild(thdate);
    tr.appendChild(thbtn);
    console.log(tr);
    
    document.getElementById('employeeList').appendChild(tr);
    
});
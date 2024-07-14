//email pattern
//confirmation
const submit = document.querySelector("form");

submit.addEventListener("submit", (e) => {
    e.preventDefault();

    const forminfo = document.querySelector("form");
    const firstname = document.querySelector("#firstname");
    const lastname = document.querySelector("#lastname");
    const email = document.querySelector("#email");
    const hiredate = document.querySelector("#hire_date");
    const profilephoto = document.querySelector("#profilephoto");

    const tr = document.createElement("tr");

    const thphoto = document.createElement("th");
    const photo = document.createElement("img");
    photo.setAttribute("src", profilephoto.files[0] ? `./images/${profilephoto.files[0].name}`: "");
    thphoto.appendChild(photo);

    const thfirstname = document.createElement("th");
    thfirstname.innerText = firstname.value;

    const thlastname = document.createElement("th");
    thlastname.innerText = lastname.value;

    const themail = document.createElement("th");
    themail.innerText = email.value;

    const thdate = document.createElement("th");
    thdate.innerText = hiredate.value;

    const thbtn = document.createElement("th");
    const deletebtn = document.createElement("button");
    deletebtn.innerText = "Delete"
    thbtn.appendChild(deletebtn);

    deletebtn.addEventListener('click', () => {
        const deletetr = deletebtn.closest("tr");
        deletetr.remove();
    });

    thbtn.appendChild(deletebtn);

    tr.appendChild(thphoto);
    tr.appendChild(thfirstname);
    tr.appendChild(thlastname);
    tr.appendChild(themail);
    tr.appendChild(thdate);
    tr.appendChild(thbtn);
    
    document.getElementById('employeeList').appendChild(tr);

    forminfo.reset();
    
});
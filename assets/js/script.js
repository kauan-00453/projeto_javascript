const btnLogin = document.querySelector("#btn-login");
const btnregister = document.querySelector("#btn-register");
const modalLogin = document.querySelector("#modal-login")
const modalRegister = document.querySelector("#modal-register")
const btnCalcelLogin = document.querySelector("#btn-cancel-login")
const btnCalcelRegister = document.querySelector("#btn-cancel-register")

btnLogin.addEventListener("click", (e) => {
modalLogin.classList.remove("hide-modal");
modalLogin.classList.add("show-modal");
})

btnregister.addEventListener("click", (e) => {
    modalRegister.classList.remove("hide-modal");
    modalRegister.classList.add("show-modal");
})

btnCalcelLogin.addEventListener("click", (e) => {
    modalLogin.classList.add("hide-modal");
    modalLogin.classList.remove("show-modal");
}) 

btnCalcelRegister.addEventListener("click", (e) => {
    modalRegister.classList.add("hide-modal");
    modalRegister.classList.remove("show-modal");
})




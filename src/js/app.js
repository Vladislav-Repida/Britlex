const headerNav = document.querySelector(".header__wraper"),
        burBtn = document.querySelector(".bur-menu");

burBtn.addEventListener("click", ()=>{
    headerNav.classList.toggle("active");
    burBtn.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
});
document.addEventListener("click", (e)=>{
    if(!e.target.closest(".bur-menu") && !e.target.closest(".header__wraper")){
        headerNav.classList.remove("active");
        burBtn.classList.remove("active");
        document.body.classList.remove("no-scroll");
    }
});
AOS.init();
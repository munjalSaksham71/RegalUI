const snackbar = document.getElementById("snackbar");
const modal = document.getElementById("modal");
const show_modal = document.getElementById("show_modal");
const close_modal = document.getElementById("close_modal")

const showSnackbar = () => {
    snackbar.className = "show";
    setTimeout(() => { snackbar.className = snackbar.className.replace("show", ""); }, 3000);
}

show_modal.addEventListener("click", () => {
    modal.style.visibility = "visible"
})

close_modal.addEventListener("click", () => {
    modal.style.visibility = "hidden"
})


const snackbar = document.getElementById("snackbar");
const modal = document.getElementById("modal");

const showSnackbar = () => {
    snackbar.className = "show";
    setTimeout(() => { snackbar.className = snackbar.className.replace("show", ""); }, 3000);
}

const openModal = () => {
    modal.style.visibility = "visible"
}

const closemodel = () => {
    modal.style.visibility = "hidden"
}

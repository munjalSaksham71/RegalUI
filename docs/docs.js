const snackbar = document.getElementById("snackbar");

const showSnackbar = () => {
    snackbar.className = "show";
    setTimeout(() => { snackbar.className = snackbar.className.replace("show", ""); }, 3000);
}
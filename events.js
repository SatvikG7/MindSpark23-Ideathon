const CLASSES = {
    "regiterLink": "registerBtn"
}
const registerBtn = document.querySelector("." + CLASSES.regiterLink);
console.log({ registerBtn })
registerBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const url = this.href;
    setTimeout(function () {
        open(url, "_blank");

    }, 1000)
})
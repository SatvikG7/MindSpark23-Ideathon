const CLASSES = {
    "registerLink": "registerBtn"
}
REGISTER_URL = `https://unstop.com/p/ideathon-mindspark23-coep-technological-university-pune-maharashtra-782518`;
const registerBtn = document.querySelector("." + CLASSES.registerLink);
console.log({ registerBtn })
registerBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const url = REGISTER_URL;
    setTimeout(function () {
        open(url, "_blank");

    }, 1000)
})
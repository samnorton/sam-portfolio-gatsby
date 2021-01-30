import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

export const onInitialClientRender = () => {
    setTimeout(function() {
        document.querySelector("body").classList.add("loaded");
    }, 400)
}
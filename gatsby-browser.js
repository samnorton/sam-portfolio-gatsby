export const onInitialClientRender = () => {
    setTimeout(function() {
        document.querySelector("body").classList.add("loaded");
        document.querySelector("h1").style = "color: #222222";
    }, 400)
}
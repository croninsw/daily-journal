import renderByMood from "./renderByMood.mjs"

function checkMood() {
    const mood = event.target.value
    if (event.target.type === "radio") {
        document.querySelector("#container").innerHTML = ""
        if (event.target.value === mood) {
            renderByMood(mood)
        } else if (event.target.value === allMoods) {
            renderByMood()
        }
    }
}

export default checkMood
function launchRocket() {
    const rocket = document.getElementById("rocket");

    rocket.style.opacity = "1";

    rocket.classList.remove("launch");
    void rocket.offsetWidth; // reset animation

    rocket.classList.add("launch");
}

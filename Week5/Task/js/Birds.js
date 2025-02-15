class Bird {
    constructor(x, y) {
        // Position and size information
        this.x = x;
        this.y = y;

        // Color information
        this.image = document.createElement("img");
        this.image.src = "images/Bird.png";
        this.renderBird();
    }

    // Render method
    renderBird() {
        this.image.classList.add("Bird");
        this.image.style.width = "50px"; // Set the desired width
        this.image.style.height = "50px"; // Set the desired height
        this.image.style.left = (this.x - 50) + "px";
        this.image.style.top = this.y + "px"; // Adjust top to align bottom of image with top of wire
        // Add to the DOM
        document.querySelector(".wire").appendChild(this.image);
    }
}
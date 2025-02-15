class Bird {
    constructor(x, y,) {
        // We write instructions to set up a Flower here
        // Position and size information
        this.x = x;
        this.y = 140;

        // Color information

        this.image = document.createElement("img");
        this.image.src = "images/Bird.png";
        this.renderBird();
    }


    //render method
    renderBird() {
        this.image.classList.add("Bird");
        this.image.style.left = this.x + "px";
        this.image.style.top = this.y + "px";
        //add to the DOM
        document.querySelector(".wire").appendChild(this.image);
    }

}
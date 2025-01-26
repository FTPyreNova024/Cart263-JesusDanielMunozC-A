window.onload = setup
function setup() {
    // console.log(document.querySelector("#one"));

    // console.log(document.getElementsByTagName("div"));
    // console.log(document.getElementsByTagName("div").length);
    // console.log(document.getElementsByTagName("div")[0]);
    // console.log(document.querySelector("div"));
    // console.log(document.querySelectorAll("div"));

    // console.log(document.getElementsByClassName("square_shape")[0]);
    // console.log(document.querySelectorAll(".square_shape"));
    // console.log("running setup");

    // console.log(document.getElementById("two").innerHTML);
    // console.log(document.getElementById("two").textContent);
    document.querySelector("#two").children[0].textContent = "<h2> this is now a header </h2>";
}
setup_A();
/** THEME: CALM  */
function setup_A() {
  console.log("in a");
  /**************************************************** */
  //get the buttons
  activateButtons_A(`#TEAM_A`, "ani_canvA");

  /**************************************************** */
  /* NO NEED TO MODIFY THIS FUNCTION :) */
  /*** helper function to activate buttons */
  /**************************************************** */
  function activateButtons_A(team, teamCanvas) {
    let teamButtons = document.querySelectorAll(`${team} .team-nav p`);
    //2:
    console.log(teamButtons);
    for (let button of teamButtons) {
      button.addEventListener("click", buttonCallBack);

      function buttonCallBack(e) {
        switch (this.textContent) {
          case "1": {
            console.log("A");
            //reset the canvases
            resetCanvases(`${team} .aniCanvas`);
            //reset buttons
            resetButtons(teamButtons, this);
            //activate canvas A
            document.getElementById(`${teamCanvas}_A`).style.display = "block";
            //run first
            aniA(document.getElementById(`${teamCanvas}_A`));

            break;
          }
          case "2": {
            console.log("B");
            resetCanvases(`${team} .aniCanvas`);
            //reset buttons
            resetButtons(teamButtons, this);
            //activate canvas B
            document.getElementById(`${teamCanvas}_B`).style.display = "block";
            //run second
            aniB(document.getElementById(`${teamCanvas}_B`));
            break;
          }
          case "3": {
            console.log("C");
            //reset the canvases
            resetCanvases(`${team} .aniCanvas`);
            //reset buttons
            resetButtons(teamButtons, this);
            //activate canvas C
            document.getElementById(`${teamCanvas}_C`).style.display = "block";
            //run third
            aniC(document.getElementById(`${teamCanvas}_C`));
            break;
          }
          case "4": {
            console.log("D");
            break;
          }
          case "5": {
            console.log("E");
            break;
          }
          case "6": {
            console.log("F");
            break;
          }
        }
      }
    } //for
  }
  /**************** ANI A ************************************ */
  /** PUT ALL YOUR CODE FOR ANIMATION A INSIDE  HERE */
  /**************** ANI A ************************************ */
  /**************** TASK *******************************************
   * YOU CAN USE ALL NOTES --- and see my examples in team-h.js for inspiration and possibly help:)
   * 1: use the function window.requestAnimationFrame() to create an animation
   * i.e. a reoccuring pattern - you can use simple shapes and colors, images etc...
   * 2: create a way to start and stop the animation using a
   * custom made button and add a mouse click event listener to either start/stop the animation
   *
   * NOTE::: PLEASE::: if you add any custom css PLEASE use the style.css and prefix any class names with your team label
   * i.e. you want to create a custom div class and you are in "Team_A" then call your class TEAM_A_ANI_A_Div -
   * this is so that your styles are not overriden by other teams.
   * NOTE::: All your code is to be added here inside this function -
   * remember you can define other functions inside....
   * Do not change any code above or the HTML markup.
   * **/

  function aniA(parentCanvas) {
    console.log("in A");
  }
  /**************** ANI B ************************************ */
  /** PUT ALL YOUR CODE FOR ANIMATION B INSIDE  HERE */
  /**************** ANI B ************************************ */
  /**************** TASK *******************************************
   * YOU CAN USE ALL NOTES --- and see my examples in team-h.js for inspiration and possibly help:)
   * 1: use the function window.setInterval() to create a pattern that changes over time
   * i.e. fading out/ in, growing bigger/smaller, appear/disappear, add, remove...
   *  - you can use simple shapes and colors, images etc...
   * 2: add in a / some mouse click event listener(s) somewhere to make the sketch interactive

   *
   * NOTE::: PLEASE::: if you add any custom css PLEASE use the style.css and prefix any class names with your team label
   * i.e. you want to create a custom div class and you are in "Team_A" then call your class TEAM_A_ANI_A_Div -
   * this is so that your styles are not overriden by other teams.
   * NOTE::: All your code is to be added here inside this function -
   * remember you can define other functions inside....
   * Do not change any code above or the HTML markup.
   * **/
  function aniB(parentCanvas) {
    console.log("in B");
    let squares = [];
    let scale = 1;

    setInterval(() => {
      scale = scale === 1 ? 1.5 : 1;

      squares.forEach(square => {
        square.style.transform = `scale(${scale})`;
      });
    }, 1000);

    function setupAnimation() {
      let offset = 60;
      for (let i = 0; i < 12; i++) {
        for (let j = 0; j < 12; j++) {
          let square = document.createElement("div");
          square.classList.add("TEAM_A_square");
          square.style.width = "20px";
          square.style.height = "20px";
          square.style.background = "black";
          square.style.position = "absolute"; // Ensure positioning works
          square.style.left = offset + i * 25 + "px";
          square.style.top = offset + j * 25 + "px";

          parentCanvas.appendChild(square);
          squares.push(square);
        }
      }
    }
    setupAnimation();
  }
  /**************** ANI C ************************************ */
  /** PUT ALL YOUR CODE FOR INTERACTIVE PATTERN C INSIDE  HERE */
  /**************** ANI C ************************************ */
  /**************** TASK *******************************************
    * YOU CAN USE ALL NOTES --- and see my examples in team-h.js for inspiration and possibly help:)
    * 1: use the PROVIDED keyup/down callbacks `windowKeyDownRef` and/or `windowKeyUpnRef` to handle keyboard events
    * 2: create an interactive pattern/sketch based on keyboard input. Anything goes.
    * do not use  requestAnimationFrame(), setInterval() nor setTimeout() -> meaning keep it simple ;)
    * 
    * NOTE::: PLEASE::: if you add any custom css PLEASE use the style.css and prefix any class names with your team label
    * i.e. you want to create a custom div class and you are in "Team_A" then call your class TEAM_A_ANI_A_Div -
    * this is so that your styles are not overriden by other teams.
    * NOTE::: All your code is to be added here inside this function -
    * remember you can define other functions inside....
    * Do not change any code above or the HTML markup.
    * **/

  /**
   * Creating a square that apeard in the direction that the arrows keys are pressed inside the canvas in the style of the game snake
   */
  function aniC(parentCanvas) {

    console.log("in C");

    /** Creating the array for the snake **/
    let snake = [];
    let snakeLength = 20;

    /*** THIS IS THE CALLBACK FOR KEY DOWN ( DO NOT CHANGE THE NAME..) */
    windowKeyDownRef = function (e) {
      console.log(e);

      /** Creating the square that will be the snake **/
      let TEAM_A_square = document.createElement("div");
      TEAM_A_square.classList.add("TEAM_A_C_square");

      /** Getting the coordinates of the center of the square **/
      let rect = parentCanvas.getBoundingClientRect();
      let x = rect.width / 2;
      let y = rect.height / 2;

      /** Getting the last square of the snake **/
      if (snake.length > 0) {
        let lastSquare = snake[snake.length - 1];
        x = parseInt(lastSquare.style.left);
        y = parseInt(lastSquare.style.top);
      }

      /** Moving the square in the direction of the arrow key pressed **/
      if (e.code === "KeyW") {
        console.log("up");
        y -= 20;
      }
      if (e.code === "KeyS") {
        console.log("down");
        y += 20;
      }
      if (e.code === "KeyA") {
        console.log("left");
        x -= 20;
      }
      if (e.code === "KeyD") {
        console.log("right");
        x += 20;
      }

      /** Setting the position of the square **/
      TEAM_A_square.style.top = `${y}px`;
      TEAM_A_square.style.left = `${x}px`;
      parentCanvas.appendChild(TEAM_A_square);
      snake.push(TEAM_A_square);

      /** Removing the first square of the snake if the snake is longer than the snakeLength **/
      if (snake.length > snakeLength) {
        let oldSquare = snake.shift();
        parentCanvas.removeChild(oldSquare);
      }
    };

    /*** THIS IS THE CALLBACK FOR KEY UP ( DO NOT CHANGE THE NAME..) */
    windowKeyUpRef = function (e) {
      //SAMPLE KEY CHECK (you do not have to use)
      if (e.code === "Space") {
        console.log("space up");
        console.log("team-space up")
      }

    };

    //DO NOT REMOVE
    window.addEventListener("keydown", windowKeyDownRef);
    window.addEventListener("keyup", windowKeyUpRef);
  }
}

window.onload = run;

function run() {
  document.querySelector("#stepOneButton").addEventListener("click", fetchText);


  /****** PART A:: FETCH */
  async function fetchText() {
    console.log("in fetch");
    let raw_rainbow_text = "";
    try {
      const response = await fetch('files/rainbow.txt');
      if (response.ok) {
        raw_rainbow_text = await response.text();
      } else {
        console.error('Failed to fetch the text file');
      }
      document.querySelector("#stepOneButton").style.display = "none";
      document.querySelector("#inputDiv").style.display = "block";
      document.querySelector("#rainbow_text").textContent = raw_rainbow_text;
      document.querySelector("#resetButton").addEventListener("click", resetPoem);
      runPartB(raw_rainbow_text);
    } catch (e) {
      console.error('Error fetching the text file:', e);
    }
  }

  /****** PART B:: TEXT PROCESSING  */
  function runPartB(originalRainBowText) {
    document
      .querySelector("#produce-poem")
      .addEventListener("click", producePoem);

    function producePoem() {
      console.log(originalRainBowText);

      // Access the value from the input field with id "phrase"
      const phrase = document.querySelector("#phrase").value;
      const phrase_as_array = phrase.split(/[\s.!?\n]+/);
      const rainbow_tokens = originalRainBowText.split(/[\s.!?\n]+/);

      if (phrase_as_array.length > 0 && rainbow_tokens.length > 0) {
        runPartC(rainbow_tokens, phrase_as_array);
      } else {
        console.error('Error: One or both arrays are empty or not correctly formed.');
      }
    }
  }


  /****** PART C:: POEM CREATION  */
  function runPartC(rainbow_words, seed_phrase_array) {
    console.log(rainbow_words);
    console.log(seed_phrase_array);

    //to next stage
    runPartD(poem_sentence);
  }


  /****** PART D:: VISUALIZE  */
  function runPartD(new_sentence) {

  }

  /****** PART E:: RESET  */
  function resetPoem() {
    /*** TO FILL IN */

  }
} //window onload



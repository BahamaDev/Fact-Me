let info_Output = document.getElementById("info-output");
let infoText = document.getElementById("info-text");
let numberInput = document.getElementById("number-input");
numberInput.addEventListener("input", getInfoFetch);

function getInfoFetch() {
  let number = numberInput.value;
  console.log("Bing");

  let thatURL = "http://numbersapi.com/" + number;

  fetch(thatURL)
    .then((response) => response.text())
    .then((data) => {
      if (number != "") {
        info_Output.style.display = "block";
        infoText.innerHTML = data;
        console.log(data);
      } else {
      }
    })

    .catch((err) => console.log(err));
}

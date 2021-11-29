// refernce the DOM elements
var principal = document.getElementById("principal");
var rate = document.getElementById("rate");
var years = document.getElementById("years");
var result = document.getElementById("result");

// add event listeners to handle user activities
rate.addEventListener("change", updateRate());
result.addEventListener("click", compute);

//update the rate range field
function updateRate() {
  document.getElementById("rate_val").innerText = `${rate.value}%`;
}

//compute interest rate
function compute() {
  //reset the result element after each new click
  result.innerHTML = "";

  //check user input
  if (principal.value == "" || principal.value < 0 || principal.value == 0) {
    alert("Enter a positive number");
    reset();
    principal.focus();

    // display result element
  } else {
    var year = new Date().getFullYear() + parseInt(years.value);
    let amount = (principal.value * years.value * rate.value) / 100;

    result.innerHTML = `
      <p>
      If you deposit <mark>${principal.value}</mark>
      ,<br>
      at an interest rate of <mark>${rate.value}%</mark>
      <br>
      You will receive an amount of <mark>$${amount.toFixed(2)}</mark> 
      <br>
      in the year <mark>${year}</mark>
          <br>
    </p>`;
  }
}

// reset result element explicitly
let reset = () => {
  principal.value = "";
  years.value = 1;
  rate.value = 10.25;
  updateRate();
  result.innerHTML = "";
};

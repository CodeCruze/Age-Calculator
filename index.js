// Inputs
const dayInp = document.querySelector(".day");
const monthInp = document.querySelector(".month");
const yearInp = document.querySelector(".year");

//Outputs
const dayOtp = document.querySelector(".DD");
const monthOtp = document.querySelector(".MM");
const yearOtp = document.querySelector(".YY");
const submitBtn = document.querySelector(".submit-btn");

// Form Element
const form = document.querySelector('form');


// adding the submit event listener to form
submitBtn.addEventListener("click", handleSubmit);

const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];



//Add an input event handler to the day input field
dayInp.addEventListener('input', function () {
  //If there were errors in the field, then with a new change we remove them
  if (dayInp.nextElementSibling.innerHTML == "Must be a valid date") {
    dayInp.parentElement.classList.remove("error");
    monthInp.parentElement.classList.remove("error");
    yearInp.parentElement.classList.remove("error");
  }
  //If a day greater than 31 is specified, then we signal an error, otherwise we delete the error
  if (dayInp.value > 31) {
    dayInp.nextElementSibling.innerHTML = "Must be a valid day"
    dayInp.parentElement.classList.add("error");
  } else {
    dayInp.parentElement.classList.remove("error");
  }
});

//Add an input event handler to the mounth input field
monthInp.addEventListener('input', function () {
  //If there were errors in the field, then with a new change we remove them
  if (dayInp.nextElementSibling.innerHTML == "Must be a valid date") {
    dayInp.parentElement.classList.remove("error");
    monthInp.parentElement.classList.remove("error");
    yearInp.parentElement.classList.remove("error");
  }
  //If a mounth greater than 12 is specified, then we signal an error, otherwise we delete the error
  if (monthInp.value > 12) {
    monthInp.nextElementSibling.innerHTML = "Must be a valid mounth"
    monthInp.parentElement.classList.add("error");
  } else {
    monthInp.parentElement.classList.remove("error");

  }
});

//Add an input event handler to the year input field
yearInp.addEventListener('input', function () {
  //If there were errors in the field, then with a new change we remove them
  if (dayInp.nextElementSibling.innerHTML == "Must be a valid date") {
    dayInp.parentElement.classList.remove("error");
    monthInp.parentElement.classList.remove("error");
    yearInp.parentElement.classList.remove("error");
  }
  //If the specified year is greater than the current year, we throw an error
  let Data = new Date();
  if (yearInp.value > Data.getFullYear()) {
    yearInp.nextElementSibling.innerHTML = "Must be in the past"
    yearInp.parentElement.classList.add("error");
  } else {
    yearInp.parentElement.classList.remove("error");
  }
});

function validate() {
  // Get the input values
  const dayValue = parseInt(dayInp.value);
  const monthValue = parseInt(monthInp.value);
  const yearValue = parseInt(yearInp.value);

  // Define the validation rules
  const isValidDay = dayValue > 0 && dayValue <= 31;
  const isValidMonth = monthValue > 0 && monthValue <= 12;
  const isValidYear = yearValue > 0 && yearValue <= new Date().getFullYear();

  // Check if all inputs are valid
  if (isValidDay && isValidMonth && isValidYear) {
    return true; // All inputs are valid
  } else {
    // Display error messages or perform any other error handling
    if (!isValidDay) {
      console.error("Invalid day value");
    }
    if (!isValidMonth) {
      console.error("Invalid month value");
    }
    if (!isValidYear) {
      console.error("Invalid year value");
    }
    return false; // At least one input is invalid
  }
}


function handleSubmit(e) {
  e.preventDefault();
  if (validate()) {
    if (dayInp.value > day) {
      day = day+months[month-1];
      month = month-1;
    }
    if (monthInp.value > month) {
      month = month+12;
      year = year-1;
    }

    const d = day - dayInp.value;
    const m = month - monthInp.value;
    const y = year - yearInp.value;

    dayOtp.innerHTML = d;
    monthOtp.innerHTML = m;
    yearOtp.innerHTML = y;
  }
}



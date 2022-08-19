const form = document.querySelector("form"),
  userNameInput = document.querySelector("#user-name"),
 cardNumberInput = document.querySelector("#card-number"),
  errUserName = document.querySelector("#err-user-name"),
  expInputs = document.querySelector(".exp-inputs"),
  expMonthInput = document.querySelector("#exp-month"),
  expYearInput = document.querySelector("#exp-year"),
  errMonth = document.querySelector("#err-month"),
  cvcInput = document.querySelector("#cvc"),
  errCvc = document.querySelector("#err-cvc"),
  errCardNumber = document.querySelector("#err-card-number"),
  cardName = document.querySelector(".fake-card-name"),
 cardNumber = document.querySelector(".card-number"),
 cardNumbers = Array.from(cardNumber.children),
 whiteLine = document.querySelector(".white-line"),
 fakeMm = document.querySelector(".fake-mm"),
 popUp = document.querySelector(".popUp"),
 aside = document.querySelector("aside"),
 cardValidation = document.querySelector(".card-validation"),
 continueBtn = document.querySelector(".continueBtn"),
 fakeYy = document.querySelector(".fake-yy");

console.log(expInputs);
function spaceCardNumbers() {
  if (cardNumberInput.value.length === 4) {
    cardNumberInput.value += " ";
  } else if (cardNumberInput.value.length === 9) {
    cardNumberInput.value += " ";
  } else if (cardNumberInput.value.length === 14) {
    cardNumberInput.value += " ";
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let trimedUserNameInput = userNameInput.value.trim();
  console.log(trimedUserNameInput);
  if (
    trimedUserNameInput.length < 2 ||
    cardNumberInput.value.length < 19 ||
    expMonthInput.value.length < 2 ||
    expYearInput.value.length < 2 ||
    cvcInput.value.length < 3
  ) {
    showErrorMessage(trimedUserNameInput, expMonthInput, cvcInput);
    cardNumFormat(cardNumberInput);
  } else {
    updateCardInfo(userNameInput.value, cardName);

    let regexCardNo = /\d{4}/g,
      matches = cardNumberInput.value.match(regexCardNo);

    updateCardInfo(matches[0], cardNumbers[0]);
    updateCardInfo(matches[1], cardNumbers[1]);
    updateCardInfo(matches[2], cardNumbers[2]);
    updateCardInfo(matches[3], cardNumbers[3]);

    updateCardInfo(cvcInput.value, whiteLine);

    updateCardInfo(expMonthInput.value, fakeMm);
    updateCardInfo(expYearInput.value, fakeYy);
    popUp.classList.add("pop");
    cardValidation.style.display = "none";

    continueBtn.addEventListener("click", () => {
      window.location.reload();
    });
  }
   
});

function updateCardInfo(data1, data2) {
  data2.textContent = data1;
}

cardNumberInput.addEventListener("keyup", spaceCardNumbers);

function cardNumFormat(data1) {
  let regexCardDigit = /[A-Za-z]/g,
    onlyDigits = regexCardDigit.test(data1.value);
  console.log(onlyDigits);

  if (onlyDigits === true || data1.value < 19) {
    data1.nextElementSibling.style.display = "unset";
  } else {
    data1.nextElementSibling.style.display = "none";
  }
}

function showErrorMessage(input1, input2, input3) {
  if (input1.length === 0) {
    errUserName.style.display = "unset";
  } else {
    errUserName.style.display = "none";
  }
  if (
    input2.value.length === 0 ||
    input2.nextElementSibling.value.length === 0
  ) {
    input2.parentElement.nextElementSibling.style.display = "unset";
  } else {
    input2.parentElement.nextElementSibling.style.display = "none";
  }

  if (input3.value.length === 0) {
    input3.nextElementSibling.style.display = "unset";
  } else {
    input3.nextElementSibling.style.display = "none";
  }
}

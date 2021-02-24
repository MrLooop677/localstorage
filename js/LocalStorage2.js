// Select Elements
let allSpans = document.querySelectorAll(".buttons span");
let results = document.querySelector(".results > span");
let theInput = document.getElementById("the-input");

allSpans.forEach((span) => {
  span.addEventListener("click", (e) => {
    if (e.target.classList.contains("check-item")) {
      checkitem();
    }
    if (e.target.classList.contains("add-item")) {
      additem();
    }
    if (e.target.classList.contains("delete-item")) {
      deleteitem();
    }
    if (e.target.classList.contains("show-items")) {
      showitems();
    }
  });
});

function checkinput() {
  if (theInput.value == "") {
    results.innerHTML = "The input is Empty";
  }
}

function checkitem() {
  if (theInput.value != "") {
    if (localStorage.getItem(theInput.value)) {
      results.innerHTML = `found local item <span> ${theInput.value} </span>`;
    } else {
      results.innerHTML = `not found local item <span> ${theInput.value} </span>`;
    }
  } else {
    checkinput();
  }
}

function additem() {
  if (theInput.value != "") {
    localStorage.setItem(theInput.value, "value");
    results.innerHTML = `localStorage item ${theInput.value}  is added `;
    theInput.value = "";
  } else {
    checkinput();
  }
}

function deleteitem() {
  if (theInput.value != "") {
    localStorage.removeItem(theInput.value);
    results.innerHTML = `localStorage item  ${theInput.value} is deleted`;
    theInput.value = "";
  } else {
    checkinput();
  }
}

function showitems() {
  if (localStorage.length) {
    results.innerHTML = "";
    for (let [key, value] of Object.entries(localStorage)) {
      results.innerHTML += `<span class="keys">${key}</span>`;
    }
  } else {
    results.innerHTML = `Local Storage Is Empty`;
  }
}

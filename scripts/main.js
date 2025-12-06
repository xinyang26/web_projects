const listItems = document.querySelectorAll('li');

function toggleDone(e) {
    if (!e.target.className) {
        e.target.className = "done";
    } else {
        e.target.className = "";
    }
}

listItems.forEach((item) => {
    item.addEventListener("click", toggleDone);
});

const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc == "images/firefox-icon.svg") {
        myImage.setAttribute("src", "images/firefox-icon2.png");
    } else {
        myImage.setAttribute("src", "images/firefox-icon.svg");
    }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Welcome to My Test Page, ${myName}`;
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent =  `Welcome to My Test Page, ${storedName}`;
}

myButton.addEventListener("click", () => {
    setUserName();
});

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}
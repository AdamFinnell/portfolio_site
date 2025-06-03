// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}

// Change style of navbar on scroll
window.onscroll = function () {
  myFunction();
};
function myFunction() {
  var navbar = document.getElementById("myNavbar");
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-black";
  } else {
    navbar.className = navbar.className.replace(
      " w3-card w3-animate-top w3-black",
      ""
    );
  }
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}

// progress bars------------------------

function move() {
  var elem = document.getElementById("myBar");
  var width = 20;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 95) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + "%";
      elem.innerHTML = "LVL " + width * 1;
    }
  }
}
function move2() {
  var elem = document.getElementById("myBar2");
  var width = 20;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 93) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + "%";
      elem.innerHTML = "LVL " + width * 1;
    }
  }
}
function move3() {
  var elem = document.getElementById("myBar3");
  var width = 20;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 81) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + "%";
      elem.innerHTML = "LVL " + width * 1;
    }
  }
}
function move4() {
  var elem = document.getElementById("myBar4");
  var width = 20;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 79) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + "%";
      elem.innerHTML = "LVL " + width * 1;
    }
  }
}
const moveAll = () => {
  move();
  move2();
  move3();
  move4();
};

// ===============Word Animation Start===========
const containerEl = document.querySelector(".wordamation");

const titles = [
  "a Developer!",
  "an Artist!",
  "a Gamer!",
  "a Father!",
  "an Uncle!",
];

let titleIndex = 0;

changeTitle();

function changeTitle() {
  containerEl.innerHTML = `<div class="header">I love being</div><div class="active">${titles[titleIndex]}</div>`;
  titleIndex++;

  if (titleIndex === titles.length) {
    titleIndex = 0;
  }
  setTimeout(changeTitle, 2000);
}

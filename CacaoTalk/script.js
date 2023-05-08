// event listener for the refresh button
// AJAX request to getMessages.php 0
// clear the innerHTML of the messsages container 0
// add the AJAX responseText into the container

// ========== Refresh button ========== //
const refresh = document.querySelector("#refresh");
refresh.addEventListener("click", refreshPage);

// ======= Show more button ======= //
const showMore = document.querySelector("#showMore");
showMore.addEventListener("click", loadFile);

const container = document.querySelector(".container");
let add = 10;

function refreshPage(e) {
  e.preventDefault();
  //   results.innerHTML = "";
  let xhr = new XMLHttpRequest();
  xhr.open("GET", `./getMessages.php`);
  xhr.addEventListener("readystatechange", function () {
    if (xhr.readyState === xhr.DONE) {
      console.log("refresh");
      container.innerHTML = xhr.responseText;
    }
  });
  xhr.send(null);
}

function loadFile(e) {
  e.preventDefault();
  console.log(add);
  //   results.innerHTML = "";
  let xhr = new XMLHttpRequest();
  xhr.open("GET", `./getMessages.php?limit=${add}`); //
  xhr.addEventListener("readystatechange", function () {
    if (xhr.readyState === xhr.DONE) {
      console.log("show more");
      let div = document.createElement("div"); // create another div in html
      div.innerHTML = xhr.responseText; // innerHTML to show on the webpage
      container.appendChild(div); //appending the div onto the container
      add += 10; //offset - incrementing each time we click show more.
    }
  });
  xhr.send(null);
}

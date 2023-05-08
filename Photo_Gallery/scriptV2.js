const data = [
  // array
  {
    image: "https://picsum.photos/id/237/200/200",
    title: "Dog",
    creator: "Jim Beam",
    price: "$9.99",
  },
  {
    image: "https://picsum.photos/id/238/200/200",
    title: "City",
    creator: "Jack Daniels",
    price: "$6.50",
  },
  {
    image: "https://picsum.photos/id/239/200/200",
    title: "Dandelion",
    creator: "Johnnie Walker",
    price: "$19.00",
  },
  {
    image: "https://picsum.photos/id/244/200/200",
    title: "Pelicans",
    creator: "John Jameson",
    price: "$12.50",
  },
  {
    image: "https://picsum.photos/id/248/200/200",
    title: "Cactus",
    creator: "Jim Beam",
    price: "$15.99",
  },
  {
    image: "https://picsum.photos/id/249/200/200",
    title: "Bridge",
    creator: "William Grant",
    price: "$29.99",
  },
  {
    image: "https://picsum.photos/id/250/200/200",
    title: "Camera",
    creator: "George Smith",
    price: "$10.00",
  },
  {
    image: "https://picsum.photos/id/251/200/200",
    title: "Landscape",
    creator: "Johnnie Walker",
    price: "$29.00",
  },
  {
    image: "https://picsum.photos/id/255/200/200",
    title: "Private Drive",
    creator: "John Jameson",
    price: "$19.00",
  },
  {
    image: "https://picsum.photos/id/256/200/200",
    title: "Snowy Mountains",
    creator: "William Grant",
    price: "$19.99",
  },
  {
    image: "https://picsum.photos/id/257/200/200",
    title: "Canal",
    creator: "Jim Beam",
    price: "$19.99",
  },
  {
    image: "https://picsum.photos/id/258/200/200",
    title: "Birds",
    creator: "Johnnie Walker",
    price: "$24.00",
  },
  {
    image: "https://picsum.photos/id/259/200/200",
    title: "Waterfront",
    creator: "George Smith",
    price: "$15.00",
  },
  {
    image: "https://picsum.photos/id/261/200/200",
    title: "Dune",
    creator: "John Jameson",
    price: "$7.50",
  },
  {
    image: "https://picsum.photos/id/274/200/200",
    title: "City Night",
    creator: "Jim Beam",
    price: "$14.99",
  },
];

// ========== VERSION 2 ============

const showNum = 3;
const body = document.querySelector("body");
const moreBtn = document.querySelector(".moreCards");
const lessBtn = document.querySelector(".lessCards");

let startIndex = 0; // first index on an array = 0

const addCards = () => {
  for (let i = startIndex; i < startIndex + showNum; i++) {
    // you start at startIndex but you increment each time you go up, i.e 0,1,2 -> 3,4,5 -> 6,7,8
    // create div, image, p, p, p, p
    let div = document.createElement("div");
    div.className = "card";
    let image = document.createElement("img");
    let title = document.createElement("p");
    let creator = document.createElement("p");
    let price = document.createElement("p");
    image.src = data[i].image; // taking the info from the data array
    title.textContent = data[i].title; // putting the textContent from array into the element p
    creator.textContent = data[i].creator;
    price.textContent = data[i].price;
    body.appendChild(div);
    div.appendChild(image);
    div.appendChild(title); // appending the title textContent into the div
    div.appendChild(creator);
    div.appendChild(price);
    console.log();
    // body.insertBefore(div, div.moreCards);
    // body.insertBefore(div, body.lastElementChild);
    document.body.appendChild(moreBtn);
  }
};
addCards();

moreBtn.addEventListener("click", function (e) {
  console.log("hi");
  // if(there is a click on showMore)
  // add a card
  startIndex += 3;
  addCards();
});

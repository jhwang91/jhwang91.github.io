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

// ========== VERSION 1 ============

const body = document.querySelector("body");

for (let i = 0; i < data.length; i++) {
  // data is the const data above(our array)
  let newDiv = document.createElement("div"); // creating a div in html
  newDiv.className = "card"; // gives div - class name 'card'
  newDiv.innerHTML = `<img src="${data[i].image}" /><h3>${data[i].title}</h3>`; // this creates a card with img and p's
  body.appendChild(newDiv); // adding the newDiv onto website
}

// let body = document.querySelector("body");
// let startIndex = 0; // first number on an array = 0
// let showMore = document.querySelector(".moreCard");

// const addCard = () => {
//   for (let i = startIndex; i < startIndex + 3; i++) {
//     // you start at startIndex but you increment each time you go up, i.e 0,1,2 -> 3,4,5 -> 6,7,8
//     // create div, image, p, p, p, p
//     let card = document.createElement("div");
//     let image = document.createElement("img");
//     let title = document.createElement("p");
//     let creator = document.createElement("p");
//     let price = document.createElement("p");

//     body.appendChild(card);
//     body.appendChild(image);
//     body.appendChild(title);
//     body.appendChild(creator);
//     body.appendChild(price);

//     showMore.addEventListener("click", function (e) {
//       // if(there is a click on showMore)
//       // add a card
//     });
//   }
// };

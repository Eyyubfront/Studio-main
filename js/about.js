const bars = document.querySelector(".fa-bars");

const mobilMenu = document.querySelector(".MobilMenu");
const close = document.querySelector(".fa-x");
bars.onclick = () => {
  mobilMenu.classList.add("showMobilmenu");
};

close.onclick = () => {
  mobilMenu.classList.remove("showMobilmenu");
};

const productsprovid = document.querySelector(".groupwarp");

const products = [
  {
    id: 0,
    mainImage: "../img/Groupboy.png",
    tittle: "Adam Mylir <br> Designr",
  },

  {
    id: 1,
    mainImage: "../img/Groupgirls2.png",
    tittle: "Adam Mylir <br> Designr",
  },

  {
    id: 2,
    mainImage: "../img/Groupgirl.png",
    tittle: "Adam Mylir <br> Designr",
  },

  {
    id: 3,
    mainImage: "../img/Groupboy.png",
    tittle: "Adam Mylir <br> Designr",
  },





  {
    id: 4,
    mainImage: "../img/Groupboy.png",
    tittle: "Adam Mylir <br> Designr",
  },

  {
    id: 5,
    mainImage: "../img/Groupgirls2.png",
    tittle: "Adam Mylir <br> Designr",
  },

  {
    id: 6,
    mainImage: "../img/Groupgirl.png",
    tittle: "Adam Mylir <br> Designr",
  },

  {
    id: 7,
    mainImage: "../img/Groupboy.png",
    tittle: "Adam Mylir <br> Designr",
  },









  
];

products.forEach((product) => {
  let data = `
  
  <div class="groupcards1">


  <div class="boyscard">  
    <img src="${product.mainImage}" alt="">
  </div>  
  
  <p class="mylier">${product.tittle}</p>
  
    </div>
  
  
  
  
  `;

  productsprovid.innerHTML += data;
});

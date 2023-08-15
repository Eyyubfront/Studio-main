const bars = document.querySelector(".fa-bars");

const mobilMenu = document.querySelector(".MobilMenu");
const close = document.querySelector(".fa-x");
bars.onclick = () => {
  mobilMenu.classList.add("showMobilmenu");
};

close.onclick = () => {
  mobilMenu.classList.remove("showMobilmenu");
};

let productsContainer = document.querySelector(".hotel1rows");

const products = [
  {
    id: 0,
    mainImage: "../img/image1.jpg",

    images: [
      { id: 0, src: "../img/Rectangle 42.jpg" },
      { id: 1, src: "../img/Rectangle 42.jpg" },
      { id: 2, src: "../img/Rectangle 42.jpg" },
      { id: 3, src: "../img/Rectangle 42.jpg" },
      { id: 4, src: "../img/Rectangle 42.jpg" },
    ],
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus recusandae tempora non natus autem commodi, fugiat ut aliquid maiores doloremque corrupti adipisci nemo labore molestias, numquam nisi odit fugit accusamus!",
  },

  {
    id: 1,
    mainImage: "../img/image1.jpg",
    images: [
      { id: 0, src: "../img/image1.jpg" },
      { id: 1, src: "../img/Rectangle 42.jpg" },
      { id: 2, src: "../img/Rectangle 42.jpg" },
      { id: 3, src: "../img/Rectangle 42.jpg" },
      { id: 4, src: "../img/Rectangle 42.jpg" },
    ],
    title: "Salam dunya",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus recusandae tempora non natus autem commodi, fugiat ut aliquid maiores doloremque corrupti adipisci nemo labore molestias, numquam nisi odit fugit accusamus!",
  },

  {
    id: 2,
    mainImage: "../img/image1.jpg",
    images: [
      { id: 0, src: "../img/Rectangle 42.jpg" },
      { id: 1, src: "../img/Rectangle 42.jpg" },
      { id: 2, src: "../img/Rectangle 42.jpg" },
      { id: 3, src: "../img/Rectangle 42.jpg" },
      { id: 4, src: "../img/Rectangle 42.jpg" },
    ],
    title: "Hello world!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus recusandae tempora non natus autem commodi, fugiat ut aliquid maiores doloremque corrupti adipisci nemo labore molestias, numquam nisi odit fugit accusamus!",
  },

  {
    id: 3,
    mainImage: "../img/image1.jpg",
    images: [
      { id: 0, src: "../img/Rectangle 42.jpg" },
      { id: 1, src: "../img/Rectangle 42.jpg" },
      { id: 2, src: "../img/Rectangle 42.jpg" },
      { id: 3, src: "../img/Rectangle 42.jpg" },
      { id: 4, src: "../img/Rectangle 42.jpg" },
    ],
    title: "Lorem ipsum 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus recusandae tempora non natus autem commodi, fugiat ut aliquid maiores doloremque corrupti adipisci nemo labore molestias, numquam nisi odit fugit accusamus!",
  },

  {
    id: 4,
    mainImage: "../img/image1.jpg",
    images: [
      { id: 0, src: "../img/Rectangle 42.jpg" },
      { id: 1, src: "../img/Rectangle 42.jpg" },
      { id: 2, src: "../img/Rectangle 42.jpg" },
      { id: 3, src: "../img/Rectangle 42.jpg" },
      { id: 4, src: "../img/Rectangle 42.jpg" },
    ],
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus recusandae tempora non natus autem commodi, fugiat ut aliquid maiores doloremque corrupti adipisci nemo labore molestias, numquam nisi odit fugit accusamus!",
  },
  {
    id: 5,
    mainImage: "../img/image1.jpg",
    images: [
      { id: 0, src: "../img/Rectangle 42.jpg" },
      { id: 1, src: "../img/Rectangle 42.jpg" },
      { id: 2, src: "../img/Rectangle 42.jpg" },
      { id: 3, src: "../img/Rectangle 42.jpg" },
      { id: 4, src: "../img/Rectangle 42.jpg" },
    ],
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus recusandae tempora non natus autem commodi, fugiat ut aliquid maiores doloremque corrupti adipisci nemo labore molestias, numquam nisi odit fugit accusamus!",
  },
  {
    id: 6,
    mainImage: "../img/image1.jpg",
    images: [
      { id: 0, src: "../img/Rectangle 42.jpg" },
      { id: 1, src: "../img/Rectangle 42.jpg" },
      { id: 2, src: "../img/Rectangle 42.jpg" },
      { id: 3, src: "../img/Rectangle 42.jpg" },
      { id: 4, src: "../img/Rectangle 42.jpg" },
    ],
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus recusandae tempora non natus autem commodi, fugiat ut aliquid maiores doloremque corrupti adipisci nemo labore molestias, numquam nisi odit fugit accusamus!",
  },
  {
    id: 7,
    mainImage: "../img/image1.jpg",
    images: [
      { id: 0, src: "../img/Rectangle 42.jpg" },
      { id: 1, src: "../img/Rectangle 42.jpg" },
      { id: 2, src: "../img/Rectangle 42.jpg" },
      { id: 3, src: "../img/Rectangle 42.jpg" },
      { id: 4, src: "../img/Rectangle 42.jpg" },
    ],
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus recusandae tempora non natus autem commodi, fugiat ut aliquid maiores doloremque corrupti adipisci nemo labore molestias, numquam nisi odit fugit accusamus!",
  },
];

products.forEach((product) => {
  let data = ` <div class="hotelcards1">
  <a href='./portfoli2.html'>
  <img class="mt" src=${product.mainImage}  />
  </a>
  <p>${product.title}</p>
  </div>`;

  productsContainer.innerHTML += data;
});

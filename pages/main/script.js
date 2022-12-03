const animalsData = {
  panda: {
    img: "./assets/images/giant-pandas.jpg",
    imgAlt: "Two Giant Pandas playing on tire swing",
    title: "giant Pandas",
    area: "Native to Southwest China",
    icon: "./assets/icons/banana-bamboo-icon.svg",
    iconAlt: "banana with bamboo icon"
  },
  sloth: {
    img: './assets/images/sloth.jpg',
    imgAlt: 'Two toed Sloth hanging on the tree',
    title: 'Two-toed Sloth',
    area: 'Mesoamerica, South America',
    icon: './assets/icons/banana-bamboo-icon.svg',
    iconAlt: 'banana with bamboo icon'
  },
  eagle: {
    img: './assets/images/eagles.jpg',
    imgAlt: 'Flying Eagle',
    title: 'Eagles',
    area: 'Native to South America',
    icon: './assets/icons/meet-fish-icon.svg',
    iconAlt: 'meat and fish icon'
  },
  cheetah: {
    img: './assets/images/cheetahs.jpg',
    imgAlt: 'Mother Cheetah and her baby',
    title: 'Cheetahs',
    area: 'Native to Africa',
    icon: './assets/icons/meet-fish-icon.svg',
    iconAlt: 'meat and fish icon'
  },
  gorilla: {
    img: './assets/images/gorillas.jpg',
    imgAlt: 'Huge Gorilla',
    title: 'Gorillas',
    area: 'Native to Congo',
    icon: './assets/icons/banana-bamboo-icon.svg',
    iconAlt: 'banana with bamboo icon'
  },
  penguin: {
    img: './assets/images/penguins.jpg',
    imgAlt: 'Penguin standing on ice',
    title: 'Penguins',
    area: 'Native to Antarctica',
    icon: './assets/icons/meet-fish-icon.svg',
    iconAlt: 'meat and fish icon'
  },
  aligator: {
    img: './assets/images/aligator.jpg',
    imgAlt: 'Aligator photo',
    title: 'Aligators',
    area: 'Native to Southeastern U. S.',
    icon: './assets/icons/meet-fish-icon.svg',
    iconAlt: 'meat and fish icon'
  }
}
const content = document.querySelector('.content');

// Navigation
let nav = document.querySelector('nav');
let burger = nav.querySelector('.burger-icon');
let overlay = document.querySelector('.overlay');
let closeBtn = document.createElement('a');
closeBtn.className = 'close-btn';

const closeBurger = () => {
  nav.classList.remove('open');
  burger.classList.remove('hide');
  overlay.classList.add('hide');
  closeBtn.remove();
  enableScroll();
};

const openBurger = () => {
  nav.classList.add('open');
  burger.classList.add('hide');
  overlay.classList.remove('hide');

  closeBtn.addEventListener('click', closeBurger)
  nav.append(closeBtn);

  disableScroll();
}

const disableScroll = () => {
  let scrollTop = document.documentElement.scrollTop;
  let scrollLeft = document.documentElement.scrollLeft;
  window.onscroll = () => window.scrollTo(scrollLeft, scrollTop);
}

const enableScroll = () => {
  window.onscroll = () => {};
}

burger.addEventListener('click', openBurger);
overlay.addEventListener('click', closeBurger);

const createArrow = (direction) => {
  let arrow = document.createElement('div');
  arrow.className = `arrow-${direction}`;
  let button = document.createElement('button');
  button.className = 'arrow-button';
  let icon = document.createElement('img');
  icon.src = './assets/icons/arrow.svg';
  icon.alt = 'arrow icon';
  button.append(icon);
  arrow.append(button);
  return arrow;
}

const arrowLeft = createArrow('left');
const arrowRight = createArrow('right');


const createCards = () => {
  let cards = [];

  const createCard = (animal) => {
    let petCard = document.createElement('div');
    let cardImg = document.createElement('div');
    let img = document.createElement('img');
    let cardText = document.createElement('div');
    let cardTitle = document.createElement('div');
    let header = document.createElement('h3');
    let p = document.createElement('p');
    let cardLogo = document.createElement('div');
    let logo = document.createElement('img');

    petCard.className = 'pet-card';
    cardImg.className = 'card-image';
    img.src = animal.img;
    img.alt = animal.imgAlt;
    cardText.className = 'card-text';
    cardTitle.className = 'card-title';
    header.textContent = animal.title;
    p.textContent = animal.area;
    cardLogo.className = 'card-logo';
    logo.src = animal.icon;
    logo.alt = animal.iconAlt;

    cardImg.append(img);
    cardTitle.append(header, p);
    cardLogo.append(logo);
    cardText.append(cardTitle, cardLogo);
    petCard.append(cardImg, cardText);

    cards.push(petCard);
  }

  for(let animal in animalsData) {
    createCard(animalsData[animal]);
  }
  return cards;
};

const createGallery = () => {
  const gallery = new DocumentFragment();
  let cards = [...animalCards];
  let limit = window.innerWidth >= 1000 ? 6 : 4;

  for(let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * cards.length);
    gallery.append(cards[random]);
    cards.splice(random, 1);
  }

  content.replaceChildren(arrowLeft, gallery, arrowRight);
};

const animalCards = createCards();

createGallery();

arrowLeft.addEventListener('click', createGallery);
arrowRight.addEventListener('click', createGallery);
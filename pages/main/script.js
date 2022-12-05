const animalsData = {
  panda: {
    img: "./assets/images/giant-pandas.jpg",
    imgAlt: "Portrait",
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
const testimonialsData = {
  0: {
    name: "Mila Riksha",
    location: "Austria",
    img: "./assets/images/portrait-01.png",
    imgAlt: "Portrait",
    comment: `Ut ornare mattis lorem. Praesent vulputate at nisi non lacinia. Proin fringilla risus ante, a pulvinar purus ultricies in. Proin lobortis viverra enim, sit amet interdum ex semper euismod. Pellentesque tristique velit enim, sed tristique ex porta in. Etiam condimentum mi vel nibh congue rutrum.`
  },
  1: {
    name: "User one",
    location: "China",
    img: "./assets/images/portrait-02.png",
    imgAlt: "Portrait",
    comment: `Phasellus eget risus venenatis, aliquet tortor vitae, lacinia arcu. Curabitur aliquet nibh vel convallis ultricies. Aliquam at consequat nisi, id eleifend tellus. Pellentesque congue lorem in mi suscipit dapibus. Ut posuere libero ullamcorper ex egestas, sit amet ullamcorper orci mattis. Nullam rutrum feugiat eros. Etiam sed velit fermentum, cursus nunc tincidunt, venenatis nulla. Phasellus a neque ornare, lacinia orci nec, euismod sapien. Integer venenatis dui nec dui maximus scelerisque.`
  },
  2: {
    name: "Peter Pan",
    location: "Neverland",
    img: "./assets/images/portrait-03.png",
    imgAlt: "Portrait",
    comment: `Maecenas quis elit at leo aliquam fringilla vitae sit amet velit. Sed egestas dignissim eros, vel bibendum neque fringilla id. Nulla imperdiet pretium est, in dapibus felis molestie et. In eleifend sit amet orci dapibus cursus. Integer eu lacinia ipsum. Sed semper, quam id suscipit eleifend, purus metus porttitor dolor, ac lacinia est dui eu nisi.`
  },
  3: {
    name: "Three Days",
    location: "USA",
    img: "./assets/icons/user-icon.svg",
    imgAlt: "Portrait",
    comment: `Sed at ligula finibus, venenatis arcu et, vestibulum augue. Maecenas porta nisi ac odio fringilla consectetur a nec nibh. In eu dui nisi. Etiam iaculis, augue sagittis rutrum porttitor, elit massa finibus urna, id porta mi nisl vel dui. Proin velit orci, sagittis non commodo et, finibus sed elit. Fusce luctus nec urna nec lobortis. Curabitur feugiat ipsum et risus ultricies cursus.`
  },
  4: {
    name: "Fourty Six",
    location: "China",
    img: "./assets/images/portrait-02.png",
    imgAlt: "Portrait",
    comment: `Sed sed sapien mi. Maecenas porta pretium odio quis ultrices. In consectetur felis ut neque dictum tristique. Cras efficitur placerat dui id finibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer fermentum erat in quam pretium, eget hendrerit diam pellentesque.`
  },
  5: {
    name: "Just Five",
    location: "Australia",
    img: "./assets/icons/user-icon.svg",
    imgAlt: "Portrait",
    comment: `Sed gravida dui eget bibendum lacinia. Aliquam pharetra orci et urna commodo tristique. Ut consectetur, neque eu auctor tristique, mauris mauris convallis tellus, vel commodo leo nulla eget lectus.`
  },
  6: {
    name: "Jay Six",
    location: "Finland",
    img: "./assets/images/portrait-01.png",
    imgAlt: "Portrait",
    comment: `Duis a eleifend augue. Vestibulum quis faucibus orci. Integer nec ipsum sollicitudin, convallis justo eu, vehicula mauris. Vestibulum in sollicitudin sapien. Vivamus dolor felis, blandit at venenatis vitae, faucibus ac libero.`
  },
  7: {
    name: "Seventy Seven",
    location: "Kongo",
    img: "./assets/icons/user-icon.svg",
    imgAlt: "Portrait",
    comment: `Donec eu accumsan lacus, a mattis dui. Suspendisse imperdiet sapien quis dolor viverra, ac sodales arcu placerat. Nunc facilisis purus et nisi lacinia, nec ultricies ante ornare. Ut eget mattis massa. Etiam eu risus velit.`
  },
  8: {
    name: "User Eight",
    location: "Thailand",
    img: "./assets/images/portrait-03.png",
    imgAlt: "Portrait",
    comment: `Mauris ipsum lorem, dignissim quis neque elementum, pellentesque ultrices diam. Aliquam et odio ac mauris iaculis ullamcorper ut nec nisi. Sed quis dictum magna. Duis lacinia nisl at augue rhoncus euismod. Curabitur ac eros quis justo elementum rhoncus a id mi.`
  },
  9: {
    name: "Nine Tails",
    location: "Japan",
    img: "./assets/icons/user-icon.svg",
    imgAlt: "Portrait",
    comment: `Suspendisse rhoncus quam quis ante accumsan, id gravida risus sollicitudin. Nunc non faucibus sem. Curabitur eu bibendum nibh. Mauris imperdiet euismod dolor a laoreet. Fusce sodales mi et est dictum molestie.`
  },
  10: {
    name: "Ben Ten",
    location: "Canada",
    img: "./assets/images/portrait-02.png",
    imgAlt: "Portrait",
    comment: `Aliquam dolor eros, pulvinar in finibus sit amet, molestie at leo. Duis semper viverra pellentesque. Sed dapibus eu felis at ultrices. Cras at congue magna, vitae mattis lacus. Interdum et malesuada fames ac ante ipsum primis in faucibus. In sollicitudin mattis lectus. Mauris non elit volutpat, facilisis ipsum quis, sagittis neque. Nulla ullamcorper erat nec lectus condimentum volutpat.`
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

// Carousel
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');

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

  for(let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * cards.length);
    gallery.append(cards[random]);
    cards.splice(random, 1);
  }

  content.replaceChildren(gallery);
};

const animalCards = createCards();

createGallery();

// animation
const position = window.innerWidth * 1.2;
const cardsOut = (direction) => {
  let sign = direction === 'arrow-left' ? '-' : '';
  return [
    {
      transform: 'translateX(0)'
    },
    {
      transform: `translateX(${sign + position}px)`
    }
  ]
};

const cardsIn = (direction) => {
  let sign = direction === 'arrow-left' ? '' : '-';
  return [
    {
      transform: `translateX(${sign + position}px)`
    },
    {
      transform: 'translateX(0)'
    }
  ]
};

const cardsTiming = {
  duration: 300,
  iterations: 1,
}

const animation = (e) => {
  if(e.detail < 2) {
    let direction = e.currentTarget.className;

    let cards = document.querySelector('.content');
    let animation = cards.animate(cardsOut(direction), cardsTiming);
    animation.finished.then(createGallery).then(() => {
      animation = cards.animate(cardsIn(direction), cardsTiming)
    });
  }
}

arrowLeft.addEventListener('click', animation);
arrowRight.addEventListener('click', animation);

// Testimonials
let modal = document.querySelector('.testimonial-modal');
let closeModalBtn = document.createElement('a');
closeModalBtn.className = 'close-btn';

const openCardModal = (e) => {
  let cardId = e.currentTarget.dataset.id;
  let modalCard = testimonialCards[cardId].cloneNode(true);

  modalCard.className = 'testimonial-card-open';
  modalCard.append(closeModalBtn);
  modal.classList.add('show');
  modal.replaceChildren(modalCard);
  disableScroll();
};

const closeCardModal = (e) => {
  if(e.target === e.currentTarget) {
    modal.classList.remove('show');
    enableScroll();
  }
};

closeModalBtn.addEventListener('click', closeCardModal);
modal.addEventListener('click', closeCardModal);

const createTestimonialCards = () => {
  let cards = [];

  const createTestimonialCard = (userData, index) => {
    let card = document.createElement('div');
    let cardHeader = document.createElement('div');
    let portrait = document.createElement('img');
    let userInfo = document.createElement('div');
    let name = document.createElement('h3');
    let location = document.createElement('p');
    let comment = document.createElement('p');

    card.className = 'testimonials-card';
    card.onclick = openCardModal;
    card.dataset.id = index;
    cardHeader.className = 'testimonial-header';
    portrait.className = 'user-icon';
    portrait.src = userData.img;
    portrait.alt = 'portrait photo';
    userInfo.className = 'user-info';
    name.textContent = userData.name;
    location.className = 'small-paragraph';
    location.textContent = `Local ${userData.location} · Today`;
    comment.className = 'small-paragraph';
    comment.textContent = userData.comment;

    userInfo.append(name, location)
    cardHeader.append(portrait, userInfo);
    card.append(cardHeader, comment);

    cards.push(card);
  };

  for(let user in testimonialsData) {
    createTestimonialCard(testimonialsData[user], user);
  };

  return cards;
};

const testimonialsContainer = document.querySelector('.cards-container');
const testimonialCards = createTestimonialCards();

let progressBar = document.querySelector('.progress-range');

const setProgressBar = function(e){
  let index = progressBar.value;
  let limit = +index + 4;
  let currentCards = new DocumentFragment();

  for(let i = index; i < limit; i++) {
    currentCards.append(testimonialCards[i]);
  }
  testimonialsContainer.replaceChildren(currentCards);
}
setProgressBar();
progressBar.addEventListener("input", setProgressBar);


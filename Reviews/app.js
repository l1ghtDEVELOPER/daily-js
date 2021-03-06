// LOCAL REVIES DATA
const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];

// ELEMENTS
const personImg = document.querySelector('#person-img');
const personName = document.querySelector('#author');
const personJob = document.querySelector('#job');
const personInfo = document.querySelector('#info');
const randomBtn = document.querySelector('.random-btn');
const moveBtns = document.querySelectorAll('.move-btn');

//STARTING VALUE
let currentItem = 0;

//FUNCTIONS
const randomNumber = () => (number = Math.floor(Math.random() * 4));
const displayPerson = (person) => {
  let item = reviews[person];
  personImg.src = item.img;
  personName.textContent = item.name;
  personJob.textContent = item.job;
  personImg.textContent = item.text;
};

//Load default Person when page load
window.addEventListener('DOMContentLoaded', () => {
  displayPerson(currentItem);
});

//Previous & Next Buttons
moveBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    btnClass = e.currentTarget.classList;
    if (btn.classList.contains('next-btn')) {
      currentItem++;
      if (currentItem > reviews.length - 1) {
        currentItem = 0;
      }
      displayPerson(currentItem);
    }

    if (btn.classList.contains('prev-btn')) {
      currentItem--;
      if (currentItem < 0) {
        currentItem = reviews.length - 1;
      }
      displayPerson(currentItem);
    }
  });
});

//Random Button
randomBtn.addEventListener('click', () => {
  displayPerson(randomNumber());
});

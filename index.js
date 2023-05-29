const featureEl = document.querySelector('.feature-boxes');
const speakerEl = document.querySelector('.speakers');
const closeBtn = document.querySelector('.close-icon');
const menuBtn = document.querySelector('.mobile-menu-icon');
const navMenu = document.querySelector('.nav-list');

const mobileNav = () => {
  menuBtn.classList.toggle('hidden');
  closeBtn.classList.toggle('hidden');
  navMenu.classList.toggle('hidden');
};

menuBtn.addEventListener('click', mobileNav);
closeBtn.addEventListener('click', mobileNav);

const features = [
  {
    image: 'images/program_icon_01.png',
    title: 'Lecture',
    description:
      'Listen to the speakers from various countries about the messages of sharing and opening.',
  },
  {
    image: 'images/program_icon_02.png',
    title: 'CC Exhibition',
    description:
      'Appreciate various creations applying cc license of artists,organised from Art center Nabi.',
  },
  {
    image: 'images/program_icon_03.png',
    title: 'Forum',
    description:
      'Have time to share you thoughts and opinions with experts for each topic.',
  },
  {
    image: 'images/program_icon_04.png',
    title: 'Workshop',
    description:
      'Try creating your own work using License rather than just watching at it.',
  },
  {
    image: 'images/program_icon_05.png',
    title: 'CC Ignite',
    description:
      'get opportunities to the network with CC affiliate around the world also after the summit.',
  },
];
// const speaskers = [{}];
let featureTemp = '';
features.forEach((element) => {
  const featureCode = `<div class="feature-box">
          <img
            class="feature-logo"
            src="${element.image}"
            alt="Program icon"
          />
          <h3 class="feature-title">${element.title}</h3>
          <p class="feature-desc">
            ${element.description}
          </p>
        </div>`;
  featureTemp += featureCode;
});
featureEl.innerHTML = featureTemp;

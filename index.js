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
      'Appreciate various creations applying cc license of artist,organised from Art center Nabi.',
  },
  {
    image: 'images/program_icon_03.png',
    title: 'Forum',
    description:
      'Have time to share your thoughts and opinions with experts for each topic.',
  },
  {
    image: 'images/program_icon_04.png',
    title: 'Workshop',
    description:
      'Try creating your own work using License rather than just watching it.',
  },
  {
    image: 'images/program_icon_05.png',
    title: 'CC Ignite',
    description:
      'Get opportunities to network with CC affiliates around the world, even after the summit.',
  },
];

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

const speakers = [
  {
    image: 'images/speaker_01.png',
    fullName: 'Yochai Benkler',
    position:
      'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    description:
      'Benkler studies commons-based peer production and published his seminal book, "The Wealth of Networks," in 2006.',
  },
  {
    image: '',
    fullName: 'Seong Noh',
    position:
      'Director of Art Centre Nabi and a board member of CC Korea',
    description:
      'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science, technology, humanities, and the arts.',
  },
  {
    image: 'images/speaker_05.png',
    fullName: 'Lila Tretikov',
    position:
      'Executive Director of the Wikimedia Foundation ',
    description:
      'Lila Tretikov is the Executive of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languag-es and used by nearly half a billion people around the world every month.',
  },
  {
    image: 'images/speaker_04.png',
    fullName: 'Kilnam Chon',
    position:
      '',
    description:
      'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital commons. In 2012, he was inducted into the inaugural class of the Internet Society’s (ISOC) Internet Hall of Fame.',
  },
  {
    image: 'images/speaker_05.png',
    fullName: 'Julia Leda',
    position:
      'President of Young Pirates of Europe',
    description:
      'European ingetration, political democracy and participation of youth through online as her major condern, Reda’s report outlining potential changes to EU copyright law was approved by the Parliament in July',
  },
  {
    image: 'images/speaker_06.png',
    fullName: 'Ryan Merkley',
    position:
      'CEO of Creativve Commons, ex COO of the Mozilla Foundation',
    description:
      'Ryan had been leading open-source projects at the Mozilla Foundation such as the open-source move-ment',
  },
];

let speakerTemp = '';
speakers.forEach((speaker) => {
  const speakerCode = `
  <div class="speaker-box">
  <img
    class="speaker-img"
    src="${speaker.image}"
    alt="Speaker Image"
  />
  <div class="speaker-details">
    <h3 class="speaker-name">${speaker.fullName}</h3>
    <p class="speaker-position">
      ${speaker.position}
    </p>
    <p class="speaker-desc">
      ${speaker.description}
    </p>
  </div>
</div>
    `;
  speakerTemp += speakerCode;
});
speakerEl.innerHTML = speakerTemp;
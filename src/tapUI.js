const $trending = {
  id: document.querySelector('#trending'),
  url: 'https://1boon.kakao.com/ch/trending.json',
};
const $issue = {
  id: document.querySelector('#issue'),
  url: 'https://1boon.kakao.com/ch/issue.json',
};
const $enter = {
  id: document.querySelector('#enter'),
  url: 'https://1boon.kakao.com/ch/enter.json',
};

const $tabs = [$trending.id, $issue.id, $enter.id];

function modifyActive(tab) {
  for (let i = 0; i < $tabs.length; i++) {
    $tabs[i].classList.remove('active');
  }
  $tabs[tab].classList.add('active');
}

function openTab() {
  for (let i = 0; i < $tabs.length; i++) {
    $tabs[i].addEventListener('click', (event) => {
      modifyActive(i);
    });
  }
}

export { openTab };

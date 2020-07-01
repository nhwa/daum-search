import { fetchData, showLoading } from './data-manager';

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

const $tabs = [$trending, $issue, $enter];
let pagenum = 1;

const $viewMore = document.querySelector('#viewMore');

function moreView() {
  $viewMore.addEventListener('click', (event) => {
    for (let i = 0; i < $tabs.length; i++) {
      if ($tabs[i].id.classList == 'active') {
        pagenum++;
        fetchData(i, pagenum);
      }
    }
  });
}

export { moreView };

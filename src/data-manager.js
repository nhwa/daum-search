import { render } from './html-render';

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

const $list = document.querySelector('#list');
const $viewMore = document.querySelector('#viewMore');

let pagenum = 1;
let pagesize = 50;

function showViewMore() {
  $viewMore.classList.add('show');
}
function hideViewMore() {
  $viewMore.classList.remove('show');
}
function showLoading() {
  $list.innerHTML += `<div id="loading" class="text-center">
  <span class="glyphicon glyphicon-refresh"></span> 로딩중
  </div>`;
}
function hideLoading() {
  const $loading = document.querySelector('#loading');
  $loading.remove();
}

function error() {
  alert('데이터를 가져올 수 없습니다!');
}

function init() {
  $list.innerHTML = '';
  hideViewMore();
}

function fetchData(tab, pagenum) {
  showLoading();
  fetch(`${$tabs[tab].url}?&pagesize=${pagesize}&page=${pagenum}&callback=`)
    .then((response) => response.json())
    .then((json) => {
      hideLoading();
      const datas = json.data;
      render(datas);
    })
    .catch(error);
}

function loadData() {
  fetchData(0, pagenum);
  for (let i = 0; i < $tabs.length; i++) {
    $tabs[i].id.addEventListener('click', (event) => {
      init();
      fetchData(i, pagenum);
    });
  }
}

export { loadData, fetchData, showLoading, showViewMore };

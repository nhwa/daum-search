import { showViewMore } from './data-manager';

const $list = document.querySelector('#list');

function render(data) {
  const datas = data;
  $list.innerHTML += '<ul class="list-group">';
  const $ul = document.querySelector('.list-group');
  for (let n = 0; n < datas.length; n++) {
    const html = `<li><a href=" https://1boon.kakao.com/${datas[n].path}" target="_blank">
    <div class="wrapper"><img src= ${datas[n].coverImage} /></div>
    <div>${datas[n].title}</div><div class="totalview">${datas[n].totalView} 읽음</div></a></li>`;
    $ul.innerHTML += `${html}`;
  }
  $list.innerHTML += '</ul>';
  showViewMore();
}

export { render };

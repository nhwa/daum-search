START-FE
=============
### 고급웹개발
- Daum 1boon 서비스 만들기

#### SKILL  
` HTML5, CSS, JavasCript `

<p align="left">
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/>
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/>
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/></p>

-------------
<br />

### kakao 1boon 사이트 url을 통해 가져온 데이터를 활용하여 1boon 서비스 구축
#### 요구사항
- fetch api 사용
- html-rendering, loading&hiding, opentab, moreview 구현
- 기능 모듈화, 함수화
- eslint, prettier, webpack, babel 설정

-------------
<br />

* Ajax : 웹 페이지 전체를 다시 로딩하지 않고도, 웹 페이지의 일부분만을 갱신할 수 있게 해줍니다.  
즉, Ajax를 이용하면 백그라운드 영역에서 서버와 통신하여, 그 결과를 웹 페이지의 일부분(DOM)에만 표시할 수 있습니다.  

fetch API (Promise 기반 비동기 처리 프로그래밍 방식)
```
fetch('ajax_intro_data.txt')
    .then( response => response.text() )
    .then( text => { document.getElementById("#t").innerHTML = text; } )

/* 'fetch('서버주소')' 는 웹 브라우저에게 '이 서버주소로 요청해줘' 라는 의미이고, 
뒤에 .then이 붙으면 '요청 끝나고나서 이 할일을 해줘!' 라는 것이다. */
```

https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-AJAX-%EC%84%9C%EB%B2%84-%EC%9A%94%EC%B2%AD-%EB%B0%8F-%EC%9D%91%EB%8B%B5-fetch-api-%EB%B0%A9%EC%8B%9D
<br />

-------------

<br />

####  #loading 화면
![image](https://user-images.githubusercontent.com/44343908/86257923-262bae80-bbf5-11ea-8eec-04f0a24a05f4.png)
![image](https://user-images.githubusercontent.com/44343908/86260180-e6b29180-bbf7-11ea-8f4a-e8d7052cd5c4.png)
![image](https://user-images.githubusercontent.com/44343908/86260221-f4681700-bbf7-11ea-8a65-0dca0806dc9a.png)

-------------
<br />

####  #채널 탭 화면
![image](https://user-images.githubusercontent.com/44343908/86258148-74d94880-bbf5-11ea-8008-4d1ac82fdf2d.png)
![image](https://user-images.githubusercontent.com/44343908/86258305-a3efba00-bbf5-11ea-87b8-9dc5d530407b.png)
![image](https://user-images.githubusercontent.com/44343908/86258063-57a47a00-bbf5-11ea-88d9-e0a77a895719.png)

-------------
<br />

####  #더보기 화면
![image](https://user-images.githubusercontent.com/44343908/86258604-f3ce8100-bbf5-11ea-83c8-a9dd06cc868e.png)
![image](https://user-images.githubusercontent.com/44343908/86258618-f92bcb80-bbf5-11ea-9638-da3898e33fa7.png)

-------------
<br />

####  #list 클릭시 path로 이동
![image](https://user-images.githubusercontent.com/44343908/86259463-01d0d180-bbf7-11ea-8de4-a263b78b1ab4.png)


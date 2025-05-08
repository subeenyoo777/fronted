// 년, 월, 일_가져오기
const txtYear = document.querySelector("#txtYear");
const selMon = document.querySelector("#selMon");
const selDay = document.querySelector("#selDay");

const init = () => {
  //어제 날짜 구하기
  const today = new Date();
  console.log(today);
  //년, 월, 일 분리 => 요소 안에 보여주기
  const year = today.getFullYear();
  const month = today.getMonth() + 1; //월 : 0부터 시작
  const day = today.getDate() - 1; // 어제

  txtYear.value = year;
  selMon.value = month < 10 ? "0" + month : month;
  selDay.value = day < 10 ? "0" + day : day;
};

init();

//사용자가 입력한 년, 월, 일 가져오기

document.querySelector("button").addEventListener("click", () => {
  const targetDt = txtYear.value + selMon.value + selDay.value;
  const url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=3b8766b9e6e06bf8c57ae6667382c00c&targetDt=${targetDt}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      //   {console.log(data)}
      console.log(data.boxOfficeResult);
      console.log(data.boxOfficeResult.dailyBoxOfficeList);

      const boxList = data.boxOfficeResult.dailyBoxOfficeList;

      let list = ``;

      boxList.forEach((movie) => {
        list += `${movie.rank} 위`;

        const rankInten = parseInt(movie.rankInten);

        // console.log(movie.rank);
        // console.log(movie.rankInten);
        // console.log(movie.moiveNm);
        if (rankInten > 0) {
          list += "( ▲ ";
        } else if (rankInten < 0) {
          list += "( ▼ ";
        } else {
          list += "( ";
        }

        list += `${movie.rankInten} ) `;

        list += `<a href='#' onclick='javascript:movieInfo(${movie.movieCd})'>${movie.movieNm}</a>`;
        list += `<br>`;
      });
      console.log(list);
      document.querySelector("#rank").innerHTML = list;
    });
});

//영화상세정보
const movieInfo = (movieCd) => {
  console.log(movieCd);
  const url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=3b8766b9e6e06bf8c57ae6667382c00c&movieCd=${movieCd}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.movieInfoResult.movieInfo);
      let movieInfo = data.movieInfoResult.movieInfo;
      console.log(movieInfo);

      // 결과변수
      let result = `<ui>`;

      //영화제목 movieNm
      const movieNm = movieInfo.movieNm;

      //영어제목 movieNmEn
      const movieNmEn = movieInfo.movieNmEn;

      //상영시간 showTm
      const showTm = movieInfo.showTm;

      result += `<li>영화제목 : ${movieNm}</li>`;
      result += `<li>영어제목 : ${movieNmEn}</li>`;
      result += `<li>상영시간 : ${showTm}</li>`;

      //감독(영어명) directors.peopleNmEn
      //   directors:Array(1)0:{peopleNm: '김형주', peopleNmEn: 'KIM Hyung-ju'}
      let directorsNm = "";
      movieInfo.directors.forEach((directors) => {
        console.log(directors.peopleNm);
        directorsNm += directors.peopleNm + ",";
      });
      result += `<li>감독 : ${directorsNm}</li>`;

      //   //배우(영어명) actors.peopleNm
      let actorsNM = "";
      movieInfo.actors.forEach((directors) => {
        actorsNM += actorsNM.peopleNm + ",";
      });

      result += `<li>배우 : ${actorsNM}</li>`;
      result += `</ul>`;

      document.querySelector("#info").innerHTML = result;
      console.log(info);

      // let infoDirectors = data.movieInfoResult.movieInfo.directors;
      // let infoActors = data.movieInfoResult.movieInfo.actors;

      //     const directorsNm = infoDirectors[0].peopleNm;

      //   //            directors[0].peopleNmEn
      //   const directorsENm = infoDirectors[0].peopleNmEn;

      //   //
      //   //   });
    });
};

import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useMovieStore = defineStore('movie', () => {

  const genre = {
    "genres":
      [{ "id": 28, "name": "액션" },
      { "id": 12, "name": "모험" },
      { "id": 16, "name": "애니메이션" },
      { "id": 35, "name": "코미디" },
      { "id": 80, "name": "범죄" },
      { "id": 99, "name": "다큐멘터리" },
      { "id": 18, "name": "드라마" },
      { "id": 10751, "name": "가족" },
      { "id": 14, "name": "판타지" },
      { "id": 36, "name": "역사" },
      { "id": 27, "name": "공포" },
      { "id": 10402, "name": "음악" },
      { "id": 9648, "name": "미스터리" },
      { "id": 10749, "name": "로맨스" },
      { "id": 878, "name": "공상 과학" },
      { "id": 10770, "name": "TV 영화" },
      { "id": 53, "name": "스릴러" },
      { "id": 10752, "name": "전쟁" },
      { "id": 37, "name": "서부" }]
  }

  const movie = ref([

  ])

  const getMovie = (movie_title) => {
    axios({
      method: 'get',
      url: 'http://127.0.0.1:8000/movies/'
    })
      .then((res) => {
        movie.value = res.data.filter(item => item.title === movie_title);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  return { genre, movie, getMovie }
}, { persist: true })

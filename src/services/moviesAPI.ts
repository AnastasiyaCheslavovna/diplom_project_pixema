import axios from "axios";
import { FilterValue, IMovieDetailsAPI, IMoviesResponseAPI } from "types";

class MoviesAPI {
  private readonly BASE_URL = process.env.REACT_APP_MOVIE_BASE_URL as string;
  private readonly API_KEY = process.env.REACT_APP_MOVIE_API_KEY as string;

  private readonly API = axios.create({
    baseURL: this.BASE_URL,
  });

  private readonly words = [
    "Batman",
    "War",
    "love",
    "money",
    "friends",
    "Thor",
    "avengers",
    "women",
    "star",
    "man",
  ];

 

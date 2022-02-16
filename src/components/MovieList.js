import { CardGroup } from "react-bootstrap";
import Movie from "../components/Movie";


function MovieList(props) {
  //console.log(props);
  let moviesArr = Object.entries(props.movies);
  console.log(moviesArr);

  return (
    <>
      <CardGroup>
        { props.movies &&
           props.movies.map((movie) => {
            return (
              <Movie movie = {movie}/>
            );
          })}
      </CardGroup>


    </>
  );
}

export default MovieList;

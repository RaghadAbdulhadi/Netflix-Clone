import MovieList from "./MovieList";
import React, { useEffect, useState } from "react";
import { Container, Row} from 'react-bootstrap';

function Home() {
  const [movies, setMovies] = useState();

  const fetchData = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER}/trending`);
      const moviesData = await response.json();
      setMovies(moviesData);
    } catch (error) {
      console.log(error);
    }
  };


const updateComments = (data, id)=>{
  let updateComment = movies.map(movie=>{
    if(movie.id === id){
       movie.comment = data.userComment;
       console.log('1133',movie.comment);
       console.log('555',movie)
       return movie;
    }else{
      return movie;
    }
      
  })
  setMovies(updateComment);
}

  console.log(movies)
  //Side Effects in the component, like fetching data
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <h1>Choose Your Movie</h1>
      <main>
        {movies && (
          <Container fluid className="main-container">
            <Row className="flex-row">
              <MovieList movies={movies} updateComments={updateComments}/>
            </Row>
          </Container>
        )}
      </main>
    </>
  );
}
export default Home;

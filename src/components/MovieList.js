import { Card, CardGroup, Button } from 'react-bootstrap';

function MovieList(props) {
  //console.log(props);
  let moviesArr = Object.entries(props.movies);
  //console.log(moviesArr);
  return (
    <>
      <CardGroup>
        {moviesArr.map((movie) => {
          return (
            <div key= {movie.id}>
                <Card key= {movie.id}>
                  <Card.Img variant="top" src={} />
                  <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text></Card.Text>
                  </Card.Body>
                </Card>
            </div>
          );
        })}
      </CardGroup>
    </>
  );
}

export default MovieList;

import { Card, Button } from "react-bootstrap";
import {useState} from 'react';
import ModalMovie from "../components/ModalMovie";

function Movie(props) {
  const [show, setShow] = useState(false);
  return (
    <>
      {
        <div key={props.id}>
          <Card key={props.id}>
            <Card.Body>
              <Card.Img
                variant="top"
                src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`}
              />
              <Card.Title>{props.movie.title}</Card.Title>
              <Card.Text>{props.movie.Bodyrelease_date} </Card.Text>
              <Card.Text>{props.movie.overview}</Card.Text>
              <Button variant="primary" onClick={()=>{setShow(true)}}>Add to Favorites</Button>
            </Card.Body>
          </Card>
          {/* <ModalMovie show = {show} /> */}
        </div>
      }
    </>
  );
}
export default Movie;

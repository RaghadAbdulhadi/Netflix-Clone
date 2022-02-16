import { Card, Button } from "react-bootstrap";
import {useState} from 'react';
import ModalMovie from "../components/ModalMovie";

function Movie(props) {
  const [show, setShow] = useState(false);
  const [movie, setMovie] = useState();
  // function handleClick (props) {
  //   setShow(true)
  //   setMovie(props)
  // }
  console.log("llll",props)
  return (
    <>
    
      {
        
        <div>
          
          <Card>
            <Card.Body>
              <Card.Img
                variant="top"
                src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`}
              />
              {/* <Card.Title>{props.movie.title}</Card.Title>
              <Card.Text>{props.movie.release_date} </Card.Text> */}
              <Card.Text>{props.movie.overview}
              
              </Card.Text>
              
              <Button variant="primary" onClick={()=>{setShow(true);setMovie(props.movie)}}>Add to Favorites</Button>
            </Card.Body>
          </Card>
          
{          movie &&<ModalMovie show={show} movie={movie} handleClose={()=>{setShow(false)}} updateComments= {props.movie.updateComments}/> }
        </div>
      }
    </>
  );
}
export default Movie;

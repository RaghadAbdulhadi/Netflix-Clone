import { Button, Modal, Form } from "react-bootstrap/";
import { useRef } from "react";

function ModalMovie(props) {
  console.log("888", props.movie);

  const commentRef = useRef();
  function handleComment(event) {
    event.preventDefault();
    const userComment = commentRef.current.value;
    const newComment = { ...props.movie, userComment };
    props.movie.updateComments(newComment, props.movie.id);
  }

  
  async function addToFavorite (props) {
    try{
        const res = await fetch(`${process.env.REACT_APP_SERVER}/addMovie`, {
          method: "POST",
          headers: {
              'Accept': 'applicatio/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              title: props.movie.title,
              image: props.movie.image,
              comment: props.ModalMoviemovie.comment,
          })
        })
        const data = await res.json();
    } catch (error) {
        console.log("error", error)
    }
  }



  return (
    <>
      <Modal
        show={props.show}
        onHide={() => {
          props.handleClose();
        }}
      >
        <Modal.Header closeButton>
          {/* <Modal.Title>{props.movie.overview}</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <img
            width="100%"
            src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`}
            alt={props.movie.title}
          />
          <h2>{props.movie.title}</h2>
        </Modal.Body>
        <Modal.Footer>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Comment:</Form.Label>
            <Form.Control
              type="textarea"
              ref={commentRef}
              placeholder="Please Write your Comment"
            />
          </Form.Group>

          <Button
            className="addBtn"
            variant="primary"
            type="submit"
            onClick={handleComment}
          >
            Add Comment
          </Button>

          <Button
            variant="secondary"
            onClick={() => {
              props.handleClose();
            }}
          >
            Close
          </Button>

          <Button
            variant="success"
            onClick={() => {
             addToFavorite(props.movie);
            }}
          >
            Add to Favorites
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ModalMovie;

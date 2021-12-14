import styled from "styled-components";
import { useRef } from "react";

import Card from "../ui/Card";

const Form = styled.div`
  padding: 1rem;
`;
const Box = styled.div`
  margin-bottom: 0.5rem;

  label {
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  input,
  textarea {
    display: block;
    font: inherit;
    border-radius: 4px;
    border: 1px solid #ccc;
    padding: 0.25rem;
    width: 100%;
  }
`;

const Actions = styled.div`
  margin-top: 1rem;
  text-align: right;

  button {
    font: inherit;
    cursor: pointer;
    background-color: #77002e;
    color: white;
    padding: 0.5rem 1.5rem;
    border: 1px solid #77002e;
    border-radius: 4px;
    font-weight: bold;
  }

  button:hover,
  button:active {
    background-color: #a50e48;
    border-color: #a50e48;
  }
`;

function NewMeetUpForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetUpData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    props.onAddMeetUp(meetUpData);
  }

  return (
    <Card>
      <Form onSubmit={submitHandler}>
        <Box>
          <label htmlFor='title'>Meetup Title</label>
          <input type='text' required id='title' ref={titleInputRef} />
        </Box>

        <Box>
          <label htmlFor='image'>Meetup Image</label>
          <input type='url' required id='image' ref={imageInputRef} />
        </Box>

        <Box>
          <label htmlFor='address'>Address</label>
          <input type='text' required id='address' ref={addressInputRef} />
        </Box>

        <Box>
          <label htmlFor='description'>Description</label>
          <textarea
            id='description'
            required
            rows='5'
            ref={descriptionInputRef}
          ></textarea>
        </Box>

        <Actions>
          <button onClick={submitHandler}>Add Meetup</button>
        </Actions>
      </Form>
    </Card>
  );
}

export default NewMeetUpForm;

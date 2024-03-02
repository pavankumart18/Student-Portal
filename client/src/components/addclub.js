import React, { useState} from 'react';
import axios from 'axios';
import { Form, Row, Col, Button } from 'react-bootstrap';
import {useNavigate} from "react-router-dom";
import './style.css'
const AddClub = (props) => {
    const nav=useNavigate()
  const [file, setFile] = useState(null);
  const [state, setState] = useState({
    title: '',
    description: ''
  });
  const [errorMsg, setErrorMsg] = useState('');
  const handleInputChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    try {
      const { title, description } = state;
      if (title.trim() !== '' && description.trim() !== '') {
        if (file) {
          const formData = new FormData();
          formData.append('file', file);
          formData.append('title', title);
          formData.append('description', description);

          setErrorMsg('');
          await axios.post("http://localhost:9000/upload/sem", formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
          
        } else {
          setErrorMsg('Please select a file to add.');
        }
        nav('/SemDownload')
      } else {
        setErrorMsg('Please enter all the field values.');
      }
    } catch (error) {
      error.response && setErrorMsg(error.response.data);
    }
  };

  return (
    <React.Fragment>
        <h1>Upload your sem notes</h1>
      <Form className="search-form" onSubmit={handleOnSubmit}>
        {errorMsg && <p className="errorMsg">{errorMsg}</p>}
        <Row>
          <Col>
            <Form.Group controlId="title">
              <Form.Control
                type="text"
                name="title"
                value={state.title || ''}
                placeholder="Enter subject"
                onChange={handleInputChange}
                style={{margin:'20px'}}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="description">
              <Form.Control
                type="text"
                name="description"
                value={state.description || ''}
                placeholder="write about the file"
                onChange={handleInputChange}
                style={{margin:'20px'}}
              />
            </Form.Group>
          </Col>
        </Row>
        <div className="upload-section">
           <input type="file" onChange={(e)=>setFile(e.target.files[0])}/>
        </div>
        <Button variant="primary" type="submit" style={{position:'relative',bottom:'160px',left:'130px'}}>
          Submit
        </Button>
      </Form>
    </React.Fragment>
  );
};

export default AddClub;
<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
=======
import React, { useState } from 'react';
>>>>>>> f4a1c88b3c2ad3c1e0f5b8b0742b7b2b716cbfa2
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
<<<<<<< HEAD
import './App.css';
=======
import './App.css'; 
>>>>>>> f4a1c88b3c2ad3c1e0f5b8b0742b7b2b716cbfa2

const App = () => {
  const [referrerID, setReferrerID] = useState('');
  const [referredFirstName, setReferredFirstName] = useState('');
  const [referredLastName, setReferredLastName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [relationship, setRelationship] = useState('');
  const [course, setCourse] = useState('');
<<<<<<< HEAD
  const [courses, setCourses] = useState([]);
  const [strands, setStrands] = useState([]);
  const [tesdaCourses, setTesdaCourses] = useState([]);
  const [relationships, setRelationships] = useState([]);
  const [studentLevel, setStudentLevel] = useState('');
  const [modalMessage, setModalMessage] = useState('');
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('https://script.google.com/macros/s/AKfycby-wPsbelJ6wjm6mJwsjL7hltt6C_pCOPW5yobt02tEIE3ZdFPxNQcPsJKNrMZICeOF/exec?action=getCourses');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Fetched courses data:', data);

        if (data.courses && Array.isArray(data.courses) && data.courses.length > 0) {
          console.log('Setting courses:', data.courses);
          setCourses(data.courses);
        } else {
          console.error('No courses found or response format is incorrect.');
        }
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    const fetchStrands = async () => {
      try {
        const response = await fetch('https://script.google.com/macros/s/AKfycby-wPsbelJ6wjm6mJwsjL7hltt6C_pCOPW5yobt02tEIE3ZdFPxNQcPsJKNrMZICeOF/exec?action=getStrands');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Fetched strands data:', data);

        if (data.strands && Array.isArray(data.strands) && data.strands.length > 0) {
          console.log('Setting strands:', data.strands);
          setStrands(data.strands);
        } else {
          console.error('No strands found or response format is incorrect.');
        }
      } catch (error) {
        console.error('Error fetching strands:', error);
      }
    };

    const fetchTesda = async () => {
      try {
        const response = await fetch('https://script.google.com/macros/s/AKfycby-wPsbelJ6wjm6mJwsjL7hltt6C_pCOPW5yobt02tEIE3ZdFPxNQcPsJKNrMZICeOF/exec?action=getTESDA');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Fetched TESDA courses data:', data);

        if (data.tesda && Array.isArray(data.tesda) && data.tesda.length > 0) {
          console.log('Setting TESDA courses:', data.tesda);
          setTesdaCourses(data.tesda);
        } else {
          console.error('No TESDA courses found or response format is incorrect.');
        }
      } catch (error) {
        console.error('Error fetching TESDA courses:', error);
      }
    };

    const fetchRelationships = async () => {
      try {
        const response = await fetch('https://script.google.com/macros/s/AKfycby-wPsbelJ6wjm6mJwsjL7hltt6C_pCOPW5yobt02tEIE3ZdFPxNQcPsJKNrMZICeOF/exec?action=getRelationships');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Fetched relationships data:', data);
  
        if (data.relationships && Array.isArray(data.relationships) && data.relationships.length > 0) {
          console.log('Setting relationships:', data.relationships);
          setRelationships(data.relationships);
        } else {
          console.error('No relationships found or response format is incorrect.');
        }
      } catch (error) {
        console.error('Error fetching relationships:', error);
      }
    };

    fetchCourses();
    fetchStrands();
    fetchTesda();
    fetchRelationships();
  }, []);

=======
  const [modalMessage, setModalMessage] = useState('');
  const [modalShow, setModalShow] = useState(false);

>>>>>>> f4a1c88b3c2ad3c1e0f5b8b0742b7b2b716cbfa2
  const handleSubmit = async () => {
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycby-wPsbelJ6wjm6mJwsjL7hltt6C_pCOPW5yobt02tEIE3ZdFPxNQcPsJKNrMZICeOF/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          action: 'addReferredPersonInfo',
          referrerID,
          referredFirstName,
          referredLastName,
          email,
          contact,
          relationship,
          course,
        }),
      });
      const data = await response.json();
      if (data.message.includes('successfully')) {
        setModalMessage('Referred person info added successfully.');
        setReferrerID('');
        setReferredFirstName('');
        setReferredLastName('');
        setEmail('');
        setContact('');
        setRelationship('');
        setCourse('');
      } else {
        setModalMessage(data.message);
      }
      setModalShow(true);
    } catch (error) {
      console.error('Error adding referred person info:', error);
      setModalMessage('Error adding referred person info. Please check the console for details.');
      setModalShow(true);
    }
  };
<<<<<<< HEAD

  const handleStudentLevelChange = (e) => {
    setStudentLevel(e.target.value);
    setCourse(''); 
  };
=======
  
>>>>>>> f4a1c88b3c2ad3c1e0f5b8b0742b7b2b716cbfa2

  return (
    <div className="refer-page-container">
      <div className="row justify-content-center">
<<<<<<< HEAD
        <div className="col-md-12 refer-form">
          <h1 className="text-center mb-4">Refer Now</h1>
          <Form>
            <div className="row">
              <div className="col-md-12">
                <Form.Group controlId="referrerID">
                  <Form.Label>Referral Code:</Form.Label>
                  <Form.Control type="text" value={referrerID} onChange={(e) => setReferrerID(e.target.value)} />
                </Form.Group>
              </div>
              <div className="col-md-12">
                <Form.Group controlId="referredFirstName">
                  <Form.Label>First Name:</Form.Label>
                  <Form.Control type="text" value={referredFirstName} onChange={(e) => setReferredFirstName(e.target.value)} />
                </Form.Group>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <Form.Group controlId="referredLastName">
                  <Form.Label>Last Name:</Form.Label>
                  <Form.Control type="text" value={referredLastName} onChange={(e) => setReferredLastName(e.target.value)} />
                </Form.Group>
              </div>
              <div className="col-md-12">
=======
        <div className="col-md-6 refer-form">
          <h1 className="text-center mb-4">Refer Now</h1>
          <Form>
            <div className="row">
              <div className="col-md-6">
                <Form.Group controlId="referrerID">
                  <Form.Label>Referreral Code:</Form.Label>
                  <Form.Control type="text" value={referrerID} onChange={(e) => setReferrerID(e.target.value)} />
                </Form.Group>
                <div className="row">
                  <div className="col-md-6">
                    <Form.Group controlId="referredFirstName">
                      <Form.Label>First Name:</Form.Label>
                      <Form.Control type="text" value={referredFirstName} onChange={(e) => setReferredFirstName(e.target.value)} />
                    </Form.Group>
                  </div>
                  <div className="col-md-6">
                    <Form.Group controlId="referredLastName">
                      <Form.Label>Last Name:</Form.Label>
                      <Form.Control type="text" value={referredLastName} onChange={(e) => setReferredLastName(e.target.value)} />
                    </Form.Group>
                  </div>
                </div>
>>>>>>> f4a1c88b3c2ad3c1e0f5b8b0742b7b2b716cbfa2
                <Form.Group controlId="email">
                  <Form.Label>Email:</Form.Label>
                  <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
<<<<<<< HEAD
              </div>
            </div>
            <div className="row">
=======
                <Form.Group controlId="relationship">
                  <Form.Label>Relationship:</Form.Label>
                  <Form.Control type="text" value={relationship} onChange={(e) => setRelationship(e.target.value)} />
                </Form.Group>
              </div>
>>>>>>> f4a1c88b3c2ad3c1e0f5b8b0742b7b2b716cbfa2
              <div className="col-md-6">
                <Form.Group controlId="contact">
                  <Form.Label>Contact:</Form.Label>
                  <Form.Control type="text" value={contact} onChange={(e) => setContact(e.target.value)} />
                </Form.Group>
<<<<<<< HEAD
              </div>
              <div className="col-md-6">
                <Form.Group controlId="relationship">
                  <Form.Label>Relationship:</Form.Label>
                  <Form.Control as="select" value={relationship} onChange={(e) => setRelationship(e.target.value)}>
                    <option value="">Select a relationship</option>
                    {relationships.map((relationship, index) => (
                      <option key={index} value={relationship}>{relationship}</option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <Form.Group controlId="studentLevel">
                  <Form.Label>Student Level:</Form.Label>
                  <Form.Control as="select" value={studentLevel} onChange={handleStudentLevelChange}>
                    <option value="">Select a student level</option>
                    <option value="College">College</option>
                    <option value="SHS">SHS</option>
                    <option value="TESDA">TESDA</option>
                  </Form.Control>
                </Form.Group>
              </div>
              <div className="col-md-12">
                {studentLevel === 'College' && (
                  <Form.Group controlId="course">
                    <Form.Label>Course:</Form.Label>
                    <Form.Control as="select" value={course} onChange={(e) => setCourse(e.target.value)}>
                      <option value="">Select a course</option>
                      {courses.map((course, index) => (
                        <option key={index} value={course}>{course}</option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                )}
                {studentLevel === 'SHS' && (
                  <Form.Group controlId="course">
                    <Form.Label>Strand:</Form.Label>
                    <Form.Control as="select" value={course} onChange={(e) => setCourse(e.target.value)}>
                      <option value="">Select a strand</option>
                      {strands.map((strand, index) => (
                        <option key={index} value={strand}>{strand}</option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                )}
                {studentLevel === 'TESDA' && (
                  <Form.Group controlId="course">
                    <Form.Label>TESDA Course:</Form.Label>
                    <Form.Control as="select" value={course} onChange={(e) => setCourse(e.target.value)}>
                      <option value="">Select a TESDA course</option>
                      {tesdaCourses.map((tesdaCourse, index) => (
                        <option key={index} value={tesdaCourse}>{tesdaCourse}</option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                )}
              </div>
            </div>
=======
                <Form.Group controlId="course">
                  <Form.Label>Course:</Form.Label>
                  <Form.Control type="text" value={course} onChange={(e) => setCourse(e.target.value)} />
                </Form.Group>
              </div>
            </div>
>>>>>>> f4a1c88b3c2ad3c1e0f5b8b0742b7b2b716cbfa2
            <Button variant="danger" onClick={handleSubmit} className="mt-3">Submit</Button>
          </Form>
        </div>
      </div>

      <Modal show={modalShow} onHide={() => setModalShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Message</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setModalShow(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default App;

import React from 'react';
import { Button, Container } from 'react-bootstrap';

function FormPage({ closeForm, submitForm }) {
  return (
    <Container>
      <h2> Partner Application Form </h2>
      <Container className="form-container">
        <iframe
          className="airtable-embed"
          src="https://airtable.com/embed/shrTwgwpPawADJ5O0?backgroundColor=yellow"
          frameborder="0"
          onmousewheel=""
          width="100%"
          height="533"
          style={{ background: 'transparent', border: '1px solid #ccc' }}
          title="partner application"
        ></iframe>
      </Container>
      <Button onClick={closeForm}>Back to Dashboard</Button>
    </Container>
  );
}

export default FormPage;

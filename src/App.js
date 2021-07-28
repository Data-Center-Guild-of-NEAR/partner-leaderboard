import React, { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import './App.css';

import Dash from './pages/Dash';
import Form from './pages/Form';

function App() {
  // open and close form
  const [form, setForm] = useState(false);
  const openForm = () => {
    setForm(true);
  };
  const closeForm = () => {
    setForm(false);
  };

  // get total result
  const [totalTransactions, setTotalTransactions] = useState('');
  const [totalUser, setTotalUser] = useState('');
  const [totalValue, setTotalValue] = useState('');
  useEffect(() => {
    const fetchResult = async () => {
      let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

      var requestOptions = {
        method: 'GET',
        redirect: 'follow',
      };
      for (const n of array) {
        try {
          let res = await fetch(
            'http://35.236.73.215/connect/result/' + n,
            requestOptions
          ).then((response) => response.json());
          if (n === 1) {
            setTotalUser(JSON.parse(res.query_result));
          }
          if (n === 2) {
            setTotalTransactions(JSON.parse(res.query_result));
          }
          if (n === 9) {
            setTotalValue(JSON.parse(res.query_result));
          }
        } catch (e) {
          console.log(e);
        }
      }
    };
    fetchResult();
  }, []);
  return (
    <Container>
      <h1>NEAR Dapps</h1>

      {form ? (
        <Form closeForm={closeForm} />
      ) : (
        <>
          <h3>Trending part</h3>
          <Dash
            totalTransactions={totalTransactions}
            totalUser={totalUser}
            totalValueTx={totalValue}
          />
          <Button onClick={openForm}>
            Partners with us? Apply to be on the board
          </Button>
        </>
      )}
    </Container>
  );
}

export default App;

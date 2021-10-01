import React, { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import './App.css';

import Dash from './pages/Dash';
import Form from './pages/Form';
import Trending from './pages/Trending';

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
  // get 30d result
  const [totalTransactions_30d, setTotalTransactions_30d] = useState('');
  const [totalUser_30d, setTotalUser_30d] = useState('');
  const [totalValue_30d, setTotalValue_30d] = useState('');
  // get 7d result
  const [totalTransactions_7d, setTotalTransactions_7d] = useState('');
  const [totalUser_7d, setTotalUser_7d] = useState('');
  const [totalValue_7d, setTotalValue_7d] = useState('');
  // get 24H result
  const [totalTransactions_24h, setTotalTransactions_24h] = useState('');
  const [totalUser_24h, setTotalUser_24h] = useState('');
  const [totalValue_24h, setTotalValue_24h] = useState('');
  // get trending state
  const [totalTransactions_12h, setTotalTransactions_12h] = useState('');

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
            'https://api.near-pulse.com/result/' + n,
            requestOptions
          ).then((response) => response.json());
          if (n === 1) {
            setTotalTransactions(JSON.parse(res.query_result));
          }
          if (n === 2) {
            setTotalTransactions_30d(JSON.parse(res.query_result));
          }
          if (n === 3) {
            setTotalTransactions_7d(JSON.parse(res.query_result));
          }
          if (n === 4) {
            setTotalTransactions_24h(JSON.parse(res.query_result));
          }
          if (n === 5) {
            setTotalTransactions_12h(JSON.parse(res.query_result));
          }
          if (n === 6) {
            setTotalUser(JSON.parse(res.query_result));
          }
          if (n === 7) {
            setTotalUser_30d(JSON.parse(res.query_result));
          }
          if (n === 8) {
            setTotalUser_7d(JSON.parse(res.query_result));
          }
          if (n === 9) {
            setTotalUser_24h(JSON.parse(res.query_result));
          }
          if (n === 10) {
            setTotalValue(JSON.parse(res.query_result));
          }
          if (n === 11) {
            setTotalValue_30d(JSON.parse(res.query_result));
          }
          if (n === 12) {
            setTotalValue_7d(JSON.parse(res.query_result));
          }
          if (n === 13) {
            setTotalValue_24h(JSON.parse(res.query_result));
          }
        } catch (e) {
          console.log(e);
        }
      }
    };
    // fetchResult();
  }, []);

  return <></>;
  // return (
  //   <Container>
  //     <h1>Awesome NEAR</h1>

  //     {form ? (
  //       <Form closeForm={closeForm} />
  //     ) : (
  //       <>
  //         <Trending transactions={totalTransactions_12h} />
  //         <Dash
  //           totalTransactions={totalTransactions}
  //           totalUser={totalUser}
  //           totalValueTx={totalValue}
  //           totalTransactions_30d={totalTransactions_30d}
  //           totalUser_30d={totalUser_30d}
  //           totalValue_30d={totalValue_30d}
  //           totalTransactions_7d={totalTransactions_7d}
  //           totalUser_7d={totalUser_7d}
  //           totalValue_7d={totalValue_7d}
  //           totalTransactions_24h={totalTransactions_24h}
  //           totalUser_24h={totalUser_24h}
  //           totalValue_24h={totalValue_24h}
  //         />
  //         <Button onClick={openForm}>
  //           Partners with us? Apply to be on the board
  //         </Button>
  //       </>
  //     )}
  //   </Container>
  // );
}

export default App;

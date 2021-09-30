import React, { useState } from 'react';
import BN from 'bn.js';
import { Button, Table, Row, Container } from 'react-bootstrap';

import Category from '../data/new-category-list.json';
import Partner from '../data/new-partner-list.json';

function Dash({
  totalTransactions,
  totalUser,
  totalValueTx,
  totalTransactions_30d,
  totalUser_30d,
  totalValue_30d,
  totalTransactions_7d,
  totalUser_7d,
  totalValue_7d,
  totalTransactions_24h,
  totalUser_24h,
  totalValue_24h,
}) {
  // general table item
  const [cat, setC] = useState('DApps');

  // timeline state
  const time = ['From Start Date', '30D', '7D', '24H'];
  const [timeline, setTimeline] = useState('From Start Date');

  const DTr = ({
    num,
    logo,
    title,
    link,
    categories,
    userAmount,
    totalValue,
    transactions,
  }) => {
    return (
      <tr key={num} className="table-item">
        <td>{num}</td>
        <td>
          <div>
            <img src={logo} alt="" className="logo" />
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: 'none', color: '#A45C40' }}
            >
              <strong style={{ fontSize: '1.2rem' }}>{title}</strong>
            </a>
          </div>
        </td>
        <td>{categories.join(', ')}</td>
        <td>{transactions}</td>
        <td>{userAmount}</td>
        <td>{totalValue}</td>
      </tr>
    );
  };

  const addUpTransactions = (contractIdList, transactions) => {
    let list = contractIdList.map((contract) => {
      for (let i = 0; i < transactions.length; i++) {
        if (contract === transactions[i].receiver_account_id) {
          return Number(transactions[i].transactions_count);
        }
      }
    });
    if (list[0]) {
      return list.reduce((r1, r2) => r1 + r2);
    }
    return 'NaN';
  };

  const addUpUsers = (contractIdList, users) => {
    let list = contractIdList.map((contract) => {
      for (let i = 0; i < users.length; i++) {
        if (contract === users[i].receiver_account_id) {
          return Number(users[i].user_amount);
        }
      }
    });
    if (list[0]) {
      return list.reduce((r1, r2) => r1 + r2);
    }
    return 'NaN';
  };

  const addUpTotalValue = (contractIdList, txvalues) => {
    let list = contractIdList.map((contract) => {
      for (let i = 0; i < txvalues.length; i++) {
        if (contract === txvalues[i].receiver_account_id) {
          return new BN(txvalues[i].token_value).div(
            new BN('1000000000000000000000000')
          );
        }
      }
    });
    if (list[0]) {
      let result = list.reduce((r1, r2) => r1.add(r2), new BN('0'));
      return result.toString();
    }
    return 'NaN';
  };

  let transactions =
    timeline === '30D'
      ? totalTransactions_30d
      : timeline === '7D'
      ? totalTransactions_7d
      : timeline === '24H'
      ? totalTransactions_24h
      : totalTransactions;

  let users =
    timeline === '30D'
      ? totalUser_30d
      : timeline === '7D'
      ? totalUser_7d
      : timeline === '24H'
      ? totalUser_24h
      : totalUser;

  let txvalues =
    timeline === '30D'
      ? totalValue_30d
      : timeline === '7D'
      ? totalValue_7d
      : timeline === '24H'
      ? totalValue_24h
      : totalValueTx;

  const [show, setShow] = useState(true);
  return (
    <Container>
      <Row noGutters>
        <h3>
          Display Dapps <Button onClick={() => setShow(!show)}>Toggle</Button>
        </h3>
        <div style={{ display: show ? 'block' : 'none' }}>
          <Row>
            {time.map((t) => (
              <Button key={t} onClick={() => setTimeline(t)}>
                {t}
              </Button>
            ))}
          </Row>
          <Row noGutters>
            <h3>Categories</h3>
            {Category.map((c) => (
              <Button key={c.title} onClick={() => setC(c.title)}>
                {c.title} {c.count}
              </Button>
            ))}
            <Button onClick={() => setC('')}>All</Button>
          </Row>
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Category</th>
                <th>Transactions</th>
                <th>Unique User Amount</th>
                <th>Total Value</th>
              </tr>
            </thead>
            <tbody>
              {Partner.map((d, i) => (
                <DTr
                  key={i}
                  num={i + 1}
                  logo={d.logo}
                  title={d.title}
                  link={d.link}
                  categories={d.categories}
                  cat={cat}
                  transactions={addUpTransactions(d.contract, transactions)}
                  userAmount={addUpUsers(d.contract, users)}
                  totalValue={addUpTotalValue(d.contract, txvalues)}
                />
              ))}
            </tbody>
          </Table>
        </div>
      </Row>
    </Container>
  );
}

export default Dash;

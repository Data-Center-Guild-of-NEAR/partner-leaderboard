import React, { useState } from 'react';
import BN from 'bn.js';
import { Button, Table, Row, Container } from 'react-bootstrap';

import Category from '../data/category-list.json';
import Partner from '../data/partner-list.json';
import { partner_map } from '../data/account-list';

function Dash({ totalTransactions, totalUser, totalValueTx }) {
  const [cat, setC] = useState('DApps');
  const Tr = ({ num, logo, title, link, categories, cat }) => {
    if (cat === '' || categories.includes(cat)) {
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
        </tr>
      );
    }
    return <></>;
  };
  let display_list = Partner.filter((p) => p.whole === true);

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
        <td>{userAmount}</td>
        <td>{totalValue}</td>
        <td>{transactions}</td>
      </tr>
    );
  };

  const addUpTx = (contractIdList) => {
    if (totalTransactions) {
      let list = contractIdList.map((contract) => {
        for (let i = 0; i < totalTransactions.length; i++) {
          if (contract === totalTransactions[i].receiver_account_id) {
            return Number(totalTransactions[i].transactions_count);
          }
        }
      });
      return list.reduce((r1, r2) => r1 + r2);
    }
    return 'Loading';
  };

  const addUpUser = (contractIdList) => {
    if (totalUser) {
      let list = contractIdList.map((contract) => {
        for (let i = 0; i < totalUser.length; i++) {
          if (contract === totalUser[i].receiver_account_id) {
            return Number(totalUser[i].user_amount);
          }
        }
      });
      return list.reduce((r1, r2) => r1 + r2);
    }
    return 'Loading';
  };

  const addUpValue = (contractIdList) => {
    if (totalValueTx) {
      let list = contractIdList.map((contract) => {
        for (let i = 0; i < totalValueTx.length; i++) {
          if (contract === totalValueTx[i].receiver_account_id) {
            return new BN(totalValueTx[i].token_value).div(
              new BN('1000000000000000000000000')
            );
          }
        }
      });
      let result = list.reduce((r1, r2) => r1.add(r2), new BN('0'));
      return result.toString();
    }
    return 'Loading';
  };

  return (
    <Container>
      <Row noGutters>
        {Category.map((c) => (
          <Button key={c.title} onClick={() => setC(c.title)}>
            {c.title} {c.count}
          </Button>
        ))}
        <Button onClick={() => setC('')}>All</Button>
      </Row>
      <Row noGutters>
        <h3>Display Dapps</h3>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Category</th>
              <th>User Amount</th>
              <th>Total Value</th>
              <th>Transactions</th>
            </tr>
          </thead>
          <tbody>
            {display_list.map((p, i) => (
              <DTr
                num={i + 1}
                logo={p.logo}
                title={p.title}
                link={p.link}
                categories={p.categories}
                cat={cat}
                transactions={addUpTx(partner_map[p.slug])}
                userAmount={addUpUser(partner_map[p.slug])}
                totalValue={addUpValue(partner_map[p.slug])}
              />
            ))}
          </tbody>
        </Table>
      </Row>
      <Row noGutters>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {Partner.map((p, i) => (
              <Tr
                num={i + 1}
                logo={p.logo}
                title={p.title}
                link={p.link}
                categories={p.categories}
                cat={cat}
              />
            ))}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
}

export default Dash;

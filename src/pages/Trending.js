import React, { useState } from 'react';
import { Button, Table, Row, Container } from 'react-bootstrap';

import Category from '../data/category-list.json';
import Partner from '../data/partner-list.json';

function Dash() {
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

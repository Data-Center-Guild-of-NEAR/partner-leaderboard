import React, { useState } from 'react';
import ReactEcharts from 'echarts-for-react';
import { Container, Button } from 'react-bootstrap';
import Partner from '../data/new-partner-list.json';

function Trending({ transactions }) {
  let display_list = Partner.filter((p) => p.contract !== undefined);
  const addUpTx = (contractIdList, transactions) => {
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
    return 0;
  };
  let display = display_list.map((d) => ({
    dapp_name: d.title,
    dapp_transactions: addUpTx(d.contract, transactions),
  }));

  display.sort((a, b) => {
    if (a.dapp_transactions > b.dapp_transactions) {
      return -1;
    }
    if (a.dapp_transactions < b.dapp_transactions) {
      return 1;
    }
    return 0;
  });
  display = display.slice(0, 5);
  const getOption = () => {
    return {
      grid: { containLabel: true },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      xAxis: [
        {
          name: 'Transactions',
          type: 'value',
        },
      ],
      yAxis: [
        {
          type: 'category',
          inverse: true,
          data: display.map((d) => d.dapp_name),
        },
      ],
      series: [
        {
          type: 'bar',
          data: display.map((d) => d.dapp_transactions),
        },
      ],
    };
  };

  const chartStyle = {
    height: '480px',
    width: '100%',
    marginTop: '26px',
    marginLeft: '24px',
  };
  const [show, setShow] = useState(false);
  return (
    <Container>
      <h3>
        Trending <Button onClick={() => setShow(!show)}>Toggle</Button>
      </h3>
      <div style={{ display: show ? 'block' : 'none' }}>
        <p>Latest Active Dapps on NEAR</p>
        <ReactEcharts option={getOption()} style={chartStyle} />
      </div>
    </Container>
  );
}

export default Trending;

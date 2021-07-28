const {
  queryTokenValueTransacted,
  queryTransactions,
  queryUniqueUserAmount,
} = require('./query');

let myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');

let raw = (title, text) =>
  JSON.stringify({
    title: title,
    query: text,
    projectId: 1,
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNvbm5lY3RvciIsInVzZXJpZCI6MTMsImlhdCI6MTYyNTAyMDgwNCwiZXhwIjoxNjI1NjI1NjA0fQ.VZ9Zi3aJzn2BFkRo-MYUIp6QVN1nLCjmoMlOz3hCgew',
  });

let requestOptions = (raw) => ({
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow',
});

let transaction_total = requestOptions(
  raw('transaction_total', queryTransactions())
);
let transaction_30d = requestOptions(
  raw('transaction_30d', queryTransactions(30))
);
let transaction_7d = requestOptions(
  raw('transaction_7d', queryTransactions(7))
);
let transaction_24h = requestOptions(
  raw('transaction_24h', queryTransactions(1))
);
let transaction_12h = requestOptions(
  raw('transaction_12h', queryTransactions(0.5))
);

let users_total = requestOptions(raw('users_total', queryUniqueUserAmount()));
let users_30d = requestOptions(raw('users_30d', queryUniqueUserAmount(30)));
let users_7d = requestOptions(raw('users_7d', queryUniqueUserAmount(7)));
let users_24h = requestOptions(raw('users_24h', queryUniqueUserAmount(1)));

let tokenvalue_total = requestOptions(
  raw('tokenvalue_total', queryTokenValueTransacted())
);
let tokenvalue_30d = requestOptions(
  raw('tokenvalue_30d', queryTokenValueTransacted(30))
);
let tokenvalue_7d = requestOptions(
  raw('tokenvalue_7d', queryTokenValueTransacted(7))
);
let tokenvalue_24h = requestOptions(
  raw('tokenvalue_24h', queryTokenValueTransacted(1))
);

export const request = {
  transaction_total,
  transaction_30d,
  transaction_7d,
  transaction_24h,
  transaction_12h,
  users_total,
  users_30d,
  users_7d,
  users_24h,
  tokenvalue_total,
  tokenvalue_30d,
  tokenvalue_7d,
  tokenvalue_24h,
};

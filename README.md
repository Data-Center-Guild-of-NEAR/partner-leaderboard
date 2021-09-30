# NEAR PULSE 
### partner leaderboard

This is Partner Leaderboard for NEAR partners

On this Dashboard, it has:
1. Trending part for most active 5 dapps 
2. Display dapps with collected contract id on NEAR protocol to aggregate unique user amount, total value transacted and transaction situation.


### Instructions
1. The list of partner category is ./src/data/new-category-list.json
2. The list of partner information is ./src/data/new-partner-list.json
3. The api point is to query unique user amount, total value transacted and transaction situation from each partner.


The query can be find here:
https://api.near-pulse.com/connect/query

The result for each query can be found here:

https://api.near-pulse.com/connect/result/1

https://api.near-pulse.com/connect/result/2

https://api.near-pulse.com/connect/result/3

https://api.near-pulse.com/connect/result/4

https://api.near-pulse.com/connect/result/5

https://api.near-pulse.com/connect/result/6

https://api.near-pulse.com/connect/result/7

https://api.near-pulse.com/connect/result/8

https://api.near-pulse.com/connect/result/9

https://api.near-pulse.com/connect/result/10

https://api.near-pulse.com/connect/result/11

https://api.near-pulse.com/connect/result/12

https://api.near-pulse.com/connect/result/13

and the result map for api is :

{

  1 : transaction_total,

  2 : transaction_30d,

  3 : transaction_7d,

  4 : transaction_24h,

  5 : transaction_12h,

  6 : users_total,

  7 : users_30d,

  8 : users_7d,

  9 : users_24h,

  10 : tokenvalue_total,

  11 : tokenvalue_30d,

  12 : tokenvalue_7d,

  13 : tokenvalue_24h

}

##### functions
The most useful functions should be in the ./src/pages/Dash.js
`addUpTransactions` is to add up transactions for partner contract list
`addUpUser` is to add up users for partner contract list 
`addUpValue` is to add up NEAR token deposit to partner contract list. NEAR_NOMINATION is 24 digits, do not be frightened by the big number.

##### domain
The domain name is from namecheap.

Please use https:near-pulse.com/partner to display the board.
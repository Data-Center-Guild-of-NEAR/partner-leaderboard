const partner_list = [
  "'contract.paras.near'",
  "'app.nearcrowd.near'",
  "'c.nearbet.near'",
  "'amm.counselor.near'",
  "'farm.berryclub.ek.near'",
  "'cards.berryclub.ek.near'",
  "'berryclub.ek.near'",
  "'pixelparty.near'",
  "'ref-finance.near'",
  "'yolo.sputnikdao.near'",
  "'tipbot.app.near'",
  "'canvas-war.feiyu.near'",
  "'feiyu.near'",
  "'corgis3d.yifang.near'",
  'aurora.near',
];

const partner_map = {
  paras: ['contract.paras.near'],
  'near-crowd': ['app.nearcrowd.near'],
  'ref-finance': ['amm.counselor.near', 'ref-finance.near'],
  'berry-club': [
    'farm.berryclub.ek.near',
    'cards.berryclub.ek.near',
    'berryclub.ek.near',
  ],
  sputnikdao: ['yolo.sputnikdao.near'],
  'near-tip-bot': ['tipbot.app.near'],
  corgis3d: ['corgis3d.yifang.near'],
  aurora: ['aurora.near'],
};
// nearbet: 'c.nearbet.near',
// pixelparty: 'pixelparty.near',
// feiyu: ['canvas-war.feiyu.near', 'feiyu.near'],
const result_map = {
  2: 'transaction_total',
  5: 'transaction_30d',
  4: 'transaction_7d',
  6: 'transaction_24h',
  3: 'transaction_12h',
  1: 'users_total',
  8: 'users_30d',
  7: 'users_7d',
  12: 'users_24h',
  9: 'tokenvalue_total',
  11: 'tokenvalue_30d',
  10: 'tokenvalue_7d',
  13: 'tokenvalue_24h',
};

exports.partner_list = partner_list;
exports.partner_map = partner_map;
exports.result_map = result_map;

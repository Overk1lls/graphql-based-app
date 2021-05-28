const fetch = require('node-fetch');
const cron = require('node-cron');
// const db = require('../index');
// const { MongoClient } = require('mongodb');

// const {connectToServer, getDb} = require('../index');
// var db = getDb();

const mongodb = require('../mongodb');
mongodb.connectToServer((err) => {
  if (err) console.log('ERR');
});
var db = mongodb.getDb();

// const date = new Date();
// const currentMins = 0; 
// const currentSecs = 0;
  try {
    db.collection('dates').insertOne({ fetchDate: { hours: new Date().getHours() } });

  } catch (err) { console.log(err); }

// const cronGetEOlympData = cron.schedule('*/10 * * * * *', async () => {
//   try {
//     db.collection('dates').insertOne({ fetchDate: { hours: new Date().getHours() } });

//   } catch (err) { console.log(err); }
//   console.log('works2');

//   fetch('https://api.e-olymp.com/oauth/token', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded'
//     },
//     body: 'grant_type=password&username=serg_pet&password=O08gjM9E'
//   })
//     .then(res => res.json())
//     .then((data) => {
//       fetch('https://api.e-olymp.com/graphql', {
//         method: 'POST',
//         headers: {
//           'Authorization': `Bearer ${data.access_token}`,
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           query: `
//             {
//               cognito {
//                 user1: user(id: 1) {
//                   name
//                 }
//                 user2: user(id: 5522) {
//                   name
//                 }
//                 user3: user(id: 5525) {
//                   name
//                 }
//               }
//             }
//           `
//         })
//       })
//         .then(res => res.json())
//         .then(json => console.log(json.data.cognito));
//     })
// });

// const cron1 = cron.schedule('*/5 * * * * *', () => {
//   console.log(`current: ${date.getSeconds()}\nwas: ${currentMins} + ${currentSecs}\nnow: ${currentSecs - date.getSeconds()}`)
// });

// module.exports = { cronGetEOlympData };
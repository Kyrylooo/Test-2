

// const headers = new Headers({
//   'Content-Type': 'application/json',
//   'Access-Control-Request-Headers': '*',
//   'api-key': '1i92FibzmAQ9h6D2CnKYjePuhvRWiy5eAsUdFyMqstetgldd6GCVXKjlvvrG6ewa'
// });

// const config = {
//   method: 'post',
//   body: params,
//   headers: [['Content-Type','application/json'], ['Access-Control-Request-Headers', '*'], ['Access-Control-Allow-Origin', '*'], ['api-key', '1i92FibzmAQ9h6D2CnKYjePuhvRWiy5eAsUdFyMqstetgldd6GCVXKjlvvrG6ewa']]
// };

// fetch('https://data.mongodb-api.com/app/data-pyhcq/endpoint/data/v1/action/insertOne', config)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//     alert("OK");
//   })
//   .catch(error => {
//     console.error('There was a problem with the fetch operation:', error);
//   });







  // Define the URL and parameters
const apiUrl = 'https://data.mongodb-api.com/app/data-pyhcq/endpoint/data/v1/action/insertOne';
const params = {
  "collection": "col",
  "database": "db",
  "dataSource": "Kiril",
  "projection": {
    "_id": 1
  }};

// Construct the query string with parameters
const queryString = new URLSearchParams(params).toString();
const fullUrl = `${apiUrl}?${queryString}`;

// Define headers
const headers = new Headers();
headers.append('Content-Type','application/json');
headers.append('Access-Control-Request-Headers', '*');
headers.append('Access-Control-Allow-Origin', '*');
headers.append('api-key', '1i92FibzmAQ9h6D2CnKYjePuhvRWiy5eAsUdFyMqstetgldd6GCVXKjlvvrG6ewa');



// Make the HTTP GET request
fetch(fullUrl, {
  method: 'GET',
  headers: headers,
})
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // Handle the response data
    console.log(data);
  })
  .catch(error => {
    // Handle errors
    console.error('Error:', error);
  });

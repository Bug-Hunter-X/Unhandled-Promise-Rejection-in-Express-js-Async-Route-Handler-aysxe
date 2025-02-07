const express = require('express');
const app = express();
app.use(express.json());
app.post('/data', (req, res) => {
  const data = req.body;
  processAsyncData(data)
    .then(() => {
      res.send('Data processed successfully!');
    })
    .catch(error => {
      console.error('Error processing data:', error);
      res.status(500).send('Error processing data');
    });
});

async function processAsyncData(data) {
  // Simulate an asynchronous operation
  await new Promise(resolve => setTimeout(resolve, 2000));
  // ... your asynchronous data processing logic ...
  if (data.name === 'John Doe') {
    throw new Error('Name John Doe is not allowed');
  }
}

const port = 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
const stripe = require('stripe')(
    'sk_test_51NeJfWHuVyihEf6SuNmlw9qhDMy4BayrbhlI1qDVs9hyQhTPXlU8rvDK66yeUKrpxgEETtEYiibmwAVDTnlbryoM00dvfgv0d2'
    );
    
    // Using Express
    const app = require('express')();
    
    // Use body-parser to retrieve the raw body as a buffer
    const bodyParser = require('body-parser');
    
    app.post('/webhook', bodyParser.raw({type: 'application/json'}), (request, response) => {
      const payload = request.body;
    
      console.log("Got payload: " + payload);
    
      response.status(200).end();
    });
    
    app.listen(4242, () => console.log('Running on port 4242'));
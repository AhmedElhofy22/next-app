import { MongoClient } from 'mongodb';



async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    const client = await MongoClient.connect(
        'mongodb+srv://ahmedelhofy8686:ahmd8798@cluster0.jsbp5cd.mongodb.net/?retryWrites=true&w=majority'
    );
    const db = client.db();

    const stadiumsCollection = db.collection('stadiums');

    const result = await stadiumsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: 'stadium inserted!' });
  }
}

export default handler;
import IconsList from '/Components/IconsList'
import { Fragment } from 'react';
import Head from 'next/head';
import { MongoClient } from 'mongodb';

const DUMMY_ICONS = [
  {
    id: 'm1',
    name: 'A First Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Some address 5, 12345 Some City',
    description: 'This is a first meetup!'
  },
  {
    id: 'm2',
    name: 'A Second Stadium',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Some address 10, 12345 Some City',
    description: 'This is a second Stadium!'
  },
    {
    id: 'm3',
    name: 'A Second Stadium',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Some address 10, 12345 Some City',
    description: 'This is a second Stadium!'
  }
];

const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name='description'
          content='Browse a huge list of mundial stadiums!'
        />
      </Head>
      <IconsList icons={props.stadiums}/>;
    </Fragment>
      
  )
}

export async function getStaticProps() {
  // fetch data from an API
  const client = await MongoClient.connect(
    
    'mongodb+srv://ahmedelhofy8686:ahmd8798@cluster0.jsbp5cd.mongodb.net/?retryWrites=true&w=majority'
  );
  const db = client.db();

  const stadiumsCollection = db.collection('stadiums');

  const stadiums = await stadiumsCollection.find().toArray();

  client.close();

  return {
    props: {
      stadiums: stadiums.map((stadium) => ({
        name: stadium.name,
        address: stadium.address,
        image: stadium.image,
        id: stadium._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;

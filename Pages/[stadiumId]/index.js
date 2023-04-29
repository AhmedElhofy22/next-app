import IconDetail from '@/Components/IconDetail'
import { MongoClient, ObjectId } from 'mongodb';
import { Fragment } from 'react';
import Head from 'next/head';

const StadiumDetail = (props) => {
  return (
    <Fragment>
    <Head>
      <title>{props.iconData.title}</title>
      <meta name='description' content={props.iconData.description} />
    </Head>
    <IconDetail
      image={props.iconData.image}
      title={props.iconData.title}
      address={props.iconData.address}
      description={props.iconData.description}
    />
  </Fragment>
  )
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    'mongodb+srv://ahmedelhofy8686:ahmd8798@cluster0.jsbp5cd.mongodb.net/?retryWrites=true&w=majority'
  );
  const db = client.db();

  const stadiumsCollection = db.collection('stadiums');

  const stadiums = await stadiumsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: 'blocking',
    paths: stadiums.map((stadium) => ({
      params: { stadiumId: stadium._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  

  const stadiumId = context.params.stadiumId;

  const client = await MongoClient.connect(
    'mongodb+srv://ahmedelhofy8686:ahmd8798@cluster0.jsbp5cd.mongodb.net/test/stadiums?retryWrites=true&w=majority'
  );
  const db = client.db();

  const stadiumsCollection = db.collection('stadiums');

  const selectedStadium = await stadiumsCollection.findOne({
    _id: ObjectId(stadiumId),
  });

  client.close();

  return {
    props: {
      iconData: {
        id: selectedStadium._id.toString(),
        name: selectedStadium.name,
        address: selectedStadium.address,
        image: selectedStadium.image,
        description: selectedStadium.description,
      },
    },
  };
}


export default StadiumDetail;

import NewIconForm from '../../Components/NewIconForm';
import { Fragment } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

const NewStadium = () => {
  const router = useRouter();

  async function addStadiumHandler(enteredStadiumData) {
    const response = await fetch('/api/new-stadium', {
      method: 'POST',
      body: JSON.stringify(enteredStadiumData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    console.log(data);

    router.push('/');
  }
  return (
    <Fragment>
      <Head>
        <title>Add a New Stadium</title>
        <meta
          name='description'
          content='Add your own mundial stadiums'
        />
      </Head>
      <NewIconForm onAddStadium={addStadiumHandler} />
    </Fragment>
  )
}

export default NewStadium;

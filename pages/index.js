import MeetUpList from "../components/meetups/MeetUpList";
import { MongoClient } from "mongodb";
import Head from "next/head";

function HomePage(props) {
  return (
    <>
      <Head>
        <title>Meetups</title>
        <meta name='description' content='Browse a list of meetups!' />
      </Head>
      <MeetUpList meetups={props.meetups} />
    </>
  );
}

//gets executed and generated serverside

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     }
//   }
// }

// whatever code written here will never reach the client since its executed during the build process
export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://<user>:<pass>@cluster0.24pjm.mongodb.net/<nameofyourdb>?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();
  client.close();

  // fetch data api securley

  // always need to an object to be returned
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    //
    revalidate: 10,
  };
}
export default HomePage;

import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetUpForm";
import Head from "next/head";

function NewMeetupPage() {
  const router = useRouter();
  async function addMeetup(enteredMeetupData) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
    router.push("/");
  }

  return (
    <>
      <Head>
        <title>Add a new Meetup</title>
        <meta
          name='description'
          content='Add your own meetups and create amazing network opportunities.'
        />
      </Head>
      <NewMeetupForm onAddMeetUp={addMeetup} />
    </>
  );
}

export default NewMeetupPage;

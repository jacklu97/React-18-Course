import NewMeetupForm from '../../components/meetups/NewMeetupForm'

function NewMeetupPage() {
  function addMeetupHander(enteredData) {
    console.log(enteredData)
  }

  return <NewMeetupForm onAddMeetup={addMeetupHander} />
}

export default NewMeetupPage;
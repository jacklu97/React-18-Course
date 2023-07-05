import { useParams } from "react-router-dom";

const EventDetailPage = () => {
  const { eventId } = useParams();

  return (
    <>
      <h1>Event Detail</h1>
      <p>{eventId}</p>
    </>
  );
};

export default EventDetailPage;

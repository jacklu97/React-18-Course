import MeetupList from '../components/meetups/MeetupList'

const DUMMY_MEETUPS = [
  {
    id: 'md1',
    title: 'A First Meetup',
    image: 'https://a.cdn-hotels.com/gdcs/production76/d1681/e2088a33-187a-4e40-b014-f7442c831f68.jpg?impolicy=fcrop&w=1600&h=1066&q=medium',
    address: 'Some address 5, 12345, Some City',
    description: 'This is a first meetup'
  },
  {
    id: 'md2',
    title: 'A Second Meetup',
    image: 'https://a.cdn-hotels.com/gdcs/production76/d1681/e2088a33-187a-4e40-b014-f7442c831f68.jpg?impolicy=fcrop&w=1600&h=1066&q=medium',
    address: 'Some address 5, 12345, Some City',
    description: 'This is a second meetup'
  }
]

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />
}

export default HomePage
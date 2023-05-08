import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://img.tpt.cloud/nextavenue/uploads/2019/04/Meetups-Share-Your-Passions-and-Have-Fun.inside.1200x776.jpg",
    address: "Some address 5, 12345",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB4a8Eiht6edcSBEbUxadgDqGFbkEp650Nk3WOvEd15ywCd1q40yVmdxy16DwBmI7-hJg&usqp=CAU",
    address: "Some address 9797, 12323",
    description: "This is a first meetup!",
  },
];

const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;

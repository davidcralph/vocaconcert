import upcoming from '../data/upcoming';

import Table from 'react-bootstrap/Table';
import Flag from 'react-world-flags';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Upcoming() {
  return (
    <>
      <Navbar />
      <div className="content">
        <div className="jumbotron">
          <h1>Upcoming Concerts</h1>
          <p>A list of upcoming VOCALOID fan concerts sorted by whichever is starting first</p>
        </div>
        <Table striped bordered hover responsive size="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Time</th>
              <th>Location</th>
              <th>Organiser</th>
            </tr>
          </thead>
          <tbody>
            {upcoming.map((item, index) => (
              <tr key={index}>
                <td>
                  <Flag code={item.country} /> {item.name}
                </td>
                <td>{item.time}</td>
                <td>{item.location}</td>
                <td>{item.organiser}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <Footer />
    </>
  );
}

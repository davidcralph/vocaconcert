import past from '../data/past';

import Table from 'react-bootstrap/Table';
import Flag from 'react-world-flags';

import Head from '../components/Head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Past() {
  return (
    <>
      <Head title='Past Concerts'/>
      <Navbar />
      <div className="content">
        <div className="jumbotron">
          <h1>Past Concerts</h1>
          <p>A list of past VOCALOID concerts sorted by whichever finished first</p>
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
            {past.map((item, index) => (
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

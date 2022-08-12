import upcoming from '../data/upcoming';

import Table from 'react-bootstrap/Table';
import Flag from 'react-world-flags';

import Head from '../components/Head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head title='Home'/>
      <Navbar />
      <div className="content">
        <div className="jumbotron">
          <h1>Vocaloid Fan Concert DB</h1>
          <p>
            Listing of upcoming and past VOCALOID fan concerts, sorted by whichever starts first.
          </p>
          <p>This website is opensource on GitHub</p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <div className="startingSoon">
                <h3>Starting soon</h3>
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
            </div>
            <div className="col-sm">
              <div className="startingSoon">
                <h3>Recently Finished</h3>
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
            </div>
          </div>
          <br />
          <div className="siteUpdates">
            <h3>Site Updates</h3>
            <p>Nothing yet!</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

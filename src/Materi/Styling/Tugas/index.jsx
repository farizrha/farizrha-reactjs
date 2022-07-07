import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import './style.css'

export default class Biografi extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Fariz</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#biografi">Biografi</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#other-skills">Other Skills</Nav.Link>
              <Nav.Link href="#family">My Family</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        {/* Home Page */}
        <div className="p-5 mb-4 bg-light rounded-3 jumbotron">
          <div className="container-fluid py-5 text-center">
            <p className="fs-5 fst-italic mt-5">Data Engineer</p>
            <h1 className="display-4">Fariz Rizky Haykal Abdillah</h1>
            <button className="btn btn-info border border-dark btn-sm mt-5 shadow-sm text-white px-3 py-2">
              My Portfolio
            </button>
          </div>
        </div>
        {/* End of Home Page */}

        
          {/* Bio Page */}
          <div className="container text-center" id="bio">
            <div className="row justify-content-center">
              <h3 className="fs-bold fs-2">My Bio</h3>
              <div className="col-lg-7 ">
                <p className="fs-5 fst-italic fw-light">
                  Halo perkenalkan nama saya Fariz Rizky Haykal Abdillah, saya
                  saat ini bekerja sebagai Data Engineer di PT Xquisite
                  Analitika Indonesia.
                </p>
              </div>
            </div>
          </div>
          {/* End of Bio Page */}
          {/* Skills Page*/}
          <div className="container-fluid text-center" id="skills">
            <div className="row justify-content-center">
              <h3 className="fs-bold fs-2">My Skills</h3>
              <div className="col-lg-4">
                <div className="card shadow" style={{ width: "20rem" }}>
                  <div className="card-header fs-4 fs-bold">My Skills</div>
                  <ul className="list-group list-group-flush fs-6">
                    <li className="list-group-item">Python</li>
                    <li className="list-group-item">Docker</li>
                    <li className="list-group-item">MySQL</li>
                    <li className="list-group-item">Machine Learning</li>
                    <li className="list-group-item">Talend</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="card shadow" style={{ width: "20rem" }}>
                  <div className="card-header fs-4 fs-bold">Other skills</div>
                  <ul className="list-group list-group-flush fs-6">
                    <li className="list-group-item">Airflow</li>
                    <li className="list-group-item">Azure Cloud</li>
                    <li className="list-group-item">Jenkins</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* End of Skills Page*/}
          {/* My family Page */}
          <div className="container-fluid mt-5" id="family">
            <h3 className="fs-bold fs-2 text-center">My Family</h3>
            <div
              className="card mx-auto shadow"
              style={{ width: 600, height: 220 }}
            >
              <div className="card-body">
                <div className="col-lg-15 p-2">
                  <table className="table table-success table-striped shadow">
                    <tbody>
                      <tr>
                        <th>No</th>
                        <th>Nama</th>
                        <th>Hubungan</th>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>Rudiono</td>
                        <td>Ayah</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Nine Maharani</td>
                        <td>Ibu</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Nada Ghaisani Salsabila</td>
                        <td>Kakak</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {/* End of Family Page */}
          {/* Contact Page */}
          <div className="container mt-5 mb-5" id="contact">
            <h3 className="fs-bold fs-2 text-center mb-3 mt-3">Contact Me</h3>
            <div
              className="card mx-auto shadow"
              style={{ width: 500, height: 330 }}
            >
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="fname">First name:</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                    <div id="emailHelp" className="form-text">
                      We'll never share your email with anyone else.
                    </div>
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      Check me out
                    </label>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          {/* End of Contact Page */}
      </div>
    );
  }
}

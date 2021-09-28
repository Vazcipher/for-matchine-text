import { Col, Row } from 'react-bootstrap';
import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import SideBarRight from './components/SideBarRight';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Row >
        <Col md={1} lg={1} sm={1}>
          <SideBar />
        </Col>
        <Col md={9} lg={9} sm={9}>
          <Header />
        </Col>
        <Col md={2} lg={2} sm={2}>
          <SideBarRight />
        </Col>

      </Row>
    </>
  );
}

export default App;

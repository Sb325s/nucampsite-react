import { Col } from 'react-bootstrap';

const Error = ({ errMsg }) => {
    return ( 
        <Col>
        <h4>({errMsg})</h4>
        </Col>
    );
};

export default Error;

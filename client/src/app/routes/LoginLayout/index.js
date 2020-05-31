import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import PropTypes from 'prop-types';
import logo from './assets/bg.png';
import './assets/index.scss';

const LoginLayout = ({ children }) => (
    <Container fluid className="login-wrapper w-100-p h-100-p">
        <Row className="h-100-p">
            <Col xs={6} className="justify-content-center align-items-center h-100-p d-flex">
                <Image fluid src={logo} className="mx-auto my-auto" />
            </Col>
            <Col xs={6} className="right-login justify-content-center align-items-center h-100-p d-flex">
                {children}
            </Col>
        </Row>
    </Container>
);

LoginLayout.propTypes = {
    children: PropTypes.oneOfType([PropTypes.any, PropTypes.node, PropTypes.element]),
};
export default LoginLayout;

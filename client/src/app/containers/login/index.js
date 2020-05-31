import React from 'react';
import { Row, Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss';

const Login = () => (
    <div className="align-self-center login-form">
        <Card className="card">
            <Row className="icon-wrapper">
                <FontAwesomeIcon icon={['fas', 'user']} className="anticon" />
            </Row>
            <Card.Body>
                <Row className="justify-content-center ">
                    <Button
                        className="rounded-pill"
                        variant="primary"
                        onClick={() => {
                            localStorage.setItem('auth', 'asd');
                            window.location.reload();
                        }}>
                        SSO Zalo
                    </Button>
                </Row>
            </Card.Body>
        </Card>
    </div>
);

export default Login;

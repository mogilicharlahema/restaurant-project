import React from "react";
import { Row, Col, Button } from "reactstrap";
// import images from '../../constants/images';
import "./main.css"

const Main = (props) => {
    return (
        <div>
            <Row noGutters className="text-center align-items-center pizza-cta">
                <Col>
                    <p className="looking-for-dining">If you are looking for happy dining</p>
                    <Button color="primary" className="book-table-btn" 
                    >
                        Book a table
                    </Button>
                </Col>
            </Row>

            <Row noGutters className="text-center big-img-container">
                <Col>
                <img src={require("../../../assets/back.jpeg")} alt="cafe" className="big-img"/>
                </Col>
            </Row>
        </div>
    );
};

export default Main;

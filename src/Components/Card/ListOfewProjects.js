import { Row,Col } from "react-bootstrap";

class ListOfProjects {
    render() {
        return (
            <Row className="show-grid text-center projects-list">
                <Col xs={1} sm={1} className="projects">
                    <img src={this.props.photo} thumbnail responsive/>
                    <p>{this.props.text}</p>
                </Col>
            </Row>
        );
    }
}

export default ListOfProjects;
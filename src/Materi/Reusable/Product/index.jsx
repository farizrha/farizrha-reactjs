import React, { Component } from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components";
import Counter from '../Counter';

const imgProduct =
  "https://asset.kompas.com/crops/fP_Q5TD9BOn5G5JTnntgtDIjQMI=/53x36:933x623/750x500/data/photo/2021/10/21/6171492e1ea12.jpg";

const CardContainer = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 200px;
  margin: auto;
  text-align: center;
  font-family: arial;
`;

export default class Product extends Component {
    state = {
        value: 0
    }

    handleValue = (value) => {
        this.props.receiveValue(value);
    }

  render() {
    return (
      <div>
        <CardContainer>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={imgProduct} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Title>{this.state.value}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Counter receiveValue={this.handleValue}/>
              </Card.Body>
            </Card>
        </CardContainer>
      </div>
    );
  }
}

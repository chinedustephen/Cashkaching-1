import React from "react";
import styled from "styled-components";

const Text = styled.p`
  font-family: Campton-Book;
  font-size: 13px;
  color: #000000;
  letter-spacing: 0;
  line-height: 24px;
`;
const Container = styled.div``;
const User = styled.p`
  /* @Gideonkazura: */
  font-family: Campton-Medium;
  font-size: 10px;
  color: #000000;
  letter-spacing: 0.87px;
`;

class Testimonial extends React.Component {
  render() {
    return (
      <Container>
        <Text>
          Type something our lucky day comes! Check Rules and FAQs for more
          information…
        </Text>
        <User>Gideonkazura</User>
      </Container>
    );
  }
}

export default Testimonial;

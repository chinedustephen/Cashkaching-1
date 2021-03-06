import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: grid;
  grid-template-rows: 10% 1fr;
  /* Rectangle 8: */
  background: #ffffff;
  border-radius: 4px;
  height: 233px;
  width: 330px;
  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.24);
  border-bottom: 5px solid #eee6e6;
`;

const CardContent = styled.div`
  display: grid;
  padding-left: 16px;
  padding-right: 16px;
  margin-top: 28px;
`;
const Amount = styled.div`
  background: #eee6e6;
  width: 98px;
  height: 24px;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  margin-right: 28px;
`;
const AmountNumber = styled.p`
  font-family: Campton-Bold;
  font-size: 11px;
  color: #000000;
  letter-spacing: 0;
  margin: 0px;
  text-align: center;
  padding: 4px;
`;
const AmountContainer = styled.div`
  justify-self: end;
`;

const TestimonialQuote = styled.p`
  font-family: Campton-Book;
  font-size: 16px;
  color: #000000;
`;

const Name = styled.p`
  font-family: Campton-BoldDEMO;
  font-size: 16px;
  color: #000000;
  letter-spacing: 1.16px;
  align-self: end;
`;
const NameContainer = styled.div`
  display: grid;
`;

const TestimonialCard = props => (
  <Card>
    <AmountContainer>
      <Amount>
        <AmountNumber>{props.amount}</AmountNumber>
      </Amount>
    </AmountContainer>
    <CardContent>
      <div>
        <TestimonialQuote>{props.usertestimonial}</TestimonialQuote>
      </div>
      <NameContainer>
        <Name>{props.username}</Name>
      </NameContainer>
    </CardContent>
  </Card>
);

export default TestimonialCard;

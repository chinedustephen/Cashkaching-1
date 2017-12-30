import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: grid;
  grid-template-columns: 84px 1fr;
  background: #fafafa;
  border-radius: 4px;
  width: 215px;
  height: 86px;
  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.24);
  border-bottom: 5px solid #eee6e6;
`;
const Tablet = styled.div`
  background: #5c0d3c;
  border-radius: 50px;
  width: 45px;
  height: 20px;
`;

const TabletText = styled.p`
  font-family: Campton-Book;
  font-size: 10px;
  color: #fdfdfd;
  margin: 0px;
  padding: 0px;
  text-align: center;
  padding-top: 4px;
}
`;

const CardText = styled.p`
  font-family: Campton-Medium;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.87);
`;

const CardContent = styled.div`
  margin-top: 18px;
  margin-left: 10px;
`;
const CardImg = styled.img``;
const SmallCardWinner = () => (
  <Card>
    <div>
      <CardImg src={require("./images/Nandos.png")} />
    </div>
    <CardContent>
      <div>
        <Tablet>
          <TabletText>N100</TabletText>
        </Tablet>
      </div>
      <div>
        <CardText>Nandos voucher</CardText>
      </div>
    </CardContent>
  </Card>
);

export default SmallCardWinner;

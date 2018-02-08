import React from "react";
import styled from "styled-components";

//Backdrop style
const BackdropStyle = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 50px;
  z-index: 30;
  display: grid;
  grid-template-rows: 5% 80%;
`;

// The modal "window"
const ModalStyle = styled.div`
  background-color: #fff;
  border-radius: 5px;
  max-width: 500px;
  min-height: : 300px;
  margin: 0 auto;
  padding: 30px;
`;

const Cardcontainer = styled.div.attrs({
  // we can define static props

  // or we can define dynamic ones
  background: props => props.bg
})`
  justify-self: center;

  border-radius: 4px;
  border-bottom: 8px solid #5e8a1c;
  box-shadow: 0 9px 16px 0 rgba(5, 2, 7, 0.35);
  width: 736px;
  height: auto;
  min-height: 360px;
  max-height: 412px;
  justify-self: center;

  /* here we use the dynamically computed props */
  background: ${props => props.background};
`;

const Close = styled.div`
  height: 20px;
  justify-self: end;
`;

class Modal extends React.Component {
  render() {
    // Render nothing if the "show" prop is false
    if (!this.props.show) {
      return null;
    }

    return (
      <BackdropStyle>
        <Close>
          <button onClick={this.props.onClose}>close</button>
        </Close>
        <Cardcontainer bg={this.props.bg}>{this.props.children}</Cardcontainer>
      </BackdropStyle>
    );
  }
}

export default Modal;

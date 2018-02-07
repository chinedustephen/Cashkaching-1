import React from "react";
import styled from "styled-components";

//Backdrop style
const BackdropStyle = styled.div`
  display: grid;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 50px;
  z-index: 30;
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
const Cardcontainer = styled.div`
  background: #6ca516;
  border-radius: 4px;
  border-bottom: 8px solid #5e8a1c;
  box-shadow: 0 9px 16px 0 rgba(5, 2, 7, 0.35);
  width: 736px;
  height: 346px;
  justify-self: center;
`;
/**const Cardlayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: minmax(300px, auto);
  grid-row-gap: 1em;
  margin-top: 28px;
`; **/

class Modal extends React.Component {
  render() {
    // Render nothing if the "show" prop is false
    if (!this.props.show) {
      return null;
    }

    return (
      <BackdropStyle>
        <Cardcontainer>{this.props.children}</Cardcontainer>
        <div className="footer">
          <button onClick={this.props.onClose}>Close</button>
        </div>
      </BackdropStyle>
    );
  }
}

export default Modal;

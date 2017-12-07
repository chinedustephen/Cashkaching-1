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

class Modal extends React.Component {
  render() {
    // Render nothing if the "show" prop is false
    if (!this.props.show) {
      return null;
    }

    return (
      <BackdropStyle>
        <ModalStyle className="modal">
          {this.props.children}

          <div className="footer">
            <button onClick={this.props.onClose}>Close</button>
          </div>
        </ModalStyle>
      </BackdropStyle>
    );
  }
}

export default Modal;

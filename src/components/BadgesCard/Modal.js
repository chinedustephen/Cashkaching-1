import React from "react";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Badge from "./Badge";

const customContentStyle = {
  width: "280px",
  height: "324px",
  color: "red",
  maxWidth: "none"
};

const custombodyStyle = {
  height: "324px",
  backgroundColor: "red"
};

/**
 * The dialog width has been set to occupy the full width of browser through the `contentStyle` property.
 */
export default class ModalBadge extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleOpen() {
    this.setState({ open: true });
    console.log("i am clicked");
  }

  handleClose() {
    this.setState({ open: false });
    console.log("close");
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={() => this.handleClose()}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onClick={() => this.handleClose()}
      />
    ];

    return (
      <div>
        <Badge onClick={() => this.handleOpen()} />
        <MuiThemeProvider>
          <div>
            <Dialog
              title="Dialog With Custom Width"
              actions={actions}
              modal={true}
              contentStyle={customContentStyle}
              bodyStyle={custombodyStyle}
              open={this.state.open}
            >
              By playing any draw twice we award you the Triple Play bagdge.
              Allows you to be the first one to see on demand bargins around
              your area. What you waiting for go on Lets play Lotto.
            </Dialog>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

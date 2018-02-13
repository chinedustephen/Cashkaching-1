import React from "react";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Badge from "./Badge";

const customContentStyle = {
  width: "100%",
  maxWidth: "none"
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
              open={this.state.open}
            >
              This dialog spans the entire width of the screen.
            </Dialog>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

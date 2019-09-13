import React, { Component } from "react";
import { Provider, connect } from "react-redux";
import Button from "@material-ui/core/Button";
import * as actions from "../../actions";
import purge from "redux-persist";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="row" style={{ margin: "100px" }}>
          <div style={{ fontSize: "40px", marginLeft: "38px" }}>
            {this.props.countContainer.count}
          </div>

          <Button variant="outlined" onClick={() => this.props.increment(1)}>
            +
          </Button>
          <Button
            className="col-3"
            variant="outlined"
            onClick={() => this.props.decrement(1)}
          >
            -
          </Button>
        </div>

        <div className="row" style={{ margin: "100px" }}>
          <div style={{ fontSize: "40px", marginLeft: "38px" }}>
            {this.props.testContainer.count}
          </div>

          <Button
            variant="outlined"
            onClick={() => this.props.testIncrement(1)}
          >
            +
          </Button>
          <Button
            className="col-3"
            variant="outlined"
            onClick={() => this.props.testDecrement(1)}
          >
            -
          </Button>
        </div>

        <div className="row">
          <Button
            variant="outlined"
            onClick={() => {
              this.props.resetState();
              this.props.resetStateAction();
            }}
          >
            RESET STATE
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    countContainer: state.countContainer,
    testContainer: state.testContainer
  };
};

export default connect(
  mapStateToProps,
  actions
)(Main);

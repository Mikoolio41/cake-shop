import React from "react";
import { connect } from "react-redux";
import { buyIcecream } from "../redux";

function IcecreamContainer(props) {
  console.log(props.numOfIcecream);
  return (
    <div>
      <h2>Number of icecreams - {props.numOfIcecream}</h2>
      <button onClick={props.buyIcecream}>Buy Icecream</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfIcecream: state.icecream.numOfIcecream,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIcecream: () => {
      dispatch(buyIcecream());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IcecreamContainer);

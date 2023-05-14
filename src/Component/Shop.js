import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from "../State/index";

const Shop = () => {
    const dispatch=useDispatch();
    const action=bindActionCreators(actionCreators,dispatch);
  return (
    <div>
        <h2>Deposit Withdraw Money</h2>
          <button className="btn btn-primary mx-2" onClick={() => action.withDrawMoney(100)}>-</button>
        Update the Balance
          <button className="btn btn-primary mx-2" onClick={() => action.depositMoney(100)}>+</button>

          { // use that way if not use bindActionCreators
          /* <button className="btn btn-primary mx-2" onClick={() => dispatch(actionCreators.withDrawMoney(100))}>-</button>
          Update the Balance
          <button className="btn btn-primary mx-2" onClick={() => dispatch(actionCreators.depositMoney(100))}>+</button> */}
    </div>
  )
}

export default Shop

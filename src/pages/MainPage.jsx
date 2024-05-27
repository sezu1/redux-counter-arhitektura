import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {decrementActionCreator,
        incrementActionCreator} from "../store/actionCreators/counterActionCreator";


function MainPage() {

    const dispatch = useDispatch();
    const {count} = useSelector((store) => store.counterR);


    function doIncr() {
        dispatch(incrementActionCreator());
    }

    function doDecr() {
        dispatch(decrementActionCreator());
    }


    return (
        <div>
            <h2>Main page</h2>

            <button onClick={doIncr}>+</button>
            <p>{count}</p>
            <button onClick={doDecr}>-</button>
        </div>
    );
}

export default MainPage;
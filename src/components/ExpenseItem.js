
import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch,currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

     const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        }; 
        
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

     const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: -10,
        };       

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><button style={{
                    backgroundColor: 'green',
                    borderRadius: '50%',
                    width: '35px',
                    height: '35px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: 'none',
                    paddingBottom: '10px',
                    outline: 'none',
                    cursor: 'pointer',
                    color: 'white',
                    fontSize: '2rem',
                }}  onClick={event=> increaseAllocation(props.name)}>+</button></td>
        <td><button style={{
                    backgroundColor: 'red',
                    borderRadius: '50%',
                    width: '35px',
                    height: '35px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: 'none',
                    paddingBottom: '10px',
                    outline: 'none',
                    cursor: 'pointer',
                    color: 'white',
                    fontSize: '2rem',
                }} onClick={event=> decreaseAllocation(props.name)}>-</button></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
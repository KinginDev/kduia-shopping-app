import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {
    const {expenses} = useContext(AppContext)

    return (
        <div>
            <table className='table'>
                <thead>
                    <tr>
                        <th scope='col'>Items</th>
                        <th scope='col'>Quantity</th>
                        <th scope='col'>Unit Price</th>
                        <th scope='col'>Items Price</th>
                        <th scope='col'>Remove</th>
                    </tr>
                </thead>
                <tbody>
                   {expenses.map((expense) => (
                    <ExpenseItem name={expense.name} quantity={expense.quantity} id={expense.id} key={expense.id} unitprice={expense.unitprice} />
                   ))}
                </tbody>
            </table>
        </div>
    )
};

export default ExpenseList;

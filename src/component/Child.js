import React from 'react'
import { useContext } from 'react';
import { transactionContext } from './TransactionContext'
function Child() {
    let transaction = useContext(transactionContext);
    return (
        <div className="container ">
        <div>
           <h1 className="text-center mt-3">Expance Tracker</h1> 
           <h1 className="your_balance mt-3">Your Balance<br/>300Rs</h1>
            <div className=" exp_cont">
                <h4 >Income<br/>5000Rs</h4>
                <h4>Expance<br/>4700Rs</h4>
            </div>
            <h3 className="Font-bolder history mt-3">History</h3>
        <br/>
        <ul className=" transaction-list border ">
            {transaction.map((item,ind)=>{
                return(<li>
                    <span>{item.desc}</span>
                    <span>{item.Amount}</span>
                </li>)
            })}
        </ul>
        <h3 className="mt-3">Add Transaction</h3>
        <form className="form_container">
            <label>
                Enter Description<br/>
                <input type="text" required/>
            </label>
            <label>
                Enter Amount<br/>
                <input type="number" required />
            </label>
            <input type="submit" value="Add Transaction" className="bg-primary shadow"/>
        </form>
        </div>
        </div>
    )
}

export default Child

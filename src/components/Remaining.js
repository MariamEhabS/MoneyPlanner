import React, {useContext} from 'react'
import { AppContext } from '../context/AppContext'


const Remaining = () => {
    const {expenses, budget } = useContext(AppContext)
   
    const totalExpenses = expenses.reduce((total,item) => {
        return (total = total + item.cost)
    }, 0)


    const alertType = totalExpenses > budget ? 'bg-danger' : 'bg-success'
    return (
    <div className = {`container bg-success rounded ${alertType} py-4`}>
        <span className='text-white'>Remaining: ${budget - totalExpenses}</span>
    </div>

)}  



export default Remaining
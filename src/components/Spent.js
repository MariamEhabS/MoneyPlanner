import React, {useContext} from  'react'
import {AppContext} from '../context/AppContext'
    const Spent = () => {
        const {expenses} = useContext(AppContext)

        const totalExpenses= expenses.reduce((total, item) => {
            return (total += item.cost)
        }, 0)
        return (

            <div className ='container bg-success py-4 rounded'>
                <span className='text-white'> Spent so far: ${totalExpenses}</span>
            </div>
        )
    }

export default Spent
import React, {useContext} from  'react'
import {AppContext} from '../context/AppContext'
    const Spent = () => {
        const {expenses} = useContext(AppContext)

        const totalExpenses= expenses.reduce((total, item) => {
            return (total += item.cost)
        }, 0)
        return (

            <div className ='alert alert-warning'>
                <span> Spent so far: ${totalExpenses}</span>
            </div>
        )
    }

export default Spent
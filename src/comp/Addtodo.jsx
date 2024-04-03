import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../slice/todoslice'
import '../App.css'

const Addtodo = () => {
    //to add anything you must use dispatch



    const [input, setInput] = useState("")


    const dispatch = useDispatch()

    const clickhandler = (e) => {
        e.preventDefault();
        dispatch(add(input))
        setInput("");
    }

    return (
        <div className='w-full flex justify-center'>

            <form onSubmit={clickhandler} className='w-3/4 flex justify-between space-x-3 mt-12'>


                <input className='w-1/2 bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' type="text" name="" id="" placeholder='Enter your task' value={input} onChange={(e) => { setInput(e.target.value) }} />


                <button type="submit" className="text-white  font-semibold bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Add</button>


            </form>

        </div>
    )
}

export default Addtodo

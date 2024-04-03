import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../slice/todoslice';


const Todolist = () => {
    const list = useSelector((state) => (state));
    const dispatch = useDispatch()


    return (
        <>
            <div className='mt-10 px-7'>
                <h1 className='text-4xl font-bold'>Todo List</h1>
                {
                    list.map((e) => {
                        return (
                            <div key={e.id} className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded">
                                <h3>{e.text}</h3>
                                <button className="text-white font-bold bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md" onClick={() => {
                                    dispatch(remove(e.id))
                                    console.log(e.id)
                                }}>Delete</button>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Todolist

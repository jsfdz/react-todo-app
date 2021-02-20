import React from 'react'
import { useForm } from 'react-hook-form'
import { create } from "../services/Api"
/* import '../scss/CreateTodo.scss' */

export const
    CreateTodo = ({ retriveTask }) => {

        const { handleSubmit, register, errors } = useForm()

        const onSubmit = async (data, event) => {
            await create(data)
            retriveTask()
            event.target.reset()
        }

        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-container">
                    <label htmlFor="name">Assign to:</label>
                    <input
                        type='text'
                        name='student'
                        id='student'
                        ref={register({ required: true })}
                        placeholder='Name who will do the homework'
                    />
                    {errors.student && <p className="error-msg">This is required</p>}
                </div>
                <div className="input-container description">
                    <label htmlFor="task">Task to be assigned:</label>
                    <input
                        type='text'
                        name='task'
                        id='task'
                        ref={register({ required: true })}
                        placeholder='Write the task to assign'
                    />
                    {errors.task && <p className='error-msg'>This is required</p>}
                </div>
                <div className="btn-container">
                    <button>Add</button>
                </div>
            </form>
        )
    }
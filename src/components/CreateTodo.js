import React from 'react'
import { useForm } from 'react-hook-form'
import { create } from "../services/Api"
import '../scss/CreateTodo.scss'

export const
    CreateTodo = ({ retriveTask }) => {

        const { handleSubmit, register, errors } = useForm()

        const onSubmit = async (data, event) => {
            await create(data)
            retriveTask()
            event.target.reset()
        }

        return (
            <form onSubmit={handleSubmit(onSubmit)} className='submit-form'>
                <div className='todo-list'>
                    <div className='file-input'>
                        <input
                            type='text'
                            className='student'
                            name='student'
                            ref={register({ required: true })}
                            placeholder='write your name'
                            required
                        />
                    </div>
                </div>
                {errors.student && <p className='error-msg'>This is required</p>}

                <div className='todo-list'>
                    <div className='file-input'>
                        <input
                            type='text'
                            className='task'
                            name='task'
                            ref={register({ required: true })}
                            placeholder='write task'
                        />
                        <button className='button pink'>
                            Add
                        </button>
                    </div>
                </div>
                {errors.task && <p className='error-msg'>This is required</p>}

            </form>
        )
    }
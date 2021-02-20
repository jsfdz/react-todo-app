import React, { useState, useEffect } from "react"
import { TodoItem } from "./TodoItem";
import { CreateTodo } from './CreateTodo'
import { get, remove, update } from "../services/Api"
/* import { Svg } from "./Svg"; */

export const
    TodoContainer = () => {

        const [tasks, setTasks] = useState([])

        useEffect(() => {
            retriveTask()
        }, [])

        const
            retriveTask = () => {
                get().then(response => {
                    setTasks(response.data.todos)
                }).catch()
            },

            handleChangeDelete = async (id) => {
                await remove(id)
                retriveTask()
            },

            handleCheckbox = async (todo, e) => {
                const { checked } = e.target
                await update(todo._id, { ...todo, isCompleted: checked })
                retriveTask()
            }

        return (
            <>
                <div className="form-container">
                    <CreateTodo
                    retriveTask={retriveTask}
                    />
                </div>
                
                <div className="task-container">
                    <div className="list-task">
                        <p>Tasks to do</p>
                    </div>
                    {/* <Svg /> */}
                    {tasks &&
                        tasks.map(task =>
                        (
                            <TodoItem
                                key={task._id}
                                todo={task}
                                onChangeDelete={handleChangeDelete}
                                onChangeCheckbox={handleCheckbox}
                            />
                        )
                        )
                    }
                </div>
            </>
        )
    }
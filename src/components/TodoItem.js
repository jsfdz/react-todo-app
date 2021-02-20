import React from 'react'

export const TodoItem = ({ todo, onChangeDelete, onChangeCheckbox }) => {
    const { _id, task, student, isCompleted, } = todo

    return (
        <>
            <div className="task">
                <div className="task-description">
                    <p> Assigned to: {student}</p> 
                    <p className="" id={_id}>{task}</p> 
                </div>
                <div className="task-options">
                    <div>
                        <input 
                            name="checkbox"
                            type="checkbox"
                            defaultChecked={isCompleted}
                            onChange={(e) => onChangeCheckbox(todo, e)}
                        />
                    </div>
                    <div>
                        <i className="fas fa-trash-alt" onClick={() => onChangeDelete(_id)}></i>
                    </div>
                </div>
            </div>
        </>
    )
}
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import "../scss/TodoItem.scss";

export const TodoItem = ({ todo, onChangeDelete, onChangeCheckbox }) => {

    const { _id, task, student, isCompleted, } = todo

    return (
        <>
            <label className="todo new-item">
                <input
                    className="todo__state"
                    name="checkbox"
                    type="checkbox"
                    defaultChecked={isCompleted}
                    onChange={(e) => onChangeCheckbox(todo, e)}
                />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 200 25"
                    className="todo__icon"
                >
                    <use xlinkHref="#todo__line" className="todo__line" />
                    <use xlinkHref="#todo__box" className="todo__box" />
                    <use xlinkHref="#todo__check" className="todo__check" />
                    <use xlinkHref="#todo__circle" className="todo__circle" />
                </svg>
                <div className="todo__text">
                    <span>{task} - {student}</span>
                    <button
                        className='btn-delete'
                        onClick={() => onChangeDelete(_id)}
                    >
                        <FontAwesomeIcon
                            icon={faTrashAlt}
                        />
                    </button>
                </div>
            </label>
        </>
    )
}
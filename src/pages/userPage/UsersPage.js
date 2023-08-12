import React, { useState } from "react";
import User from "../../components/User";
import { useDispatch, useSelector } from "react-redux";
import { addAction, changeInputAction, deleteAction, clearAction } from "../../redux/actions"; // Добавлено действие clearAction

function UsersPage() {
    const [localValue, setLocalValue] = useState("");

    const { users } = useSelector((state) => state.usersReducer);

    const dispatch = useDispatch();

    const changeInput = (event) => {
        dispatch(changeInputAction(event.target.value));
        setLocalValue(event.target.value);
    };

    const addUser = () => {
        dispatch(addAction(localValue));
    };

    const deleteAll = () => {
        dispatch(deleteAction());
        setLocalValue("");
    };

    const clearAll = () => {
        dispatch(clearAction()); // Вызываем действие для очистки списка
    };

    return (
        <div>
            <h1>{localValue}</h1>
            <input type="text" placeholder="name" value={localValue} onChange={changeInput}></input>
            <button onClick={addUser}>add</button>
            <button onClick={deleteAll}>delete all</button>
            <button onClick={clearAll}>clear all</button> {/* Добавлена кнопка для очистки списка */}
            {users.map((user, idx) => (
                <User key={idx} userName={user} />
            ))}
        </div>
    );
}

export default UsersPage;

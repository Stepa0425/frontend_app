import React, {useState, useEffect} from "react";
import {listUsers} from "../services/UserService";
import {useNavigate} from "react-router-dom";

const ListUserComponent = () => {

    const [users, setUsers] = useState([])
    const navigator = useNavigate();

    useEffect(() => {
        listUsers().then((response) => {
            setUsers(response.data);
        }).catch(error => {
            console.error(error);
        })

    }, []);

    const formatBooleanValue = (value) => {
        const badgeClass = value ? "bg-success" : "bg-danger";
        const icon = value ? "✓" : "✗";
        return <span className={`badge ${badgeClass}`}>{icon}</span>;
    };


    function addNewUser() {
        navigator("/add-user")
    }

    return (
        <div className="container">
            <h2 className="text-center">Список пользователей</h2>
            <button className='btn btn-dark mb-2' onClick={addNewUser}>Регистрация</button>
            <table className="table table-striped table-bordered text-center">
                <thead>
                <tr>
                    <th className="align-middle">Идентификатор пользователя</th>
                    <th className="align-middle">Имя</th>
                    <th className="align-middle">Фамилия</th>
                    <th className="align-middle">Логин</th>
                    <th className="align-middle">Адрес</th>
                    <th className="align-middle">Пароль</th>
                    <th className="align-middle">Номер телефона</th>
                    <th className="align-middle">Администратор</th>
                    <th className="align-middle">Баланс</th>
                </tr>
                </thead>
                <tbody>
                {
                    users.map(user =>
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.surName}</td>
                            <td>{user.email}</td>
                            <td>{user.address}</td>
                            <td>{user.password}</td>
                            <td>{user.phone}</td>
                            <td>{formatBooleanValue(user.isAdmin)}</td>
                            <td>{user.balance}</td>
                        </tr>)
                }
                </tbody>
            </table>
        </div>
    )
}
export default ListUserComponent



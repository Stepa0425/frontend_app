import React, {useState, useEffect} from "react";
import {listUsers} from "../services/UserService";

const ListUserComponent = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        listUsers().then((response)=> {
            setUsers(response.data);
        }).catch(error => {
            console.error(error);
        })

    }, []);

    /*const dummyData = [
        {
            "id": 1,
            "name": "Артем",
            "surName": "Масько",
            "email": "art@gmail.com",
            "address": "Гомель, Казимирова 5",
            "password": "pass",
            "phone": "295874124",
            "isAdmin": false,
            "balance": 10
        },
        {
            "id": 2,
            "name": "Виктор",
            "surName": "Матвеев",
            "email": "mat@gmail.com",
            "address": "Речица, Сурганова 14",
            "password": "password",
            "phone": "295847924",
            "isAdmin": false,
            "balance": 87
        },
        {
            "id": 3,
            "name": "Никита",
            "surName": "Крушин",
            "email": "kru@gmail.com",
            "address": "Минск, Люцинская 49",
            "password": "ps",
            "phone": "336548712",
            "isAdmin": false,
            "balance": 2
        }
    ]*/

    const formatBooleanValue = (value) => {
        const badgeClass = value ? "bg-success" : "bg-danger";
        const label = value ? "True" : "False";
        return <span className={`badge ${badgeClass}`}>{label}</span>;
    };

    return (
        <div className="container">
            <h2 className="text-center">List of Users</h2>
            <table className="table table-striped table-bordered">
                <thead>
                <tr>
                    <th>User Id</th>
                    <th>User Name</th>
                    <th>User SurName</th>
                    <th>User Email</th>
                    <th>User Address</th>
                    <th>User Password</th>
                    <th>User Phone</th>
                    <th>User IsAdmin</th>
                    <th>User Balance</th>
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



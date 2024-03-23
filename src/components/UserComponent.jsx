import React, {useState} from 'react';
import {createUser} from "../services/UserService";
import {useNavigate} from "react-router-dom";

const UserComponent = () => {
    const [name, setName] = useState("");
    const [surName, setSurName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [isAdmin] = useState(false);
    const [balance] = useState(0.0);

    const [errors, setErrors] = useState({
        name: "",
        surName: "",
        email: "",
        address: "",
        password: "",
        phone: ""
    })
    const navigator = useNavigate();

    function saveUser(e) {
        e.preventDefault();
        if (validateForm()) {
            const user = {name, surName, email, address, password, phone, isAdmin, balance}
            console.log(user)

            createUser(user).then((response) => {
                console.log(response.data);
                navigator("/users")
            })
        }
    }

    function validateForm() {
        let valid = true;
        const errorsCopy = {...errors}

        if (name.trim()) {
            errorsCopy.name = "";
        } else {
            errorsCopy.name = "Требуется указать имя.";
            valid = false;
        }

        if (surName.trim()) {
            errorsCopy.surName = "";
        } else {
            errorsCopy.surName = "Требуется указать фамилию.";
            valid = false;
        }

        if (email.trim()) {
            errorsCopy.email = "";
        } else {
            errorsCopy.email = "Требуется указать логин";
            valid = false;
        }

        if (address.trim()) {
            errorsCopy.address = "";
        } else {
            errorsCopy.address = "Требуется указать адрес места проживания.";
            valid = false;
        }

        if (password.trim()) {
            errorsCopy.password = "";
        } else {
            errorsCopy.password = "Требуется указать пароль.";
            valid = false;
        }

        if (phone.trim()) {
            errorsCopy.phone = "";
        } else {
            errorsCopy.phone = "Требуется указать телефон.";
            valid = false;
        }

        setErrors(errorsCopy);
        return valid;
    }

    return (
        <div className="container py-10">
            <h1 className="mb-3 text-center">Регистрация</h1>
            <div className="container py-20">
                <div className="col md-7">
                    <h3>Введите ваши данные</h3>
                    <form>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <label htmlFor="firstName" className="form-label">Имя</label>
                                <input type="text"
                                       name="name"
                                       id="firstName"
                                       className={`form-control ${ errors.name ? "is-invalid" : ""}`}
                                       onChange={(e) => setName(e.target.value)}
                                       /*pattern="^[a-zA-Zа-яА-Я]{1,30}$"*/
                                       placeholder="Введите имя пользователя"
                                       value={name}
                                       maxLength="30"
                                />
                                {errors.name && <div className="invalid-feedback">{ errors.name } </div> }
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="Surname" className="form-label">Фамилия</label>
                                <input type="text"
                                       name="surname"
                                       id="Surname"
                                       className={`form-control ${errors.surName ? "is-invalid" : ""}`}
                                       onChange={(e) => setSurName(e.target.value)}
                                       /*pattern="^[a-zA-Zа-яА-Я]{1,30}$"*/
                                       placeholder="Введите фамилию пользователя"
                                       value={surName}
                                       maxLength="30"
                                />
                                {errors.surName && <div className="invalid-feedback">{errors.surName}</div>}
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="Phone" className="form-label">Номер телефона</label>
                                <input type="text"
                                       name="phone"
                                       id="Phone"
                                       className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                                       onChange={(e) => setPhone(e.target.value)}
                                      /* pattern="[0-9]*"*/
                                       placeholder="29XXXXXXXXX, 44XXXXXXX, 25XXXXXXX, 33ХХХХХХХ"
                                       value={phone}
                                       maxLength="9"
                                       minLength="9"
                                       inputMode="numeric"
                                />
                                {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="Email" className="form-label">Email</label>
                                <input type="email"
                                       name="email"
                                       id="Email"
                                       className={`form-control ${errors.email ? "is-invalid" : ""}`}
                                       onChange={(e) => setEmail(e.target.value)}
                                       placeholder="you@example.com"
                                       value={email}
                                />
                                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="password" className="form-label">Пароль</label>
                                <div className="input-group has-validation">
                                    <input type="password"
                                           name="password"
                                           id="password"
                                           className={`form-control ${errors.password ? "is-invalid" : ""}`}
                                           onChange={(e) => setPassword(e.target.value)}
                                           /*pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$"*/
                                           placeholder="Введите пароль"
                                           value={password}
                                           maxLength="100"
                                    />
                                    {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                                </div>
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="Address" className="form-label">Адрес</label>
                                <input type="text"
                                       name="address"
                                       id="Address"
                                       className={`form-control ${errors.address ? "is-invalid" : ""}`}
                                       onChange={(e) => setAddress(e.target.value)}
                                       /*pattern="^[a-zA-Zа-яА-Я0-9\s,.ё]{1,100}$"*/
                                       placeholder="Введите адрес вашего проживания"
                                       value={address}
                                       maxLength="100"
                                />
                                {errors.address && <div className="invalid-feedback">{errors.address}</div>}
                            </div>
                        </div>

                        <div className="row mt-3 justify-content-center align-items-end">
                            <div className="col-md-4 text-center">
                                <button className="btn btn-dark w-100 py-2"
                                        onClick={saveUser}
                                >Зарегистрироваться!
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UserComponent;
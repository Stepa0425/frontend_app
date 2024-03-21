import React, {useState} from 'react';

const UserComponent = () => {
    const [name, setName] = useState("");
    const [surName, setSurName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const isAdmin = useState(false);
    const balance = useState(0.0);
    function saveUser(e) {
        e.preventDefault();
        const user = {name, surName, email, phone, address, password, isAdmin, balance}
        console.log(user)
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
                                       className="form-control"
                                       onChange={(e) => setName(e.target.value)}
                                       pattern="^[a-zA-Zа-яА-Я]{1,30}$"
                                       placeholder="Введите имя пользователя"
                                       value={name}
                                       required=""
                                       maxLength="30"
                                />
                                <div className="invalid-feedback">
                                    Требуется действительное значение
                                </div>
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="Surname" className="form-label">Фамилия</label>
                                <input type="text"
                                       name="surname"
                                       id="Surname"
                                       className="form-control"
                                       onChange={(e) => setSurName(e.target.value)}
                                       pattern="^[a-zA-Zа-яА-Я]{1,30}$"
                                       placeholder="Введите фамилию пользователя"
                                       value={surName}
                                       required=""
                                       maxLength="30"
                                />
                                <div className="invalid-feedback">
                                    Требуется действительное значение
                                </div>
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="Phone" className="form-label">Номер телефона</label>
                                <input type="text"
                                       name="phone"
                                       id="Phone"
                                       className="form-control"
                                       onChange={(e) => setPhone(e.target.value)}
                                       pattern="[0-9]*"
                                       placeholder="29XXXXXXXXX, 44XXXXXXX, 25XXXXXXX, 33ХХХХХХХ"
                                       value={phone}
                                       maxLength="9"
                                       minLength="9"
                                       required=""
                                       inputMode="numeric"
                                />
                                <div className="invalid-feedback">
                                    Требуется действительное значение
                                </div>
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="Email" className="form-label">Email</label>
                                <input type="email"
                                       name="email"
                                       id="Email"
                                       className="form-control"
                                       onChange={(e) => setEmail(e.target.value)}
                                       placeholder="you@example.com"
                                       value={email}
                                       required=""
                                />
                                <div className="invalid-feedback">
                                    Требуется действительное значение
                                </div>
                            </div>
                            <div className="message-container">
                                {/* Тут должно быть содержимое для вывода сообщений */}
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="password" className="form-label">Пароль</label>
                                <div className="input-group has-validation">
                                    <input type="password"
                                           name="password"
                                           id="password"
                                           className="form-control"
                                           onChange={(e) => setPassword(e.target.value)}
                                           pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$"
                                           placeholder="Введите пароль"
                                           value={password}
                                           required=""
                                           maxLength="100"
                                    />
                                    <div className="invalid-feedback">
                                        Требуется действительное значение
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="Address" className="form-label">Адрес</label>
                                <input type="text"
                                       name="address"
                                       id="Address"
                                       className="form-control"
                                       onChange={(e) => setAddress(e.target.value)}
                                       pattern="^[a-zA-Zа-яА-Я0-9\s,.ё]{1,100}$"
                                       placeholder="Введите адрес вашего проживания"
                                       value={address}
                                       required=""
                                       maxLength="100"
                                />
                            </div>
                        </div>

                        <div className="row mt-3 justify-content-center align-items-end">
                            <div className="col-md-4 text-center">
                                <button className="btn btn-dark w-100 py-2"
                                        type="submit"
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
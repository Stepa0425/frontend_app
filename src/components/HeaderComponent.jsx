import React from 'react'

const HeaderComponent = ({userId, isAdmin}) => {
    return (
        <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-2 ">
            <a href="/" className="d-flex align-items-center link-body-emphasis text-decoration-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
                    <path fill="#000000"
                          d="M18 11h-3.18C14.4 9.84 13.3 9 12 9c-1.3 0-2.4.84-2.82 2H6c-.33 0-2-.1-2-2V8c0-1.83 1.54-2 2-2h10.18C16.6 7.16 17.7 8 19 8a3 3 0 0 0 3-3a3 3 0 0 0-3-3c-1.3 0-2.4.84-2.82 2H6C4.39 4 2 5.06 2 8v1c0 2.94 2.39 4 4 4h3.18c.42 1.16 1.52 2 2.82 2c1.3 0 2.4-.84 2.82-2H18c.33 0 2 .1 2 2v1c0 1.83-1.54 2-2 2H7.82C7.4 16.84 6.3 16 5 16a3 3 0 0 0-3 3a3 3 0 0 0 3 3c1.3 0 2.4-.84 2.82-2H18c1.61 0 4-1.07 4-4v-1c0-2.93-2.39-4-4-4m1-7a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1M5 20a1 1 0 0 1-1-1a1 1 0 0 1 1-1a1 1 0 0 1 1 1a1 1 0 0 1-1 1Z"/>
                </svg>
                <span className="fs-4" style={{ color: 'black' }}><b>Black link</b></span>
            </a>
            <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto" style={{ color: 'black' }}>
                {/*<a type="button" className="btn btn-dark rounded-pill px-3 mx-1" data-bs-toggle="modal"
                   data-bs-target="#modalChoice">Мой профиль</a>*/}
                <a type="button" className="btn btn-dark rounded-pill px-3 mx-1"
                   href="/">Мой профиль</a>
                <a className="btn btn-dark rounded-pill px-3 mx-1" href="/">Тарифы</a>
                <a className="btn btn-dark rounded-pill px-3 mx-1" href="/">Услуги</a>
                {/*<a type="button" className="btn btn-dark rounded-pill px-3 mx-1"
                   href="/users">Пользователи</a>
                <a type="button" className="btn btn-dark rounded-pill px-3 mx-1"
                   href="/analysis">Аналитика</a>
                <a className="btn btn-dark rounded-pill px-3 mx-1" href="/login">Войти</a>*/}
                <a className="btn btn-dark rounded-pill px-3 mx-1" href="/logout">Выйти</a>
                <a className="btn btn-dark rounded-pill px-3 mx-1" href="/login">Войти</a>
            </nav>
        </div>
    )
}
export default HeaderComponent

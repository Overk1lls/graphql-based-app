import React from 'react';
import logo from 'C:/Users/Yury/Documents/ShareX/Screenshots/2021-05/chrome_IBXPksTO7o.png';

export default ContentChart => (
    <div className="container pt-5 my-5">
        <div className="row">
            <div className="col-lg-7 order-2 order-lg-1 content">
                <h2>Перегляньте пройдений шлях</h2>
                <p>Переходьте на особисту сторінку користувача для аналізу ваших дій та ефективності навчання за останні роки на ресурсі E-Olymp.
                    Зробіть якісну оцінку вашим знанням для кожного року окремо. Отримайте:
                </p>
                <ul>
                    <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check mr-2" viewBox="0 0 16 16">
                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                    </svg>Картку користувача із статистикою виконаних завдань</li>
                    <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check mr-2 my-3" viewBox="0 0 16 16">
                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                    </svg>Детально побудований графік із аналізом відправлених рішень</li>
                </ul>
            </div>
            <div className="col-lg-5 order-1 order-lg-2">
                <img className="img-fluid" src={logo} />
            </div>
        </div>
    </div>
);
import logo from '../../../img/user_table_2.png';

const ContentTable = () => (
    <div className="container pt-5 my-5">
        <div className="row">
            <div className="col-lg-6 order-2 order-lg-1 content">
                <h2>Можливість навчатися у найкращих</h2>
                <p>Спробуйте свої сили у програмувані та попадіть до таблиці кодерів Сумського Державного Університету за версією веб-ресурсу E-Olymp.
                    Також отримайте змогу переглянути свої досягнення на особистій сторінці у вигляді статистики та графіку.</p>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
                <img className="img-fluid" src={logo} alt="Таблиця з користувачами" />
            </div>
        </div>
    </div>
);

export default ContentTable;
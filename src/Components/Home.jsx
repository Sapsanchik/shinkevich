import React from 'react';
import { Button } from 'flowbite-react';

const Home = () => {
  return (
    <section>
      <main>
        <nav>
          <div className="h-48 mb-2">
            <ul className="pt-6 grid grid-cols-12 gap-1 text-white ">
              <li className="col-start-3">
                <a href="#">Shinkevich@</a>
              </li>
              <li>
                <a href="#price">УСЛУГИ И ЦЕНЫ</a>
              </li>
              <li>
                <a href="#about">О НАС</a>
              </li>
              <li>
                <a href="#work">НАШИ РАБОТЫ</a>
              </li>
              <li>
                <a href="#contacts">КОНТАКТЫ</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="grid grid-cols-11 mt-5 mb-2.5">
          <h1 className="drilling text-white col-start-3 col-span-3 flex items-center pl-3.5">
            Бурение
          </h1>
        </div>
        <div className="grid grid-cols-11">
          <h1 className="drilling-water flex col-start-3 col-span-3 mt-3">
            СКВАЖИН НА ВОДУ
          </h1>
        </div>
        <div className="grid grid-cols-11">
          <p className="drilling-geo text-white flex col-start-3 col-span-3 mt-3">
            Инженерно-геологические изыскания для строительства и бурения
            скважин
          </p>
        </div>
        <div className="grid grid-cols-11">
          <Button className="drilling-but col-start-3 mt-8">
            <a href="#price">ПОДРОБНЕЕ</a>{' '}
          </Button>
        </div>
      </main>
    </section>
  );
};

export default Home;

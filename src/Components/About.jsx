import React from 'react';
import { Card } from 'flowbite-react';
import about_1 from '../img/about_1.png';
import about_2 from '../img/about_2.png';
import about_3 from '../img/about_3.png';
import about_4 from '../img/about_4.png';
import about_5 from '../img/about_5.png';
import about_6 from '../img/about_6.png';

const About = () => {
  return (
    <section id="about">
      <div className="grid grid-cols-11 mt-5 pt-5 mb-2.5">
        <h1 className="about text-white col-start-3 col-span-3 flex items-center pl-3.5">
          О компании
        </h1>
      </div>
      <div className="grid grid-cols-12">
        <div className="col-start-4 col-span-2 justify-center">
          <Card className="card" imgSrc={about_1}>
            <h5 className="card-h">5 лет опыта</h5>
            <p className="card-p flex font-normal text-white">
              Опытные специалисты и дипломированные инженеры
            </p>
          </Card>
        </div>
        <div className="col-start-6 col-span-2">
          <Card className="card" imgSrc={about_2}>
            <h5 className="card-h">Полный спектр услуг</h5>
            <p className="card-p font-normal text-white">
              От геологи до сантехники
            </p>
          </Card>
        </div>
        <div className="col-start-8 col-span-2">
          <Card className="card" imgSrc={about_3}>
            <h5 className="card-h">Работа по договору</h5>
            <p className="card-p font-normal text-white">
              Наличная и безналичная оплата
            </p>
          </Card>
        </div>
        <div className="col-start-4 col-span-2">
          <Card className="card" imgSrc={about_4}>
            <h5 className="card-h">Строгое соблюдение сроков</h5>
            <p className="card-p font-normal text-white">
              У нас плотный график
            </p>
          </Card>
        </div>
        <div className="col-start-6 col-span-2">
          <Card className="card" imgSrc={about_5}>
            <h5 className="card-h">Гибкие цены</h5>
            <p className="card-p font-normal text-white">
              Потребность в воде не ударит по кошельку
            </p>
          </Card>
        </div>
        <div className="col-start-8 col-span-2">
          <Card className="card" imgSrc={about_6}>
            <h5 className="card-h">Качество</h5>
            <p className="card-p font-normal text-white pb-14">
              Гарантия 2 года на произведенные работы
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from 'react';
import acc_1 from '../img/acc_1.jpg';
import acc_2 from '../img/acc_2.jpg';
import acc_3 from '../img/acc_3.jpg';
import { Tabs } from 'flowbite-react';

const Price = () => {
  return (
    <section id="price">
      <div className="grid grid-cols-11 mt-5 mb-2.5">
        <h1 className="price col-start-3 col-span-3 flex items-center pl-3.5">
          Услуги и цены
        </h1>
        <Tabs.Group className="col-start-6 col-span-4">
          <Tabs.Item active={true} title="Бурение скважин на воду">
            <img src={acc_1} alt="acc_1" />
            <h1 className='tabs'>Бурение скважин на воду</h1>
            <p className='tabs-p'>
              Любой обладатель загородного дома сталкивается с проблемой,
              которая заключается в организации водоснабжения. Можно выбрать
              один из двух вариантов решения этого вопроса: подключиться к
              централизованному водоснабжению или же заняться самостоятельным
              обустройством автономного водопровода. Воспользовавшись вторым
              вариантом, можно значительно сэкономить время, которое
              понадобиться на сбор документов и разрешений.
            </p>
          </Tabs.Item>
          <Tabs.Item title="Абиссинский колодец">
            <img src={acc_2} alt="acc_1" />
            <h1 className='tabs'>Абиссинский колодец</h1>
            <p className='tabs-p'>
              Это особым образом оборудованная скважина, которая в настоящее
              время стала одним из самых популярных решений для водоснабжения
              загородного участка.
            </p>
          </Tabs.Item>
          <Tabs.Item title="Сопутствующее оборудование">
            <img src={acc_3} alt="acc_1" />
            <h1 className='tabs'>Сопутствующее оборудование</h1>
            <p className='tabs-p'>
              Подбор оборудования по оптимальному соотношению
              цена/мощность/качество. Установка и настройка, выполнение всех
              сопутствующих работ, пуск и наладка. Колодцы и скважины “под
              ключ”. Подводка труб для полива или водоснабжения частного дома.
              Обустройство закрытого колодца.
            </p>
          </Tabs.Item>
        </Tabs.Group>
      </div>
    </section>
  );
};

export default Price;

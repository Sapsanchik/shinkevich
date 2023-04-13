import React from 'react';
import Modal1 from './modal/Modal1';
import Modal2 from './modal/Modal2';
import Modal3 from './modal/Modal3';
import Modal4 from './modal/Modal4';
import Modal5 from './modal/Modal5';
import Modal6 from './modal/Modal6';
import Modal7 from './modal/Modal7';
import Modal8 from './modal/Modal8';


const Work = () => {
  
  return (
    <section id="work" className='pb-10'>
      <div className="grid grid-cols-11 mt-5 mb-2.5">
        <h1 className="price col-start-3 col-span-3 flex items-center pl-3.5">
          Наши работы
        </h1>
        <p className="col-start-3 col-span-5 flex">
          Вот лишь малая часть скважин пробуренных нами в Московской области за
          последние 2 года
        </p>
        <div className='col-start-3 col-span-7 flex gap-2 py-12'>
         <Modal1 />
         <Modal2 />
         <Modal3 />
         <Modal4 />
        </div>
        <div className='col-start-3 col-span-7 flex gap-2'>
          <Modal5 />
          <Modal6 />
          <Modal7 />
          <Modal8 />
        </div>
      
         
        
      </div>
    </section>
  );
};

export default Work;

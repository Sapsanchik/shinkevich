import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { BsWhatsapp } from 'react-icons/bs';
import { Button } from 'flowbite-react';

const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_3a7a7oh',
        'template_u850pmt',
        form.current,
        '0Ooq0EvBqf_eb1e8D'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contacts">
      <div className="grid grid-cols-11 mt-5 pb-20">
        <h1 className="price col-start-3 col-span-4 flex items-center pl-3.5">
          Бесплатный расчет стоимости работ
        </h1>
        <div className="form col-start-3 col-span-3">
          <article className=" flex-wrap align-middle gap-2">
            <h2 className=" text-2xl font-semibold pt-6">Расчет стоимости</h2>
            <h3 className='pb-6'>
              Оставьте свои данные, мы расчитаем стоимость и перезвоним вам!
            </h3>
          </article>

          <form
            className="flex flex-col items-center gap-3"
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              className="input w-96"
              type="text"
              name="name"
              placeholder="Ваше имя"
              required
            />
            <input
              className="input w-96"
              type="email"
              name="email"
              placeholder="Ваш email"
              required
            />
            <textarea
              className="input w-96"
              name="message"
              rows="2"
              placeholder="Ваше сообщение"
              required
            ></textarea>
            <Button className="btn w-96 hover:bg-white mb-5" type="submit">
              Отправьте сообщение
            </Button>
          </form>
          <h2 className='text-xl font-semibold'>Или напишите нам в</h2>
          <div className="flex gap-2 justify-center pb-8">
            <BsWhatsapp size={20} /> <h4>WhatsApp</h4>
            <h5>+79969384096</h5>
            <a
              className=""
              href="https://web.whatsapp.com/send?phone=89969384096"
              target="_blank"
            >
              <b>Свяжитесь с нами</b>
              
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;

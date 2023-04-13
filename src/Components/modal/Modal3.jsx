import React, {useState} from 'react'
import { Modal } from 'flowbite-react';
import p3 from '../../img/3.jpg'

const Modal3 = () => {
  const [active, setActive] = useState(false);
  return (
    <div>
      <React.Fragment>
          <img src={p3} onClick={() => setActive(!active)} alt='' />
          <Modal
            dismissible={true}
            show={active}
            onClose={() => setActive(!active)}
          >
            <Modal.Body>
              <img src={p3} alt="" />
            </Modal.Body>
          </Modal>
        </React.Fragment>
    </div>
  )
}

export default Modal3
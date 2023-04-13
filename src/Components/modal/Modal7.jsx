import React, {useState} from 'react'
import { Modal } from 'flowbite-react';
import p7 from '../../img/7.jpg'

const Modal7 = () => {
  const [active, setActive] = useState(false);
  return (
    <div>
      <React.Fragment>
          <img src={p7} onClick={() => setActive(!active)} alt='' />
          <Modal
            dismissible={true}
            show={active}
            onClose={() => setActive(!active)}
          >
            <Modal.Body>
              <img src={p7} alt="" />
            </Modal.Body>
          </Modal>
        </React.Fragment>
    </div>
  )
}

export default Modal7
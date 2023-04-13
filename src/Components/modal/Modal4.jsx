import React, {useState} from 'react'
import { Modal } from 'flowbite-react';
import p4 from '../../img/4.jpg'

const Modal4 = () => {
  const [active, setActive] = useState(false);
  return (
    <div>
      <React.Fragment>
          <img src={p4} onClick={() => setActive(!active)} alt='' />
          <Modal
            dismissible={true}
            show={active}
            onClose={() => setActive(!active)}
          >
            <Modal.Body>
              <img src={p4} alt="" />
            </Modal.Body>
          </Modal>
        </React.Fragment>
    </div>
  )
}

export default Modal4
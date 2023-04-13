import React, {useState} from 'react'
import { Modal } from 'flowbite-react';
import p1 from '../../img/1.jpg'

const Modal1 = () => {
  const [active, setActive] = useState(false);
  return (
    <div>
      <React.Fragment>
          <img src={p1} onClick={() => setActive(!active)} alt='' />
          <Modal
            dismissible={true}
            show={active}
            onClose={() => setActive(!active)}
          >
            <Modal.Body>
              <img src={p1} alt="" />
            </Modal.Body>
          </Modal>
        </React.Fragment>
    </div>
  )
}

export default Modal1
import React, {useState} from 'react'
import { Modal } from 'flowbite-react';
import p6 from '../../img/6.jpg'

const Modal6 = () => {
  const [active, setActive] = useState(false);
  return (
    <div>
      <React.Fragment>
          <img src={p6} onClick={() => setActive(!active)} alt='' />
          <Modal
            dismissible={true}
            show={active}
            onClose={() => setActive(!active)}
          >
            <Modal.Body>
              <img src={p6} alt="" />
            </Modal.Body>
          </Modal>
        </React.Fragment>
    </div>
  )
}

export default Modal6
import ReactDOM from 'react-dom'

import classes from './Modal.module.css'

const portalElement = document.getElementById('overlays')

const Backdrop = (props) => {
  return <div onClick={props.onClose} className={classes.backdrop} />
}

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}> {props.children}</div>
    </div>
  )
}

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </>
  )
}

export default Modal

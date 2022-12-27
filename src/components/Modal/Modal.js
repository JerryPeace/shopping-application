import {
  ModalBlock,
  ModalBody,
  ModalClose,
  ModalContainer,
  ModalHeader,
  ModalFooter,
  ModalOverlay,
  ModalTitle,
} from './styles';

/**
 * Modal Component.
 * @param {String} title - Dispaly Title on Modal header.
 * @param {Element} footer - Dispaly Element on Modal footer.
 * @param {Element} children - Dispaly Element on Modal body.
 * @param {Boolean} active - Modal show up flag.
 * @param {Function} hideModal - close Modal callBack function.
 * @return {Element} Whole Modal Component.
 */

const Modal = ({ title, footer, children, active, hideModal }) => {
  return (
    <>
      {active && (
        <ModalBlock>
          <ModalOverlay onClick={() => hideModal()}></ModalOverlay>
          <ModalContainer data-testid="modalWrapper">
            <ModalHeader>
              <ModalTitle data-testid="modal-title">{title}</ModalTitle>
              <ModalClose data-testid="modal-close" onClick={() => hideModal()}>
                X
              </ModalClose>
            </ModalHeader>
            <ModalBody>{children}</ModalBody>
            {footer && <ModalFooter data-testid="modal-footer">{footer}</ModalFooter>}
          </ModalContainer>
        </ModalBlock>
      )}
    </>
  );
};
export default Modal;

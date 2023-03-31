import { useState } from 'react';
import ModalAdd from '../ModalAdd/ModalAdd';
import ModalEdit from '../ModalEdit/ModalEdit';
import styled from 'styled-components';
import { useRef, useEffect } from 'react';

const defaultState = {
  type: true,
  category: '',
  amount: '',
  date: new Date(),
  comment: '',
};

export const ModalMain = () => {
  const typeOfModal = 0;
  const [transaction, setTransaction] = useState(defaultState);
  const [isModalAddTransactionOpen, setIsModalAddTransactionOpen] =
    useState(true);
  const overlay = useRef();

  const onModalClose = () => {
    setIsModalAddTransactionOpen(!isModalAddTransactionOpen);
  };
  const closeModalBackdrop = event => {
    if (event.target === event.currentTarget) {
      onModalClose();
    }
  };
  const handlePressKey = event => {
    if (event.code === 'Escape') {
      onModalClose();
    }
  };

  const hendalSubmitForm = evt => {
    evt.preventDefault();
    setTransaction({
      ...transaction,
      comment: evt.target.elements.comment.value,
    });
  };

  useEffect(() => {
    overlay.current.focus();
  }, []);

  return (
    <>
      {isModalAddTransactionOpen && (
        <ModalBackdrop
          ref={overlay}
          tabIndex={-1}
          onKeyDown={handlePressKey}
          onClick={closeModalBackdrop}
        >
          <ModalBody>
            <ButtonClose onClick={closeModalBackdrop}>x</ButtonClose>
            {typeOfModal ? (
              <ModalAdd hendalSubmitForm={hendalSubmitForm} />
            ) : (
              <ModalEdit hendalSubmitForm={hendalSubmitForm} />
            )}
          </ModalBody>
        </ModalBackdrop>
      )}
    </>
  );
};

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);

  z-index: 20;
`;
const ModalBody = styled.div`
  position: absolute;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  justify-content: center;

  background-color: #fff;
  border-radius: 20px;
  padding: 40px;
  width: 540px;
`;
const ButtonClose = styled.button`
  position: absolute;
  width: 16px;
  height: 16px;
  border: none;
  border-radius: 50%;

  top: 10px;
  left: calc(100% - 27px);

  display: flex;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;

  &:hover,
  &:focus {
    border: 1px solid #000000;
    transform: rotate(-90deg);
  }
`;

import { useState } from 'react';
import ModalAdd from '../ModalAdd/ModalAdd';
import ModalEdit from '../ModalEdit/ModalEdit';
import styled from 'styled-components';
import { useRef, useEffect } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { IconContext } from 'react-icons';
import { object, string, number, date } from 'yup';

const defaultState = {
  type: true,
  category: '',
  amount: '',
  transactionDate: new Date(Date.now()),
  comment: '',
};

export const validationSchema = object().shape({
  transactionDate: date().required('Data is a required field'),
  category: string(),
  amount: number().required('Amount is a required field').positive(),
  comment: string(),
});

export const ModalMain = () => {
  const typeOfModal = 1;
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

  const handleSubmitForm = value => {
    console.log(value);

    // setTransaction({
    //   ...transaction,
    //   comment: evt.target.elements.comment.value,
    // });
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
            <ButtonClose type="button" onClick={onModalClose}>
              <IconContext.Provider value={{ size: '2.5em' }}>
                <IoCloseOutline />
              </IconContext.Provider>
            </ButtonClose>

            {typeOfModal ? (
              <ModalAdd handleSubmitForm={handleSubmitForm} />
            ) : (
              <ModalEdit handleSubmitForm={handleSubmitForm} />
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
  align-items: center;

  background-color: #fff;
  border-radius: 20px;
  padding: 40px;
  width: 540px;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;
const ButtonClose = styled.button`
  opacity: 0;
  @media screen and (min-width: 768px) {
    opacity: 1;
    position: absolute;
    top: 20px;
    right: 20px;
    border: none;
    background-color: #fff;
    padding: 0;
    cursor: pointer;
    :hover {
      transform: scale(1.1);
      color: red;
    }
  }
`;
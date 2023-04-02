import { useState } from 'react';
import ModalAdd from '../ModalAdd/ModalAdd';
import ModalEdit from '../ModalEdit/ModalEdit';
import styled from 'styled-components';
import { useRef, useEffect } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { IconContext } from 'react-icons';
import { object, string, number, date } from 'yup';

// const defaultState = {
//   type: true,
//   category: '',
//   amount: '',
//   transactionDate: new Date(Date.now()),
//   comment: '',
// };

export const validationSchema = object().shape({
  transactionDate: date().required('Data is a required field'),
  category: string(),
  amount: number().required('Amount is a required field').positive(),
  comment: string(),
});

export const ModalMain = () => {
  const typeOfModal = 'add';

  const [isModalAddTransactionOpen, setIsModalAddTransactionOpen] =
    useState(true);
  // const [Categories, setCategories] = useState([]);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            {typeOfModal === 'add' && (
              <ModalAdd handleSubmitForm={handleSubmitForm} />
            )}
            {typeOfModal === 'edit' && (
              <ModalEdit handleSubmitForm={handleSubmitForm} />
            )}
            <ModalButtonCancel type="button" onClick={onModalClose}>
              CANCEL
            </ModalButtonCancel>
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
  flex-direction: column;

  background-color: #fff;
  border-radius: 20px;
  padding: 40px 75px;
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

export const ModalButtonCancel = styled.button`
  width: 300px;
  height: 50px;
  padding: 13px 65px 13px 71px;
  border: none;
  background-color: white;
  border: 1px solid #4a56e2;
  border-radius: 20px;
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  margin-top: 20px;

  text-align: center;
  letter-spacing: 0.1em;
  color: #4a56e2;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  :hover,
  :focus {
    background-color: #4a56e2;
    color: white;
    transform: scale(1.02);
  }
`;

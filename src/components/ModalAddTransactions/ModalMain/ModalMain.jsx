import ModalAdd from '../ModalAdd/ModalAdd';
import ModalEdit from '../ModalEdit/ModalEdit';
import styled from 'styled-components';
import { IoCloseOutline } from 'react-icons/io5';
import { IconContext } from 'react-icons';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addTransaction } from 'redux/operations';
import {
  selectFinanceError,
  selectIsModalOpen,
  selectModalType,
} from 'redux/Finance/financeSelectors';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toggleModal } from 'redux/Finance/financeSlice';
import { useEffect, useRef } from 'react';

export const validationSchema = Yup.object().shape({
  transactionDate: Yup.date().required('Data is a required field'),
  categoryId: Yup.string(),
  amount: Yup.number()
    .typeError('We only accept  money!')
    .required('Amount is a required field')
    .max(10000000, 'What do you do for a living?!')
    .positive(),
  comment: Yup.string(),
});

export const ModalMain = () => {
  const isModalOpen = useSelector(selectIsModalOpen);
  const typeOfModal = useSelector(selectModalType);
  const overlay = useRef();

  const error = useSelector(selectFinanceError);

  const dispatch = useDispatch();

  const onModalClose = () => {
    dispatch(toggleModal());
  };

  const closeModalBackdrop = event => {
    if (event.currentTarget === event.target) {
      onModalClose();
    }
  };
  const handlePressKey = event => {
    if (event.code === 'Escape') {
      onModalClose();
    }
  };

  useEffect(() => {
    overlay.current.focus();
    dispatch(toggleModal());
    // eslint-disable-next-line
  }, []);

  const handleSubmitForm = values => {
    dispatch(
      addTransaction({
        transactionDate: values.transactionDate,
        type: values.type ? 'INCOME' : 'EXPENSE',
        categoryId: values.categoryId,
        comment: values.comment,
        amount: values.type ? Number(values.amount) : -Number(values.amount),
      })
    );
    if (error) {
      toast.error('Oops...something is wrong, try again!');
    }
  };

  return (
    <>
      {isModalOpen && (
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

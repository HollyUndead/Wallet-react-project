import styled from 'styled-components';
import { RxCross2 } from 'react-icons/rx';
import { useDispatch } from 'react-redux';
import { signOut } from 'redux/operations';
// import { toggleModal } from 'redux/Auth/authSlice';
import { closeModalLogOut } from 'redux/Auth/authSlice';

export const ModalLogoOut = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(signOut());
    dispatch(closeModalLogOut());
  };

  //   const handleCloseModal = () => {
  //     dispatch(toggleModal())};
  const onClose = e => {
    if (e.code === 'Escape' || e.currentTarget === e.target) {
      dispatch(closeModalLogOut());
    }
  };

  window.addEventListener('keydown', onClose);

  return (
    <>
      {/* <Overlay onClick={handleCloseModal}> */}
      <Overlay onClick={onClose}>
        <ModalContainer>
          <ModalBtnClose
            type="button"
            onClick={() => dispatch(closeModalLogOut())}
          >
            <RxCross2 />
          </ModalBtnClose>
          <Title>Confirmation</Title>
          <Text>Are you sure you want to exit</Text>
          <BtnContainer>
            <BtnCancel
              type="button"
              onClick={() => dispatch(closeModalLogOut())}
            >
              Cancel
            </BtnCancel>
            <BtnYes type="button" onClick={handleLogOut}>
              Yes, I'm sure!
            </BtnYes>
          </BtnContainer>
        </ModalContainer>
      </Overlay>
    </>
  );
};

const Overlay = styled.div`
  position: fixed;
  top: 60px;
  left: 0;
  width: 100vw;
  height: 88vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 255, 255);
  z-index: 20;

  @media screen and (min-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;

    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.25);
    z-index: 20;
  }
`;

const ModalContainer = styled.div`
  position: relative;

  width: 320px;
  height: 180px;
  background-color: #ffffff;
  padding: 10px;
  z-index: 20;

  @media screen and (min-width: 768px) {
    width: 420px;
    padding: 40px;
    border-radius: 20px;
    flex-direction: column;
  }
`;

const ModalBtnClose = styled.button`
  opacity: 0;

  @media screen and (min-width: 768px) {
    opacity: 1;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    border: none;
    border-radius: 50%;
    background-color: white;
    cursor: pointer;

    :hover {
      transform: scale(1.2);
      color: #ff00ff;
    }
  }
`;

const Title = styled.p`
  text-align: center;
  font-size: 30px;
  margin-bottom: 28px;
  color: #000000;
  @media screen and (min-width: 768px) {
    font-size: 36px;
  }
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    transform: scale(1.05);
    color: #ff00ff;
  }
`;

const Text = styled.p`
  text-align: center;
  font-size: 18px;
  margin-bottom: 42px;
  color: #000000;
  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    transform: scale(1.05);
    color: #ff00ff;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
    gap: 40px;
  }
`;

const BtnYes = styled.button`
  width: 140px;
  padding: 10px 5px;
  border: 1px solid #24cca7;
  background-color: #24cca7;
  border-radius: 20px;
  color: #ffffff;

  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  @media screen and (min-width: 768px) {
    width: 200px;
    font-size: 16px;
  }
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    background-color: #4a56e2;
    border: 1px solid #4a56e2;
    color: white;
    transform: scale(1.05);
    cursor: pointer;
  }
`;

export const BtnCancel = styled.button`
  width: 140px;
  padding: 10px 5px;
  border: none;
  background-color: #ffffff;
  border: 1px solid #4a56e2;
  border-radius: 20px;

  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #4a56e2;
  @media screen and (min-width: 768px) {
    width: 200px;
    font-size: 16px;
  }
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    background-color: #4a56e2;
    color: white;
    transform: scale(1.05);
    cursor: pointer;
  }
`;

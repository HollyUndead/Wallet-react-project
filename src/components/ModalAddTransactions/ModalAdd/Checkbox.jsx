import React from 'react';
import styled from 'styled-components';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const Checkbox = ({ checked, onChange }) => {
  return (
    <CheckboxWrapper>
      <HiddenCheckbox checked={checked} onChange={onChange} />
      <StileIncome checked={checked}>Income</StileIncome>
      <CheckboxIcon>
        {checked ? (
          <GreenCircle>
            <AiOutlinePlus style={{ color: 'white', fontSize: '1.5rem' }} />
          </GreenCircle>
        ) : (
          <RedCircle>
            <AiOutlineMinus style={{ color: 'white', fontSize: '1.5rem' }} />
          </RedCircle>
        )}
      </CheckboxIcon>
      <StileExpense checked={checked}>Expense</StileExpense>
    </CheckboxWrapper>
  );
};

const StileIncome = styled.span`
  color: ${props => (!props.checked ? '#E0E0E0' : '#24CCA7')};
  padding-right: 20px;
`;
const StileExpense = styled.span`
  color: ${props => (props.checked ? '#E0E0E0' : '#FF6596')};
  padding-left: 20px;
`;

const GreenCircle = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -2px;
  left: 0;
  height: 44px;
  width: 44px;
  border-radius: 50%;
  background-color: #24cca7;
  box-shadow: 0px 6px 15px rgba(36, 204, 167, 0.5);
`;

const RedCircle = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -2px;
  left: 50%;
  height: 44px;
  width: 44px;
  border-radius: 50%;
  background-color: #ff6596;
  box-shadow: 0px 6px 15px rgba(255, 101, 150, 0.5);
`;

const CheckboxWrapper = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

const CheckboxIcon = styled.span`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 40px;
  border: 1px solid #e0e0e0;
  border-radius: 30px;
  margin-right: 8px;
  transition: all 150ms;
`;

export default Checkbox;

import React from 'react';
import styled from 'styled-components';

const ModalAdd = ({ hendalSubmitForm }) => {
  return (
    <div>
      <ModalTitle>Add transactiocs</ModalTitle>
      <form onSubmit={hendalSubmitForm}>
        <input type="text" name="comment" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default ModalAdd;

const ModalTitle = styled.h2`
  margin: 0;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 1.35;
`;

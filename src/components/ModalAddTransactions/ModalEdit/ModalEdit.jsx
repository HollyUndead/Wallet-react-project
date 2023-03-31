import React from 'react';
import styled from 'styled-components';

const ModalEdit = ({ hendalSubmitForm }) => {
  return (
    <div>
      <ModalTitle>Edit transactiocs</ModalTitle>
      <form onSubmit={hendalSubmitForm}>
        <input type="text" name="comment" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default ModalEdit;

const ModalTitle = styled.h2`
  margin: 0;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 1.35;
`;

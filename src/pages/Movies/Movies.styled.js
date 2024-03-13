import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 10px;
`;

export const Form = styled.form`
  width: 300px;
`;
export const FormWrapper = styled.div`
  position: relative;
`;
export const Input = styled.input`
  width: 100%;
  outline: none;
  padding: 5px 24px;
  border: 1px solid #212121;
  border-radius: 5px;
`;
export const SubmitBtn = styled.button`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  outline: none;
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;
`;

import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SubContainer = styled.div`
  background: ${({ theme }) => theme.colors.neutral.white};

  padding: 24px 32px;

  border-radius: 4px;

  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.1);

  .column__logo {
    img {
      width: 80px;
    }

    h1 {
      font-size: 1.5rem;
    }
  }
`;

export const Form = styled.form`
  margin-top: 20px;
`;

export const FieldSet = styled.fieldset`
  display: flex;
  align-items: center;

  padding: 6px 12px;

  border-radius: 4px;

  border: 1px solid ${({ theme }) => theme.colors.neutral.lightGray};

  legend {
    color: ${({ theme }) => theme.colors.neutral.grayishBlue};
  }

  input {
    width: 100%;

    font-size: 1rem;
    font-weight: 400;

    color: ${({ theme }) => theme.colors.neutral.grayishBlue};
  }
`;

export const InputFileCover = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  margin-top: 20px;

  input[type='file'] {
    display: none;
  }

  img {
    width: 50px;
    height: 50px;

    object-fit: cover;

    border-radius: 50%;
  }

  color: ${({ theme }) => theme.colors.neutral.grayishBlue};
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;

  gap: 6px;

  margin-top: 22px;

  button {
    padding: 10px 26px;

    background: ${({ theme }) => theme.colors.primary.moderateBlue};

    color: ${({ theme }) => theme.colors.neutral.white};

    font-size: 0.9rem;

    border-radius: 4px;

    transition: all linear 0.3s;

    :hover {
      background: ${({ theme }) => theme.colors.primary.lightGrayishBlue};
    }
  }

  a {
    text-align: center;

    margin-top: 10px;

    font-size: 0.9rem;

    color: ${({ theme }) => theme.colors.primary.moderateBlue};

    transition: all linear 0.3s;

    :hover {
      color: ${({ theme }) => theme.colors.primary.lightGrayishBlue};
    }
  }
`;

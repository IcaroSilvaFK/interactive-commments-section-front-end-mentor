import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Column = styled.div`
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

export const Between = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  margin-top: 22px;

  a {
    font-size: 0.9rem;

    text-transform: lowercase;

    color: ${({ theme }) => theme.colors.primary.moderateBlue};
    text-decoration: underline;

    transition: all linear 0.3s;

    :hover {
      color: ${({ theme }) => theme.colors.primary.lightGrayishBlue};
      text-decoration: none;
    }
  }

  button {
    padding: 10px 22px;

    background: ${({ theme }) => theme.colors.primary.moderateBlue};

    color: ${({ theme }) => theme.colors.neutral.white};

    border-radius: 4px;

    font-weight: 500;

    transition: all linear 0.3s;

    :hover {
      background: ${({ theme }) => theme.colors.primary.lightGrayishBlue};
    }
  }
`;

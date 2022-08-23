import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  width: 100%;

  textarea {
    width: 100%;
    height: 90px;

    resize: none;

    padding: 6px 10px;

    border-radius: 4px;

    border: 1px solid ${({ theme }) => theme.colors.primary.lightGrayishBlue};

    font-size: 1rem;
    color: ${({ theme }) => theme.colors.neutral.grayishBlue};

    :focus {
      outline: 1px solid ${({ theme }) => theme.colors.primary.moderateBlue};
    }
  }

  button {
    margin-top: 6px;

    padding: 8px 16px;
    text-transform: uppercase;
    font-weight: 600;

    background: ${({ theme }) => theme.colors.primary.moderateBlue};

    color: ${({ theme }) => theme.colors.neutral.white};

    border-radius: 4px;

    transition: all linear 0.3s;
    :hover {
      background: ${({ theme }) => theme.colors.primary.lightGrayishBlue};
    }
  }
`;

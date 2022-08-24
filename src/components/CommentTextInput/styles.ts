import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  background: ${({ theme }) => theme.colors.neutral.white};

  padding: 20px 30px;

  gap: 22px;

  max-width: 600px;
  margin: 0 auto;

  border-radius: 6px;

  img {
    width: 50px;
    height: 50px;

    object-fit: cover;

    border-radius: 50%;
  }

  @media screen and (max-width: 500px) {
    width: 100%;
    position: relative;

    padding: 20px;

    flex-direction: column-reverse;

    img {
      position: absolute;

      bottom: 10px;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: flex-start;

  gap: 12px;

  textarea {
    width: 370px;
    height: 80px;

    resize: none;

    border-color: ${({ theme }) => theme.colors.neutral.lightGray};

    outline: none;

    padding: 10px;

    color: ${({ theme }) => theme.colors.neutral.grayishBlue};

    font-size: 1rem;
  }

  button {
    padding: 10px 22px;

    display: flex;
    align-items: center;

    font-weight: bold;
    background: ${({ theme }) => theme.colors.primary.moderateBlue};

    color: ${({ theme }) => theme.colors.neutral.white};

    border-radius: 6px;

    text-transform: uppercase;
  }

  @media screen and (max-width: 500px) {
    width: 100%;

    flex-direction: column;
    align-items: flex-end;

    textarea {
      width: 100%;
    }
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-end;

  gap: 5px;

  span {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.neutral.grayishBlue};
  }
`;

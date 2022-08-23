import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.1);
`;

export const Modal = styled.div`
  background: ${({ theme }) => theme.colors.neutral.white};

  padding: 22px 18px;

  border-radius: 10px;
`;

export const Heading = styled.div`
  padding: 22px 0;

  b {
    font-size: 1.2rem;

    color: ${({ theme }) => theme.colors.neutral.darkBlue};
  }
`;

export const Content = styled.div`
  max-width: 350px;

  font-size: 1.1rem;

  color: ${({ theme }) => theme.colors.neutral.grayishBlue};

  font-weight: 400;
`;

export const Row = styled.div`
  margin-top: 22px;

  display: flex;
  justify-content: space-between;

  button {
    color: ${({ theme }) => theme.colors.neutral.white};

    padding: 10px 16px;

    border-radius: 4px;

    text-transform: uppercase;
    font-weight: 600;
  }

  .row__cancel {
    background: ${({ theme }) => theme.colors.neutral.grayishBlue};
  }
  .row__delete {
    background: ${({ theme }) => theme.colors.primary.softRed};
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.neutral.white};

  padding: 12px 18px;

  display: flex;

  max-width: 600px;

  margin: 0 auto;

  border-radius: 6px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;

  gap: 18px;
`;

export const SectionLikeds = styled.div`
  background: ${({ theme }) => theme.colors.neutral.veryLightGray};

  padding: 4px;

  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 10px;

  b {
    padding: 0 6px;
    color: ${({ theme }) => theme.colors.primary.moderateBlue};
  }

  button {
    background: transparent;

    padding: 4px;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      fill: ${({ theme }) => theme.colors.primary.lightGrayishBlue};
    }
  }
`;

export const SectionPost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .row {
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
      display: flex;
      align-items: center;

      gap: 10px;

      img {
        width: 40px;
      }

      span {
        color: ${({ theme }) => theme.colors.neutral.grayishBlue};
      }

      b {
        color: ${({ theme }) => theme.colors.neutral.darkBlue};
      }
    }

    button {
      color: ${({ theme }) => theme.colors.primary.moderateBlue};

      font-weight: 700;

      background: transparent;

      display: flex;
      align-items: center;
      gap: 6px;
    }
  }

  p {
    padding: 10px 0;

    color: ${({ theme }) => theme.colors.neutral.grayishBlue};
    font-weight: 400;

    max-width: 500px;
  }
`;

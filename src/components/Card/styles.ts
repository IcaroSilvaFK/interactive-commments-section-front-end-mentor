import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;

  max-width: 600px;
  width: 100%;

  background: ${({ theme }) => theme.colors.neutral.white};

  padding: 12px 20px;

  display: grid;
  grid-template-areas: 'indicator user reply' 'indicator content content';

  gap: 12px;

  margin: 0 auto;

  border-radius: 6px;

  @media screen and (max-width: 500px) {
    grid-template-areas:
      'user user'
      'content content'
      'indicator reply';
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: flex-start;

  gap: 18px;

  .reply {
    color: ${({ theme }) => theme.colors.primary.moderateBlue};
    gap: 6px;

    font-weight: bold;
  }

  button {
    transition: all linear 0.3s;

    background: transparent;

    padding: 4px;

    display: flex;
    align-items: center;
    justify-content: center;

    color: ${({ theme }) => theme.colors.primary.lightGrayishBlue};

    :hover {
      color: ${({ theme }) => theme.colors.primary.moderateBlue};
    }
  }
`;

export const SectionLikeds = styled.div`
  align-self: center;

  grid-area: indicator;

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
    font-weight: 700;

    background: transparent;

    display: flex;
    align-items: center;

    transition: all linear 0.3s;
  }

  button {
    color: ${({ theme }) => theme.colors.primary.lightGrayishBlue};

    :hover {
      color: ${({ theme }) => theme.colors.primary.moderateBlue};
    }
  }

  @media screen and (max-width: 500px) {
    flex-direction: row;
  }
`;

export const ContainerProfile = styled.div`
  grid-area: user;

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

  @media screen and (max-width: 500px) {
    font-size: 0.8rem;

    img {
      width: 30px;
    }
  }
`;
export const ContainerReply = styled.div`
  grid-area: reply;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  button {
    font-weight: 700;

    background: transparent;

    display: flex;
    align-items: center;

    transition: all linear 0.3s;
  }

  button {
    color: ${({ theme }) => theme.colors.primary.moderateBlue};

    :hover {
      color: ${({ theme }) => theme.colors.primary.lightGrayishBlue};
    }
  }
`;
export const ContainerContent = styled.div`
  grid-area: content;

  max-width: 550px;

  p {
    padding: 4px 0;

    color: ${({ theme }) => theme.colors.neutral.grayishBlue};
    font-weight: 400;
  }

  @media screen and (max-width: 500px) {
    text-align: center;

    padding: 10px;
  }
`;

export const Tag = styled.div`
  background: ${({ theme }) => theme.colors.primary.moderateBlue};
  color: ${({ theme }) => theme.colors.neutral.white};

  font-size: 0.8rem;

  padding: 4px 6px;

  border-radius: 4px; ;
`;

export const ContainerButtons = styled.div`
  display: flex;

  gap: 8px;

  .delete {
    color: ${({ theme }) => theme.colors.primary.softRed};

    :hover {
      color: ${({ theme }) => theme.colors.primary.paleRed};
    }
  }
`;

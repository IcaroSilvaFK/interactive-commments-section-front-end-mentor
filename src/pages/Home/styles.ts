import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  gap: 28px;

  padding: 36px;
`;

export const SectionPosts = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  max-width: 600px;
  margin: 0 auto;

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

export const SectionComments = styled.div`
  display: flex;
  flex-direction: column;

  gap: 12px;

  padding-left: 40px;
  margin-top: 22px;

  max-width: 580px;

  position: relative;

  ::after {
    content: '';
    position: absolute;

    width: 2px;
    left: 20px;
    height: 100%;

    background: ${({ theme }) => theme.colors.primary.lightGrayishBlue};
  }
`;

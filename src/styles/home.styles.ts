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

  max-width: 800px;
  margin: 0 auto;
`;

export const SectionComments = styled.div`
  display: flex;
  flex-direction: column;

  gap: 12px;

  padding-left: 40px;
  margin-top: 22px;

  max-width: 550px;

  border-left: 3px solid ${({ theme }) => theme.colors.primary.lightGrayishBlue};
`;

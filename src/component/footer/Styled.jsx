import styled from "styled-components";


export const FooterContainer = styled.footer`

  background-color: #2f855a; /* Tailwind's green-700 color */
  color: white;
  padding: 2rem 1rem;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 1200px;
  margin: 0 auto;

   @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Section = styled.div`
  flex: 1;
  padding: 0 1rem;

   @media (min-width: 768px) {
    flex: 1;
    padding: 0 1rem;
    margin-bottom: 0;
  }
`;

export const Title = styled.h4`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const Text = styled.p`
  margin-bottom: 1rem;
`;

export const LinkList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ListItem = styled.li`
  margin-bottom: 0.5rem;
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

export const SocialIcon = styled.a`
  color: white;
  font-size: 1.5rem;

  &:hover {
    color: #cbd5e0; /* Tailwind's gray-400 color */
  }
`;
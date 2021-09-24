import styled from "styled-components";

export const SidebarWrapper = styled.div`
  height: 100%;
  width: 250px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  padding-top: 20px;
  border-right: 1px solid ${({ theme }) => theme.color.lead};
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Header = styled.header`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  grid-gap: 0.5rem;
  margin-bottom: 1rem;
  height: 50px;

  img {
    width: 40px;
  }

  h1 {
    padding: 0.5rem 0;
    font-size: 1.3rem;
  }
`;

export const List = styled.ul`
  small {
    padding: 0.5rem 1.4rem;
    color: ${({ theme }) => theme.text.secondary};
  }
`;

const handleActiveColor = (background) => {
  const active = "#3D3D3D";

  switch (background) {
    case "active":
      return active;
    default:
      return "none";
  }
};

export const ListItem = styled.li`
  cursor: pointer;
  background-color: ${({ background }) => handleActiveColor(background)};
  font-size: 1.1rem;
  padding: 0.5rem 1.4rem;
  margin: 0.2rem 0;
  display: flex;
  align-items: center;
  grid-gap: 1rem;

  &:hover {
    background-color: ${({ theme }) => theme.color.hover};
  }

  a {
    width: 100%;
  }
`;

export const Divider = styled.hr`
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 1px solid ${({ theme }) => theme.color.lead};
`;

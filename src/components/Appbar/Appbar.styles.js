import styled from "styled-components";

export const AppbarContainer = styled.div`
  margin-left: 250px;
  padding: 0px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
`;

export const SearchWrapper = styled.div`
  margin: 1.5rem 0;
  width: 400px;
  position: relative;
`;

export const SearchInput = styled.input`
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: ${({ theme }) => theme.borderRadius.round};
  padding: 6px 18px;
  color: inherit;
  width: 100%;

  &:focus {
    outline: none;
    border: 1px solid #fff;
  }
`;

export const SearchBtn = styled.button`
  background: none;
  color: ${({ theme }) => theme.text.secondary};
  border: none;
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
`;

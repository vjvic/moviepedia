import styled from "styled-components";

export const PaginationContainer = styled.div`
  width: 80%;
  margin: auto;
  padding: 1rem 0;
  .pagination {
    justify-content: center;
    display: flex;
    padding-left: 0;
    list-style: none;
    margin: auto;
  }
  .page-item .page-link {
    position: relative;
    display: block;
    margin: 0 10px;
    color: #515151;
    text-decoration: none;
    &:hover {
      color: ${({ theme }) => theme.color.primary};
    }
  }
  .page-item.active .page-link {
    font-weight: bold;
  }
  .page-item.disabled .page-link {
    color: #6c757d;
    pointer-events: none;
    cursor: auto;
  }
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
  .active {
    background-color: #282828;
  }
`;

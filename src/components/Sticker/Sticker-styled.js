import styled from 'styled-components';

export const StyledItem = styled.li`
  list-style: none;
  cursor: pointer;
  border: 2px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
    border-color: #007bff;
  }
`;

export const StyledImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  display: block;
`;
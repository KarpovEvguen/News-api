import styled from "styled-components";

export const Card = styled.div`
  background: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s, box-shadow 0.2s;
  border: 1px solid #edf2f7;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const Content = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Title = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  color: #2d3748;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const Description = styled.p`
  font-size: 14px;
  color: #718096;
  flex: 1;
  margin-bottom: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const Button = styled.button`
  padding: 10px 16px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  border: 1px solid ${(props) => (props.$isFavorite ? "#feb2b2" : "#e2e8f0")};
  background-color: ${(props) => (props.$isFavorite ? "#fff5f5" : "#edf2f7")};
  color: ${(props) => (props.$isFavorite ? "#e53e3e" : "#4a5568")};
  transition: all 0.2s;
  align-self: flex-start;

  &:hover {
    background-color: ${(props) => (props.$isFavorite ? "#ffe3e3" : "#e2e8f0")};
  }
`;
import styled from '@emotion/styled';

const ComponentAvatar = styled.span`
  display: inline-flex;
  height: 48px;
  width: 48px;
  border-radius: 48px;
  background-size: cover;
  background-position: 50% 50%;
`;

export default props => {
  return <ComponentAvatar style={props.style} />;
};

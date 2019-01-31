import styled from '@emotion/styled';

const ComponentNavigation = styled.div`
  height: 64px;
  background: #ececec;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px 0 24px;
`;

const ComponentNavigationLeft = styled.div`
  flex-shrink: 0;
`;

const ComponentNavigationRight = styled.div`
  min-width: 25%;
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
`;

const ComponentLogo = styled.span`
  font-weight: 700;
  display: inline-flex;
  font-size: 22px;
  line-height: 22px;
`;

const ComponentLink = styled.span`
  display: inline-flex;
  font-size: 14px;
  font-weight: 700;
  line-height: 14px;
`;

export default props => {
  return (
    <ComponentNavigation style={props.style}>
      <ComponentNavigationLeft>
        <ComponentLogo>Castle</ComponentLogo>
      </ComponentNavigationLeft>
      <ComponentNavigationRight>
        <ComponentLink style={{ marginLeft: 24 }}>Learn To Create</ComponentLink>
        <ComponentLink style={{ marginLeft: 24 }}>Documentation</ComponentLink>
        <ComponentLink style={{ marginLeft: 24 }}>Featured Creators</ComponentLink>
        <ComponentLink style={{ marginLeft: 24 }}>Download & Play</ComponentLink>
      </ComponentNavigationRight>
    </ComponentNavigation>
  );
};

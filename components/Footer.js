import styled from '@emotion/styled';

const ComponentFooter = styled.div`
  padding-top: 24px;
  padding-bottom: 88px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1024px;
  margin: 88px auto 0 auto;
  border-top: 1px solid #ececec;
`;

const ComponentFooterLeft = styled.span`
  flex-shrink: 0;
`;

const ComponentFooterRight = styled.span`
  min-width: 25%;
  width: 100%;
  display: inline-flex;
  justify-content: flex-end;
`;

const ComponentFooterLink = styled.span`
  display: inline-flex;
  margin-right: 16px;
  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;
`;

export default props => {
  return (
    <ComponentFooter>
      <ComponentFooterLeft>
        <ComponentFooterLink>Terms of Service</ComponentFooterLink>
        <ComponentFooterLink>Privacy Policy</ComponentFooterLink>
        <ComponentFooterLink>Manfiesto</ComponentFooterLink>
        <ComponentFooterLink>Documentation</ComponentFooterLink>
      </ComponentFooterLeft>
      <ComponentFooterRight>
        <ComponentFooterLink>Twitter</ComponentFooterLink>
        <ComponentFooterLink>Facebook</ComponentFooterLink>
        <ComponentFooterLink>Discord</ComponentFooterLink>
      </ComponentFooterRight>
    </ComponentFooter>
  );
};

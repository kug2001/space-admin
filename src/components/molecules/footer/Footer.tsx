import { FC } from 'react';
import { FooterContainer, InnerFooter } from '@/components/molecules/footer/Footer.styles';
import { FooterProps } from '@/components/molecules/footer/Footer.types';

const Footer: FC<FooterProps> = props => {
  const { serviceName } = props;
  return (
    <FooterContainer>
      <InnerFooter>{`© ${serviceName} Corp. All rights reserved.`}</InnerFooter>
    </FooterContainer>
  );
};

export default Footer;

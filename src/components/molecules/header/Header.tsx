import { FC } from 'react';
import { HeaderProps } from './Header.types';
import {
  DocTitle,
  HeaderContainer,
  HeadUtils,
  InnerHeader,
  StyledLink
} from '@/components/molecules/header/Header.styles';

const Header: FC<HeaderProps> = props => {
  const { serviceName } = props;
  // const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <HeaderContainer>
      <InnerHeader>
        <DocTitle>
          <StyledLink href={'/'}>{serviceName}</StyledLink>
        </DocTitle>
        <HeadUtils>{/*<StyledLink href={ROUTE.LOGIN}>Login</StyledLink>*/}</HeadUtils>
      </InnerHeader>
    </HeaderContainer>
  );
};
export default Header;

import { FC, PropsWithChildren } from 'react';
import { ServiceAppProvider } from '@/components/providers/serviceApp/ServiceApp';
import { serviceConfig } from '@/config/appConfig';
import { Layout } from '@/components/template/layout/Layout';

const Root: FC<PropsWithChildren> = props => {
  const { children } = props;
  // @ts-ignore
  return (
    <ServiceAppProvider config={serviceConfig}>
      <Layout>{children}</Layout>
    </ServiceAppProvider>
  );
};

export default Root;

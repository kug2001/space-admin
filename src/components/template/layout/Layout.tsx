import React, { FC, PropsWithChildren } from 'react';
import { roboto } from '@/config/fontConfig';
import { RootContainer, DocMain } from '@/components/template/layout/Layout.styles';
import Header from '@/components/molecules/header/Header';
import Footer from '@/components/molecules/footer/Footer';
import { useApp } from '@/components/providers/serviceApp/ServiceApp';
import Head from 'next/head';
import { Grid } from '@mui/material';

export const Layout: FC<PropsWithChildren> = props => {
  const { children } = props;
  const { serviceName, browserTitle } = useApp();
  return (
    <>
      <Head>
        <title>{browserTitle}</title>
        <meta name="description" content={serviceName} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RootContainer className={roboto.className}>
        <Header serviceName={serviceName} />
        <DocMain>
          <Grid container spacing={2}>
            {children}
          </Grid>
        </DocMain>
        <Footer serviceName={serviceName} />
      </RootContainer>
    </>
  );
};

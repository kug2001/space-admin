import { getMenus } from '@/utils/generatePage';
import { Grid } from '@mui/material';
import { Sidebar } from '@/components/molecules/sidebar/Sidebar';
import React from 'react';

interface HomeProps {
  menus: [string, { pageName: string; path: string }[]][];
}

export default function Home(props: HomeProps) {
  const { menus } = props;
  return (
    <>
      <Grid item xs={2}>
        <Sidebar menus={menus} />
      </Grid>
      <Grid item xs={8}>
        컨텐츠
      </Grid>
    </>
  );
}

export async function getStaticProps() {
  const menus = await getMenus();

  return {
    props: {
      menus
    }
  };
}

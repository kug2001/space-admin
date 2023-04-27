import { getFiles, getMenus } from '@/utils/generatePage';
import { Grid } from '@mui/material';
import { Sidebar } from '@/components/molecules/sidebar/Sidebar';
import React from 'react';

interface PostProps {
  data: any;
  menus: [string, { pageName: string; path: string }[]][];
}

export default function PostPage(props: PostProps) {
  const { data, menus } = props;

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
  const data = await getFiles();
  const menus = await getMenus();
  // const { pageName } = JSON.parse(data);

  return {
    props: {
      data,
      menus
    }
  };
}

import { getConfig, getMenus, getSlugs } from '@/utils/generatePage';
import { Grid } from '@mui/material';
import { Sidebar } from '@/components/molecules/sidebar/Sidebar';
import React from 'react';
interface PostProps {
  post: string;
  config: any;
  menus: any;
}

export default function Post(props: PostProps) {
  const { post, config, menus } = props;
  console.log(post, config, menus);
  // const Post = dynamic(import(`/content/${post}.mdx`));

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

export async function getStaticProps({ ...ctx }) {
  console.log('getStaticProps', ctx.params['post']);
  const post: string = ctx.params['post'].join('/');
  const config = await getConfig(post);
  const menus = await getMenus();
  // const menus = await getMenus();

  return {
    props: {
      post,
      config,
      menus
    }
  };
}

export async function getStaticPaths() {
  const paths = await getSlugs();
  return {
    paths, // An array of path names, and any params
    fallback: false // so that 404s properly appear if something's not matching
  };
}

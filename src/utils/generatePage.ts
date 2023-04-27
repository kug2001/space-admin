import { promises as fs } from 'node:fs';
import { join } from 'path';
import { sync } from 'glob';
import { groupBy, pipe, tap, toPairs } from 'ramda';

const articlesPath = join(process.cwd(), 'content');

export const getFiles = async () => {
  const posts = await readFile(join(articlesPath));
  return posts;
};

const readFile = async (rootPath: string) => {
  const data = await sync(`${rootPath}/**/*.json`);
  const configFiles = data.filter(f => f.endsWith('.json'));
  const posts = await Promise.all(
    configFiles.map(async file => {
      console.log('file', file);
      const content = await fs.readFile(file, 'utf-8');
      const parsingJson = await JSON.parse(content);
      const path = `/post${file.replace('.json', '').replace(rootPath, '')}`;
      return { ...parsingJson, path };
    })
  );
  return posts;
};

export const getSlugs = async () => {
  const posts = await getFiles();
  return posts.map(post => post.path);
};

// export const getPosts = async () => {
//   return getFiles();
// };

export const getMenus = async () => {
  const posts = await getFiles();
  const menus = pipe(
    groupBy((post: any) => {
      return post.path.split('/')[2];
    }),
    toPairs,
    tap(console.log)
  )(posts);
  return menus;
};

export const getConfig = async (post: string) => {
  const content = await fs.readFile(`${articlesPath}/${post}.json`, 'utf-8');
  const parsingJson = await JSON.parse(content);
  return parsingJson;
};

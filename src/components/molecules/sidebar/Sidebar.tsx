import { FC } from 'react';
import { SidebarProps } from '@/components/molecules/sidebar/Sidebar.types';
import { SideBar, UnOrderList } from '@/components/molecules/sidebar/Sidebar.styles';
import Link from 'next/link';

export const Sidebar: FC<SidebarProps> = props => {
  const { menus } = props;
  return (
    <SideBar maxWidth={'xs'}>
      {menus.map(([title, items], idx) => (
        <UnOrderList key={idx}>
          {title}
          {items.map(({ pageName, path }: { pageName: string; path: string }, itemIdx) => (
            <li key={itemIdx}>
              <Link href={path}>{pageName}</Link>
            </li>
          ))}
        </UnOrderList>
      ))}
    </SideBar>
  );
};

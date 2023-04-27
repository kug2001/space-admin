import { createContext, FC, PropsWithChildren, useContext } from 'react';
import { ServiceAppProps, ServiceContext } from './ServiceApp.types';

const ServiceAppContext = createContext<ServiceContext>({} as ServiceContext);

export const ServiceAppProvider: FC<PropsWithChildren<ServiceAppProps>> = props => {
  const { children, config } = props;
  return <ServiceAppContext.Provider value={{ config }}>{children}</ServiceAppContext.Provider>;
};

export function useApp() {
  const { config } = useContext<ServiceContext>(ServiceAppContext);
  // const [headTitle, setHeadTitle] = useState<string>('bridge');
  const { serviceName, browserTitle } = config;

  // useEffect(() => {
  //   const headTitle = pipe(
  //     filter<[string, string]>(([route]) => window?.location.pathname === route),
  //     head,
  //     (v: [string, string]) => (v !== undefined ? v[1] : 'bridge')
  //   )(routeConfig);
  //   setHeadTitle(`${serviceName} | ${headTitle}`);
  // }, []);

  return { serviceName, browserTitle };
}

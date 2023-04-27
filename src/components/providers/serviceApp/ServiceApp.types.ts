export interface ServiceConfig {
  /**
   * 서비스의 이름 설정
   */
  serviceName: string;
  /**
   * 브라우저 타이틀의 설명
   */
  browserTitle: string;
}

export interface ServiceAppProps {
  config: ServiceConfig;
}

export interface ServiceContext {
  config: ServiceConfig;
}

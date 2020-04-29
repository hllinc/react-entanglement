// 使svg能够在ts中用引入模块的方式加载

type SvgrComponent = React.FunctionComponent<React.SVGAttributes<SVGElement>>

declare module '*.svg' {
  const content: SvgrComponent;
  export default content;
}

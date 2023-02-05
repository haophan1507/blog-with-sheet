declare module '*.svg' {
  export const ReactComponent: React.FC<React.SVGProps<SVGElement>>;

  const src: string;
  export default src;
}

declare module '*.png';
declare module '*.jpeg';
declare module '*.jpg';

/// <reference types="vite/client" />

/// <reference types="react-scripts" />

declare module '@package' {
  export { default } from '~/routes';
}

declare module '@dist/cjs' {
  export * from '@package';

  export { default } from '@package';
}

declare module '@dist/esm' {
  export * from '@package';

  export { default } from '@package';
}

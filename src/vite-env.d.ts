/// <reference types="vite/client" />

type Testable<T = {}> = T & {
  testID?: string;
};

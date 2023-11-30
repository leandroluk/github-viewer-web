/// <reference types="vite/client" />

type Testable<T = unknown> = T & { testID?: string };

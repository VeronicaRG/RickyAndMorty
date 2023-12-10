export type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] };
type ArrayElement<A> = A extends readonly (infer T)[] ? T : never;

export interface InitialStateType<T> {
  data: T;
  loading: boolean;
  error: string | null;
}

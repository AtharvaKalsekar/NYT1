export enum LoadingStages {
  IDLE = "idle",
  PENDING = "pending",
  SUCCEEDED = "successed",
  FAILED = "failed",
}

export type Loading = {
  loading: LoadingStages;
};

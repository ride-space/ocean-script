import type { Dispatch, SetStateAction } from "react";

declare module "react" {
  export type SetState<S> = Dispatch<SetStateAction<S>>;
}

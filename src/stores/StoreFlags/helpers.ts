import { IFlags } from './types'

/**
 * Useful to use when debugging loading state.
 */
export const devFlagsLoading: IFlags = {
  flags: true,
  isLoading: true,
  isError: false,
  isForbidden: false,
  isSuccess: false
}

/**
 * Merge flags.
 * Useful when the global status depends of multiple flags of multiple stores.
 */
export function mergeFlags(...flags: IFlags[]): IFlags {
  const defaultFlags: IFlags = {
    flags: true,
    isLoading: false,
    isError: false,
    isForbidden: false,
    isSuccess: false
  }

  const reducedFlags = flags.reduce<IFlags>((acc, flag) => {
    return {
      flags: true,
      isLoading: acc.isLoading || flag.isLoading,
      isError: acc.isError || flag.isError,
      isForbidden: acc.isForbidden || flag.isForbidden,
      isSuccess: acc.isSuccess || flag.isSuccess
    }
  }, defaultFlags)

  // As async processes are generally not correlated, if a flags object is in error,
  // let's consider that other flags object can't be stuck with a loading state.
  if (reducedFlags.isError) {
    reducedFlags.isLoading = false
  }

  return reducedFlags
}

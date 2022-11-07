/**
 * Reexport CSS variables from PDS to avoid to manipulate simple strings into
 * the codebase.
 *
 * Prefer to imports the theme and use sizes from there.
 *
 * TODO: It certainly needs some improvements to be synched with PDS exports instead
 * of having a copy here.
 */
const tenablePdsSizes = {
  'tenb-space-4': '4px',
  'tenb-space-8': '8px',
  'tenb-space-16': '16px',
  'tenb-space-24': '24px',
  'tenb-space-32': '32px',
  'tenb-space-56': '56px',
  'tenb-space-64': '64px',
  'tenb-space-128': '128px'
}

export const sizes = {
  verySmall: '3px',
  small: '5px',
  medium: '7px',
  default: '10px',
  large: '15px',
  veryLarge: '20px',
  veryVeryLarge: '25px',
  extraLarge: '30px',

  ...tenablePdsSizes
}

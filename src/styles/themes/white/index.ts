import { CSSObject } from 'styled-components'
import { colors } from './colors'
import { constants } from './constants'
import { sizes } from './sizes'

let zIndex = 0

const zIndexes = {
  drawerOverlay: ++zIndex,
  mainNavigation: ++zIndex
}

const fontSizes = {
  small: '10px',
  default: '13px',
  medium: '18px',
  mediumLarge: '20px',
  large: '22px',
  veryLarge: '30px',
  veryVeryLare: '40px',
  extraLarge: '50px'
}

const elementSizes = {
  // TUL height
  header: '78px'
}

const radius = {
  default: '10px'
}

const shadows = {}

// Define a CSSProperties object from fontSizes
const fontSizesAsRecord = Object.entries(fontSizes).reduce(
  (acc, [variantName, fontSizeValue]) => {
    return {
      ...acc,
      [variantName]: {
        fontSize: fontSizeValue
      }
    }
  },
  {} as Record<keyof typeof fontSizes, CSSObject>
)

export const white = {
  zIndexes,
  colors,
  sizes,
  fontSizes,
  fontSizesAsRecord,
  elementSizes,
  radius,
  shadows,
  constants
}

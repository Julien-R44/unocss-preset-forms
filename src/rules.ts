import { handler as h } from '@unocss/preset-mini/utils'

import type { FormsRule } from './types.js'
import { svgCheckboxChecked, svgCheckboxIndeterminate, svgRadioChecked, svgSelect } from './svg.js'

export function buildRules(): FormsRule[] {
  const spacing = (s: number): string => h.fraction.rem(`${s}` || '1')!
  const borderWidth = { DEFAULT: '1px' }

  const inputsClasses = [
    "[type='text']",
    'input:where(:not([type]))',
    "[type='email']",
    "[type='url']",
    "[type='password']",
    "[type='number']",
    "[type='date']",
    "[type='datetime-local']",
    "[type='month']",
    "[type='search']",
    "[type='tel']",
    "[type='time']",
    "[type='week']",
    '[multiple]',
    'textarea',
    'select',
  ]

  return [
    {
      base: inputsClasses,
      class: ['.form-input', '.form-textarea', '.form-select', '.form-multiselect'],
      styles: (theme: any) => ({
        'appearance': 'none',
        'background-color': '#fff',
        'border-color': theme.colors.gray['500'],
        'border-width': borderWidth.DEFAULT,
        'border-radius': theme.borderRadius.none,
        'padding-top': spacing(2),
        'padding-right': spacing(3),
        'padding-bottom': spacing(2),
        'padding-left': spacing(3),
        'font-size': theme.fontSize.base[0],
        'line-height': `${theme.lineHeight.normal}rem`,
        '--un-shadow': '0 0 #0000',
      }),
    },
    {
      base: inputsClasses.map((cssClass) => `${cssClass}:focus`),
      styles: (theme: any) => ({
        'outline': '2px solid transparent',
        'outline-offset': '2px',
        '--un-ring-inset': 'var(--un-empty,/*!*/ /*!*/)',
        '--un-ring-offset-width': '0px',
        '--un-ring-offset-color': '#fff',
        '--un-ring-color': theme.colors.blue['600'],
        '--un-ring-offset-shadow':
          'var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color)',
        '--un-ring-shadow':
          'var(--un-ring-inset) 0 0 0 calc(1px + var(--un-ring-offset-width)) var(--un-ring-color)',
        'box-shadow': 'var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow)',
        'border-color': theme.colors.blue['600'],
      }),
    },
    {
      base: ['input::placeholder', 'textarea::placeholder'],
      class: ['.form-input::placeholder', '.form-textarea::placeholder'],
      styles: (theme: any) => ({
        color: theme.colors.gray['500'],
        opacity: '1',
      }),
    },
    {
      base: ['::-webkit-datetime-edit-fields-wrapper'],
      class: ['.form-input::-webkit-datetime-edit-fields-wrapper'],
      styles: {
        padding: '0',
      },
    },
    {
      // Unfortunate hack until https://bugs.webkit.org/show_bug.cgi?id=198959 is fixed.
      // This sucks because users can't change line-height with a utility on date inputs now.
      // Reference: https://github.com/twbs/bootstrap/pull/31993
      base: ['::-webkit-date-and-time-value'],
      class: ['.form-input::-webkit-date-and-time-value'],
      styles: {
        'min-height': '1.5em',
      },
    },
    {
      // In Safari on iOS date and time inputs are centered instead of left-aligned and can't be
      // changed with `text-align` utilities on the input by default. Resetting this to `inherit`
      // makes them left-aligned by default and makes it possible to override the alignment with
      // utility classes without using an arbitrary variant to target the pseudo-elements.
      base: ['::-webkit-date-and-time-value'],
      class: ['.form-input::-webkit-date-and-time-value'],
      styles: {
        'text-align': 'inherit',
      },
    },
    {
      // In Safari on macOS date time inputs that are set to `display: block` have unexpected
      // extra bottom spacing. This can be corrected by setting the `::-webkit-datetime-edit`
      // pseudo-element to `display: inline-flex`, instead of the browser default of
      // `display: inline-block`.
      base: ['::-webkit-datetime-edit'],
      class: ['.form-input::-webkit-datetime-edit'],
      styles: {
        display: 'inline-flex',
      },
    },
    {
      // In Safari on macOS date time inputs are 4px taller than normal inputs
      // This is because there is extra padding on the datetime-edit and datetime-edit-{part}-field pseudo elements
      // See https://github.com/tailwindlabs/tailwindcss-forms/issues/95
      base: [
        '::-webkit-datetime-edit',
        '::-webkit-datetime-edit-year-field',
        '::-webkit-datetime-edit-month-field',
        '::-webkit-datetime-edit-day-field',
        '::-webkit-datetime-edit-hour-field',
        '::-webkit-datetime-edit-minute-field',
        '::-webkit-datetime-edit-second-field',
        '::-webkit-datetime-edit-millisecond-field',
        '::-webkit-datetime-edit-meridiem-field',
      ],
      class: [
        '.form-input::-webkit-datetime-edit',
        '.form-input::-webkit-datetime-edit-year-field',
        '.form-input::-webkit-datetime-edit-month-field',
        '.form-input::-webkit-datetime-edit-day-field',
        '.form-input::-webkit-datetime-edit-hour-field',
        '.form-input::-webkit-datetime-edit-minute-field',
        '.form-input::-webkit-datetime-edit-second-field',
        '.form-input::-webkit-datetime-edit-millisecond-field',
        '.form-input::-webkit-datetime-edit-meridiem-field',
      ],
      styles: {
        'padding-top': 0,
        'padding-bottom': 0,
      },
    },
    {
      base: ['select'],
      class: ['.form-select'],
      styles: (theme: any) => ({
        'background-image': `url("${svgSelect(theme.colors.gray['500'])}")`,
        'background-position': `right ${spacing(2)} center`,
        'background-repeat': `no-repeat`,
        'background-size': `1.5em 1.5em`,
        'padding-right': spacing(10),
        'print-color-adjust': `exact`,
      }),
    },
    {
      base: ['[multiple]'],
      class: null,
      styles: {
        'background-image': 'initial',
        'background-position': 'initial',
        'background-repeat': 'unset',
        'background-size': 'initial',
        'padding-right': spacing(3),
        'print-color-adjust': 'unset',
      },
    },
    {
      base: [`[type='checkbox']`, `[type='radio']`],
      class: ['.form-checkbox', '.form-radio'],
      styles: (theme: any) => ({
        'appearance': 'none',
        'padding': '0',
        'print-color-adjust': 'exact',
        'display': 'inline-block',
        'vertical-align': 'middle',
        'background-origin': 'border-box',
        'user-select': 'none',
        'flex-shrink': '0',
        'height': spacing(4),
        'width': spacing(4),
        'color': theme.colors.blue['600'],
        'background-color': '#fff',
        'border-color': theme.colors.gray['500'],
        'border-width': borderWidth.DEFAULT,
        '--un-shadow': '0 0 #0000',
      }),
    },
    {
      base: [`[type='checkbox']`],
      class: ['.form-checkbox'],
      styles: (theme: any) => ({
        'border-radius': theme.borderRadius.none,
      }),
    },
    {
      base: [`[type='radio']`],
      class: ['.form-radio'],
      styles: {
        'border-radius': '100%',
      },
    },
    {
      base: [`[type='checkbox']:focus`, `[type='radio']:focus`],
      class: ['.form-checkbox:focus', '.form-radio:focus'],
      styles: (theme: any) => ({
        'outline': '2px solid transparent',
        'outline-offset': '2px',
        '--un-ring-inset': 'var(--un-empty,/*!*/ /*!*/)',
        '--un-ring-offset-width': '2px',
        '--un-ring-offset-color': '#fff',
        '--un-ring-color': theme.colors.blue['600'],
        '--un-ring-offset-shadow': `var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color)`,
        '--un-ring-shadow': `var(--un-ring-inset) 0 0 0 calc(2px + var(--un-ring-offset-width)) var(--un-ring-color)`,
        'box-shadow': `var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow)`,
      }),
    },
    {
      base: [`[type='checkbox']:checked`, `[type='radio']:checked`],
      class: ['.form-checkbox:checked', '.form-radio:checked'],
      styles: {
        'border-color': `transparent`,
        'background-color': `currentColor`,
        'background-size': `100% 100%`,
        'background-position': `center`,
        'background-repeat': `no-repeat`,
      },
    },
    {
      base: [`[type='checkbox']:checked`],
      class: ['.form-checkbox:checked'],
      styles: {
        'background-image': `url("${svgCheckboxChecked}")`,
        // TODO: need to support nested selectors in the generators
        // '@media (forced-colors: active) ': {
        //   appearance: 'auto',
        // },
      },
    },
    {
      base: [`[type='radio']:checked`],
      class: ['.form-radio:checked'],
      styles: {
        'background-image': `url("${svgRadioChecked}")`,
        // TODO: need to support nested selectors in the generators
        // '@media (forced-colors: active) ': {
        //   appearance: 'auto',
        // },
      },
    },
    {
      base: [
        `[type='checkbox']:checked:hover`,
        `[type='checkbox']:checked:focus`,
        `[type='radio']:checked:hover`,
        `[type='radio']:checked:focus`,
      ],
      class: [
        '.form-checkbox:checked:hover',
        '.form-checkbox:checked:focus',
        '.form-radio:checked:hover',
        '.form-radio:checked:focus',
      ],
      styles: {
        'border-color': 'transparent',
        'background-color': 'currentColor',
      },
    },
    {
      base: [`[type='checkbox']:indeterminate`],
      class: ['.form-checkbox:indeterminate'],
      styles: {
        'background-image': `url("${svgCheckboxIndeterminate}")`,
        'border-color': `transparent`,
        'background-color': `currentColor`,
        'background-size': `100% 100%`,
        'background-position': `center`,
        'background-repeat': `no-repeat`,

        // TODO: need to support nested selectors in the generators
        // '@media (forced-colors: active) ': {
        //   appearance: 'auto',
        // },
      },
    },
    {
      base: [`[type='checkbox']:indeterminate:hover`, `[type='checkbox']:indeterminate:focus`],
      class: ['.form-checkbox:indeterminate:hover', '.form-checkbox:indeterminate:focus'],
      styles: {
        'border-color': 'transparent',
        'background-color': 'currentColor',
      },
    },
    {
      base: [`[type='file']`],
      class: null,
      styles: {
        'background': 'unset',
        'border-color': 'inherit',
        'border-width': '0',
        'border-radius': '0',
        'padding': '0',
        'font-size': 'unset',
        'line-height': 'inherit',
      },
    },
    {
      base: [`[type='file']:focus`],
      class: null,
      styles: {
        outline: `1px solid ButtonText , 1px auto -webkit-focus-ring-color`,
      },
    },
  ]
}

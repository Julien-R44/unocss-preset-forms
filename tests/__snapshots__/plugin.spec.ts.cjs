exports[`Plugin > Generate correct preflights with base strategy 1`] = `"/* layer: preflights */
*,
::before,
::after {
  --un-rotate: 0;
  --un-rotate-x: 0;
  --un-rotate-y: 0;
  --un-rotate-z: 0;
  --un-scale-x: 1;
  --un-scale-y: 1;
  --un-scale-z: 1;
  --un-skew-x: 0;
  --un-skew-y: 0;
  --un-translate-x: 0;
  --un-translate-y: 0;
  --un-translate-z: 0;
  --un-pan-x: ;
  --un-pan-y: ;
  --un-pinch-zoom: ;
  --un-scroll-snap-strictness: proximity;
  --un-ordinal: ;
  --un-slashed-zero: ;
  --un-numeric-figure: ;
  --un-numeric-spacing: ;
  --un-numeric-fraction: ;
  --un-border-spacing-x: 0;
  --un-border-spacing-y: 0;
  --un-ring-offset-shadow: 0 0 rgb(0 0 0 / 0);
  --un-ring-shadow: 0 0 rgb(0 0 0 / 0);
  --un-shadow-inset: ;
  --un-shadow: 0 0 rgb(0 0 0 / 0);
  --un-ring-inset: ;
  --un-ring-offset-width: 0px;
  --un-ring-offset-color: #fff;
  --un-ring-width: 0px;
  --un-ring-color: rgb(147 197 253 / 0.5);
  --un-blur: ;
  --un-brightness: ;
  --un-contrast: ;
  --un-drop-shadow: ;
  --un-grayscale: ;
  --un-hue-rotate: ;
  --un-invert: ;
  --un-saturate: ;
  --un-sepia: ;
  --un-backdrop-blur: ;
  --un-backdrop-brightness: ;
  --un-backdrop-contrast: ;
  --un-backdrop-grayscale: ;
  --un-backdrop-hue-rotate: ;
  --un-backdrop-invert: ;
  --un-backdrop-opacity: ;
  --un-backdrop-saturate: ;
  --un-backdrop-sepia: ;
}
::backdrop {
  --un-rotate: 0;
  --un-rotate-x: 0;
  --un-rotate-y: 0;
  --un-rotate-z: 0;
  --un-scale-x: 1;
  --un-scale-y: 1;
  --un-scale-z: 1;
  --un-skew-x: 0;
  --un-skew-y: 0;
  --un-translate-x: 0;
  --un-translate-y: 0;
  --un-translate-z: 0;
  --un-pan-x: ;
  --un-pan-y: ;
  --un-pinch-zoom: ;
  --un-scroll-snap-strictness: proximity;
  --un-ordinal: ;
  --un-slashed-zero: ;
  --un-numeric-figure: ;
  --un-numeric-spacing: ;
  --un-numeric-fraction: ;
  --un-border-spacing-x: 0;
  --un-border-spacing-y: 0;
  --un-ring-offset-shadow: 0 0 rgb(0 0 0 / 0);
  --un-ring-shadow: 0 0 rgb(0 0 0 / 0);
  --un-shadow-inset: ;
  --un-shadow: 0 0 rgb(0 0 0 / 0);
  --un-ring-inset: ;
  --un-ring-offset-width: 0px;
  --un-ring-offset-color: #fff;
  --un-ring-width: 0px;
  --un-ring-color: rgb(147 197 253 / 0.5);
  --un-blur: ;
  --un-brightness: ;
  --un-contrast: ;
  --un-drop-shadow: ;
  --un-grayscale: ;
  --un-hue-rotate: ;
  --un-invert: ;
  --un-saturate: ;
  --un-sepia: ;
  --un-backdrop-blur: ;
  --un-backdrop-brightness: ;
  --un-backdrop-contrast: ;
  --un-backdrop-grayscale: ;
  --un-backdrop-hue-rotate: ;
  --un-backdrop-invert: ;
  --un-backdrop-opacity: ;
  --un-backdrop-saturate: ;
  --un-backdrop-sepia: ;
}
[type=\\"text\\"],
input:where(:not([type])),
[type=\\"email\\"],
[type=\\"url\\"],
[type=\\"password\\"],
[type=\\"number\\"],
[type=\\"date\\"],
[type=\\"datetime-local\\"],
[type=\\"month\\"],
[type=\\"search\\"],
[type=\\"tel\\"],
[type=\\"time\\"],
[type=\\"week\\"],
[multiple],
textarea,
select {
  appearance: none;
  background-color: #fff;
  border-color: #6b7280;
  border-width: 1px;
  border-radius: 0;
  padding-top: 0.5rem;
  padding-right: 0.75rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  font-size: 1rem;
  line-height: 1.5rem;
  --un-shadow: 0 0 #0000;
}
[type=\\"text\\"]:focus,
input:where(:not([type])):focus,
[type=\\"email\\"]:focus,
[type=\\"url\\"]:focus,
[type=\\"password\\"]:focus,
[type=\\"number\\"]:focus,
[type=\\"date\\"]:focus,
[type=\\"datetime-local\\"]:focus,
[type=\\"month\\"]:focus,
[type=\\"search\\"]:focus,
[type=\\"tel\\"]:focus,
[type=\\"time\\"]:focus,
[type=\\"week\\"]:focus,
[multiple]:focus,
textarea:focus,
select:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  --un-ring-inset: var(--un-empty, /*!*/ /*!*/);
  --un-ring-offset-width: 0px;
  --un-ring-offset-color: #fff;
  --un-ring-color: #2563eb;
  --un-ring-offset-shadow: var(--un-ring-inset) 0 0 0
    var(--un-ring-offset-width) var(--un-ring-offset-color);
  --un-ring-shadow: var(--un-ring-inset) 0 0 0
    calc(1px + var(--un-ring-offset-width)) var(--un-ring-color);
  box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow),
    var(--un-shadow);
  border-color: #2563eb;
}
input::placeholder,
textarea::placeholder {
  color: #6b7280;
  opacity: 1;
}
::-webkit-datetime-edit-fields-wrapper {
  padding: 0;
}
::-webkit-date-and-time-value {
  min-height: 1.5em;
}
::-webkit-date-and-time-value {
  text-align: inherit;
}
::-webkit-datetime-edit {
  display: inline-flex;
}
::-webkit-datetime-edit,
::-webkit-datetime-edit-year-field,
::-webkit-datetime-edit-month-field,
::-webkit-datetime-edit-day-field,
::-webkit-datetime-edit-hour-field,
::-webkit-datetime-edit-minute-field,
::-webkit-datetime-edit-second-field,
::-webkit-datetime-edit-millisecond-field,
::-webkit-datetime-edit-meridiem-field {
  padding-top: 0;
  padding-bottom: 0;
}
select {
  background-image: url(\\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\\");
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;
  print-color-adjust: exact;
}
[multiple] {
  background-image: initial;
  background-position: initial;
  background-repeat: unset;
  background-size: initial;
  padding-right: 0.75rem;
  print-color-adjust: unset;
}
[type=\\"checkbox\\"],
[type=\\"radio\\"] {
  appearance: none;
  padding: 0;
  print-color-adjust: exact;
  display: inline-block;
  vertical-align: middle;
  background-origin: border-box;
  user-select: none;
  flex-shrink: 0;
  height: 1rem;
  width: 1rem;
  color: #2563eb;
  background-color: #fff;
  border-color: #6b7280;
  border-width: 1px;
  --un-shadow: 0 0 #0000;
}
[type=\\"checkbox\\"] {
  border-radius: 0;
}
[type=\\"radio\\"] {
  border-radius: 100%;
}
[type=\\"checkbox\\"]:focus,
[type=\\"radio\\"]:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  --un-ring-inset: var(--un-empty, /*!*/ /*!*/);
  --un-ring-offset-width: 2px;
  --un-ring-offset-color: #fff;
  --un-ring-color: #2563eb;
  --un-ring-offset-shadow: var(--un-ring-inset) 0 0 0
    var(--un-ring-offset-width) var(--un-ring-offset-color);
  --un-ring-shadow: var(--un-ring-inset) 0 0 0
    calc(2px + var(--un-ring-offset-width)) var(--un-ring-color);
  box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow),
    var(--un-shadow);
}
[type=\\"checkbox\\"]:checked,
[type=\\"radio\\"]:checked {
  border-color: transparent;
  background-color: currentColor;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}
[type=\\"checkbox\\"]:checked {
  background-image: url(\\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e\\");
  appearance: auto;
}
[type=\\"radio\\"]:checked {
  background-image: url(\\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e\\");
  appearance: auto;
}
[type=\\"checkbox\\"]:checked:hover,
[type=\\"checkbox\\"]:checked:focus,
[type=\\"radio\\"]:checked:hover,
[type=\\"radio\\"]:checked:focus {
  border-color: transparent;
  background-color: currentColor;
}
[type=\\"checkbox\\"]:indeterminate {
  background-image: url(\\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e\\");
  border-color: transparent;
  background-color: currentColor;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  appearance: auto;
}
[type=\\"checkbox\\"]:indeterminate:hover,
[type=\\"checkbox\\"]:indeterminate:focus {
  border-color: transparent;
  background-color: currentColor;
}
[type=\\"file\\"] {
  background: unset;
  border-color: inherit;
  border-width: 0;
  border-radius: 0;
  padding: 0;
  font-size: unset;
  line-height: inherit;
}
[type=\\"file\\"]:focus {
  outline: 1px solid ButtonText, 1px auto -webkit-focus-ring-color;
}
"`


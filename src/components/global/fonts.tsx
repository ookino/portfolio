import { Global } from '@emotion/react';

const Fonts = () => (
  <Global
    styles={`
    @font-face {
    font-family: 'Gilroy';
    src: url('/fonts/gilroy/Gilroy-Regular.eot');
    src: local('Gilroy Regular'), local('Gilroy-Regular'),
        url('/fonts/gilroy/Gilroy-Regular.eot?#iefix') format('embedded-opentype'),
        url('/fonts/gilroy/Gilroy-Regular.woff2') format('woff2'),
        url('/fonts/gilroy/Gilroy-Regular.woff') format('woff'),
        url('/fonts/gilroy/Gilroy-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Gilroy';
    src: url('/fonts/gilroy/Gilroy-Bold.eot');
    src: local('Gilroy Bold'), local('Gilroy-Bold'),
        url('/fonts/gilroy/Gilroy-Bold.eot?#iefix') format('embedded-opentype'),
        url('/fonts/gilroy/Gilroy-Bold.woff2') format('woff2'),
        url('/fonts/gilroy/Gilroy-Bold.woff') format('woff'),
        url('/fonts/gilroy/Gilroy-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Gilroy';
    src: url('/fonts/gilroy/Gilroy-Semibold.eot');
    src: local('Gilroy Semibold'), local('Gilroy-Semibold'),
        url('/fonts/gilroy/Gilroy-Semibold.eot?#iefix') format('embedded-opentype'),
        url('/fonts/gilroy/Gilroy-Semibold.woff2') format('woff2'),
        url('/fonts/gilroy/Gilroy-Semibold.woff') format('woff'),
        url('/fonts/gilroy/Gilroy-Semibold.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
}

@font-face {
    font-family: 'Gilroy';
    src: url('/fonts/gilroy/Gilroy-Medium.eot');
    src: local('Gilroy Medium'), local('Gilroy-Medium'),
        url('/fonts/gilroy/Gilroy-Medium.eot?#iefix') format('embedded-opentype'),
        url('/fonts/gilroy/Gilroy-Medium.woff2') format('woff2'),
        url('/fonts/gilroy/Gilroy-Medium.woff') format('woff'),
        url('/fonts/gilroy/Gilroy-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
}

@font-face {
  font-family: 'Azeret Mono';
  font-style: normal;
  font-weight: 400;
  src: url('/fonts/azeret/azeret-mono-v9-latin-regular.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/fonts/azeret/azeret-mono-v9-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/azeret/azeret-mono-v9-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/azeret/azeret-mono-v9-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('/fonts/azeret/azeret-mono-v9-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/azeret/azeret-mono-v9-latin-regular.svg#AzeretMono') format('svg'); /* Legacy iOS */
       font-display: swap;
}
@font-face {
  font-family: 'Azeret Mono';
  font-style: normal;
  font-weight: 500;
  src: url('/fonts/azeret/azeret-mono-v9-latin-500.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/fonts/azeret/azeret-mono-v9-latin-500.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/azeret/azeret-mono-v9-latin-500.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/azeret/azeret-mono-v9-latin-500.woff') format('woff'), /* Modern Browsers */
       url('/fonts/azeret/azeret-mono-v9-latin-500.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/azeret/azeret-mono-v9-latin-500.svg#AzeretMono') format('svg'); /* Legacy iOS */
       font-display: swap;
}

@font-face {
  font-family: 'Azeret Mono';
  font-style: normal;
  font-weight: 600;
  src: url('/fonts/azeret/azeret-mono-v9-latin-600.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/fonts/azeret/azeret-mono-v9-latin-600.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/azeret/azeret-mono-v9-latin-600.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/azeret/azeret-mono-v9-latin-600.woff') format('woff'), /* Modern Browsers */
       url('/fonts/azeret/azeret-mono-v9-latin-600.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/azeret/azeret-mono-v9-latin-600.svg#AzeretMono') format('svg'); /* Legacy iOS */
                font-display: swap;
}

@font-face {
  font-family: 'Azeret Mono';
  font-style: normal;
  font-weight: 700;
  src: url('/fonts/azeret/azeret-mono-v9-latin-700.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/fonts/azeret/azeret-mono-v9-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/azeret/azeret-mono-v9-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/azeret/azeret-mono-v9-latin-700.woff') format('woff'), /* Modern Browsers */
       url('/fonts/azeret/azeret-mono-v9-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/azeret/azeret-mono-v9-latin-700.svg#AzeretMono') format('svg'); /* Legacy iOS */
                font-display: swap;
}
`}
  />
);
export default Fonts;

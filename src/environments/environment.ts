// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.

import { TarjetaCredito } from "src/app/tarjetaCredito/tarjetaCredito";

// The list of file replacements can be found in `angular.json`.
const host = 'localhost';
const port = '8080';
const appName = 'frontstepbystep-api';
const rootApi = 'api';

const host = 'localhost';
const port = '8080';
const appName = 'frontstepbystep-api';
const rootApi = 'api';
export const environment = {
  production: false,
<<<<<<< HEAD
  baseUrl: `http://${host}:${port}/${appName}/${rootApi}/`
=======
  baseUrl:`http://${host}:${port}/${rootApi}/`
>>>>>>> ea3935b1bdacf8932b0808f1ad6e8169e31943ec
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

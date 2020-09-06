import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ApiConfInterceptor } from './api-conf';

export let ApiProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: ApiConfInterceptor,
  multi: true
};
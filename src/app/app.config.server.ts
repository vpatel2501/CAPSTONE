import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { AuthInterceptor } from './shared/authInterceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    {provide: HTTP_INTERCEPTORS,useClass:AuthInterceptor, multi:true}
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);

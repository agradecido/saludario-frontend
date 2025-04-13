import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { provideHttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
	return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


function getBrowserLanguage(): string {
	const browserLang = navigator.language || navigator.languages[0];
	return browserLang.split('-')[0];
}

bootstrapApplication(AppComponent, {
	providers: [
		provideRouter(routes),
		provideHttpClient(),
		...(TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [HttpClient],
			},
		}) as any).providers,
		{
			provide: 'APP_INITIALIZER',
			useFactory: (translate: TranslateService) => () => {
			  const browserLang = getBrowserLanguage();
			  translate.setDefaultLang('en');
			  translate.use(browserLang);
			},
			deps: [TranslateService],
			multi: true,
		  },
	],
}).catch((err) => console.error(err));

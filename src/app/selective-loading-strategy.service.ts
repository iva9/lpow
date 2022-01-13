import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';


export interface RouteToPreload {
  routePath: string;
  route: Route;
  load: Function;
}

export class SimpleLoadingStrategy implements PreloadingStrategy {
  
  
  private routesToPreload: RouteToPreload[] = [];
  
  preload(route: Route, load: Function): Observable<any> {
    if (route.data && route.data.preload) {
      return load();
 }
 return of(null);
 }
 
 preloadRoute(path: string): Promise<void> {
  return new Promise<void>((resolve) => {
      if (this.routesToPreload && 
          this.routesToPreload.length > 0) {
          const routeToPreload: RouteToPreload = 
              this.routesToPreload.find(
                 (filterRouteToPreload: RouteToPreload) =>
                 filterRouteToPreload.routePath === path);

          if (routeToPreload) {
              routeToPreload.load();
          }
      }

      resolve();
  });
}
}
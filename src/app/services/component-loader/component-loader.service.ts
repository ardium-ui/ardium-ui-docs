import { Injectable, Type, ViewContainerRef } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ComponentLoaderService {
  public loadDynamicComponent<T>(component: Type<T>, viewContainerRef?: ViewContainerRef) {
    if (!viewContainerRef) {
      throw new Error("Cannot read viewContainerRef.");
    }
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(component);
    componentRef.changeDetectorRef.detectChanges();
  }
}

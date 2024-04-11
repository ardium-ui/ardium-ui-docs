import { AfterViewInit, Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { CodeComponent } from 'src/app/components/code/code.component';
import { KbdBasicExampleData } from 'txt-dist';

@Component({
  selector: 'kbd-page',
  standalone: true,
  imports: [CodeComponent],
  templateUrl: './kbd.page.html',
  styleUrl: './kbd.page.scss',
})
export class KbdPage implements AfterViewInit {
  readonly kbdData = KbdBasicExampleData;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) dynamicComponentContainer!: ViewContainerRef;

  loadDynamicComponent() {
    this.loadComponent(this.kbdData.component);
  }

  loadComponent(componentType: any) {
    this.dynamicComponentContainer.clear();
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);
    const componentRef = this.dynamicComponentContainer.createComponent(componentFactory);
    componentRef.changeDetectorRef.detectChanges();
  }

  ngAfterViewInit(): void {
    this.loadDynamicComponent();
  }
}

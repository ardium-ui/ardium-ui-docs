import { Component, computed, input } from '@angular/core';
import { CodeExampleData } from '../../code-example/code-example.types';

@Component({
  selector: 'app-prerequisites',
  templateUrl: './prerequisites.component.html',
  styleUrl: './prerequisites.component.scss',
})
export class PrerequisitesComponent {
  readonly moduleName = input.required<string>();
  readonly otherModuleNames = input<string[]>([]);

  readonly styles = input.required<(string | [string, boolean])[]>();

  readonly tsCode = computed(() => {
    const modulesToImport = !this.otherModuleNames().length
      ? this.moduleName()
      : [this.moduleName(), ...this.otherModuleNames()].join(', ');
    return `import { ${modulesToImport} } from '@ardium-ui/ui'`;
  });

  readonly isOtherModuleNamesDefined = computed(() => this.otherModuleNames().length > 0);

  readonly stylesCode = computed<CodeExampleData>(() => {
    const css = [
      `@import '../node_modules/@ardium-ui/ui/prebuilt-themes/default/core.css';`,
      ...this.styles().map(
        v =>
          `@import '../node_modules/@ardium-ui/ui/prebuilt-themes/default/${Array.isArray(v) ? v[0] : v}.scs';${
            Array.isArray(v) && v[1] ? ' /* if needed */' : ''
          }`
      ),
    ].join('\n');
    const scss = [
      `@import '../node_modules/@ardium-ui/ui/themes/default/core.scss';`,
      ...this.styles().map(
        v =>
          `@import '../node_modules/@ardium-ui/ui/themes/default/${Array.isArray(v) ? v[0] : v}.scss';${
            Array.isArray(v) && v[1] ? ' // if needed' : ''
          }`
      ),
    ].join('\n');

    return {
      simpleScss: scss,
      scss: scss,
      css: css,
    };
  });
}

import {
  AfterViewInit,
  Component,
  computed,
  effect,
  inject,
  input,
  signal,
  viewChild,
  ViewContainerRef,
} from '@angular/core';
import { coerceBooleanProperty } from '@ardium-ui/devkit';
import { ArdiumIconButtonModule, ArdiumIconModule, ArdiumTabberModule } from '@ardium-ui/ui';
import { ComponentLoaderService } from '@services/component-loader';
import { CodeComponent } from '../code/code.component';
import { SupportedLanguage } from '../code/code.types';
import { CodeExampleData } from './code-example.types';

function _mapLabelToCodeType(label: string): SupportedLanguage {
  switch (label) {
    case 'ts':
      return SupportedLanguage.TS;
    case 'html':
      return SupportedLanguage.HTML;
    case 'scss':
      return SupportedLanguage.SCSS;
    default: {
      const ext = label.split('.').at(-1)?.toLowerCase();
      switch (ext) {
        case 'ts':
          return SupportedLanguage.TS;
        case 'html':
          return SupportedLanguage.HTML;
        case 'scss':
          return SupportedLanguage.SCSS;
        default:
          return SupportedLanguage.PlainText;
      }
    }
  }
}

const TAB_SORT_ORDER = ['HTML', 'TS', 'SCSS'];

@Component({
  selector: 'app-code-example',
  standalone: true,
  imports: [ArdiumTabberModule, ArdiumIconButtonModule, ArdiumIconModule, CodeComponent],
  templateUrl: './code-example.component.html',
  styleUrl: './code-example.component.scss',
  host: {
    '[class.simple-example]': 'isSimpleCodeDefined() && !isCodeShown()',
  },
})
export class CodeExampleComponent implements AfterViewInit {
  readonly data = input.required<CodeExampleData>();

  readonly heading = input.required<string>();

  readonly isSimpleCodeDefined = computed(() => !!this.simpleCodePiece());
  readonly simpleCodePiece = computed(() => {
    const data = this.data();
    return data.simpleTs ?? data.simpleHtml ?? data.simpleScss;
  });
  readonly simpleCodeType = computed(() => {
    const data = this.data();
    if (data.simpleTs) return SupportedLanguage.TS;
    if (data.simpleHtml) return SupportedLanguage.HTML;
    return SupportedLanguage.SCSS;
  });

  constructor() {
    effect(
      () => {
        if (this.isSimpleCodeDefined()) {
          this.isCodeShown.set(false);
        }
      },
      { allowSignalWrites: true }
    );
  }
  readonly isCodeShown = signal<boolean>(true);

  toggleCodeShown(): void {
    this.isCodeShown.update(v => !v);
    setTimeout(() => {
      this.componentLoader.loadDynamicComponent(this.data().component, this.exampleDisplay());
    }, 0);
  }

  readonly shouldShowFullCodeData = computed(() => this.isCodeShown() || !this.isSimpleCodeDefined());

  readonly displayWhenSimple = input<boolean, any>(false, { transform: v => coerceBooleanProperty(v) });

  readonly mappedData = computed(() => {
    const data = this.data();

    return Object.entries(data)
      .filter(v => v[0] !== 'component' && v[0] !== 'simpleHtml' && v[0] !== 'simpleScss' && v[0] !== 'simpleTs')
      .map(v => {
        let label = v[0];
        if (typeof label === 'string' && label.match(/^(html|scss|ts)$/i)) {
          label = label.toUpperCase();
        }
        return { label, data: v[1] as string, type: _mapLabelToCodeType(label) };
      })
      .sort((a, b) => {
        const indexA = TAB_SORT_ORDER.indexOf(a.label);
        const indexB = TAB_SORT_ORDER.indexOf(b.label);

        if (indexA !== -1 && indexB !== -1) {
          return indexA - indexB;
        } else if (indexA !== -1) {
          return -1;
        } else if (indexB !== -1) {
          return 1;
        } else {
          return a.label.localeCompare(b.label);
        }
      });
  });

  private readonly componentLoader = inject(ComponentLoaderService);
  readonly exampleDisplay = viewChild<any, ViewContainerRef>('exampleDisplay', { read: ViewContainerRef });

  ngAfterViewInit(): void {
    this._renderComponent();
  }
  private _renderComponent() {
    this.componentLoader.loadDynamicComponent(this.data().component, this.exampleDisplay());
  }
}

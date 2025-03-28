import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  computed,
  effect,
  inject,
  input,
  model,
  OnInit,
  signal,
  viewChild,
  ViewContainerRef,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { coerceBooleanProperty } from '@ardium-ui/devkit';
import { ArdiumIconButtonModule, ArdiumIconModule, ArdiumTabberModule } from '@ardium-ui/ui';
import { ComponentLoaderService } from '@services/component-loader';
import { CodeComponent } from '../code/code.component';
import { SupportedLanguage } from '../code/code.types';
import { CopyButtonComponent } from '../copy-button/copy-button.component';
import { CodeExampleData } from './code-example.types';

function _mapLabelToCodeType(label: string): SupportedLanguage {
  switch (label) {
    case 'ts':
      return SupportedLanguage.TS;
    case 'html':
      return SupportedLanguage.HTML;
    case 'scss':
    case 'css':
      return SupportedLanguage.SCSS;
    default: {
      const ext = label.split('.').at(-1)?.toLowerCase();
      switch (ext) {
        case 'ts':
          return SupportedLanguage.TS;
        case 'html':
          return SupportedLanguage.HTML;
        case 'scss':
        case 'css':
          return SupportedLanguage.SCSS;
        default:
          return SupportedLanguage.PlainText;
      }
    }
  }
}

const TAB_SORT_ORDER = ['HTML', 'TS', 'SCSS', 'CSS'];

@Component({
  selector: 'app-code-example',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ArdiumTabberModule,
    ArdiumIconButtonModule,
    ArdiumIconModule,
    CodeComponent,
    CopyButtonComponent,
  ],
  templateUrl: './code-example.component.html',
  styleUrl: './code-example.component.scss',
  host: {
    '[class.simple-example]': 'isSimpleCodeDefined() && !isCodeShown()',
    '[class.code-shown]': 'isCodeShown()',
    '[class.component-defined]': 'isComponentDefined()',
    '[class.non-expandable]': 'nonExpandable()',
    '[class.has-single-tab]': 'mappedData().length === 1',
  },
})
export class CodeExampleComponent implements OnInit, AfterViewInit {
  readonly data = input.required<CodeExampleData>();

  readonly heading = input.required<string>();

  readonly viewInFullWindowLink = input<string | null, string | null>(null, {
    transform: v => (v?.startsWith('/') ? v : v && '/' + v), // ensure the link always starts with a slash
  });

  readonly isSimpleCodeDefined = computed(() => !!this.simpleCodePiece());
  readonly simpleCodePiece = computed(() => {
    const data = this.data();
    return data.simpleTs ?? data.simpleHtml ?? data.simpleScss ?? data.simpleTxt;
  });
  readonly simpleCodeType = computed(() => {
    const data = this.data();
    if (data.simpleTs) return SupportedLanguage.TS;
    if (data.simpleHtml) return SupportedLanguage.HTML;
    if (data.simpleScss) return SupportedLanguage.SCSS;
    return SupportedLanguage.PlainText;
  });
  readonly isComponentDefined = computed(() => !!this.data().component);

  constructor() {
    effect(() => {
      if (this.isSimpleCodeDefined() || this.nonExpandable()) {
        this.isCodeShown.set(false);
      }
    });
  }
  readonly isCodeShown = model<boolean>(true);

  readonly initialTab = input<'html' | 'ts' | 'css' | 'scss' | string | undefined>(undefined);

  readonly nonExpandable = input<boolean, any>(false, { transform: v => coerceBooleanProperty(v) });

  readonly codeToCopy = computed<string>(() => {
    if (this.shouldShowFullCodeData()) {
      const tabData = this._currentTab()
        ? this.mappedData().find(v => v.label === this._currentTab())!
        : this.mappedData()[0];
      return tabData.code;
    } else {
      return this.simpleCodePiece()!;
    }
  });

  ngOnInit(): void {
    if (this.nonExpandable()) {
      this.isCodeShown.set(false);
    }
  }

  toggleCodeShown(): void {
    this.isCodeShown.update(v => !v);
  }

  private readonly _currentTab = signal<string>('');
  onTabChange(tab: any): void {
    this._currentTab.set(tab);
  }

  readonly shouldShowFullCodeData = computed(() => this.isCodeShown() || !this.isSimpleCodeDefined());

  readonly displayWhenSimple = input<boolean, any>(false, { transform: v => coerceBooleanProperty(v) });

  readonly mappedData = computed(() => {
    const data = this.data();

    return Object.entries(data)
      .filter(
        v =>
          v[0] !== 'component' &&
          // v[0] !== 'other' &&
          v[0] !== 'simpleHtml' &&
          v[0] !== 'simpleScss' &&
          v[0] !== 'simpleTs'
      )
      .map(v => {
        let label = v[0];
        if (typeof label === 'string' && label.match(/^(html|s?css|ts)$/i)) {
          label = label.toUpperCase();
        }
        return { label, code: v[1] as string, type: _mapLabelToCodeType(label) };
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
    if (this.viewInFullWindowLink()) return;
    const cmp = this.data().component;
    if (!cmp) return;
    this.componentLoader.loadDynamicComponent(cmp, this.exampleDisplay());
  }
}

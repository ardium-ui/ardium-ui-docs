import { Component } from '@angular/core';
import dedent from 'dedent';
import { ArticleSectionsModule } from '../../../../components/article-sections/article-sections.module';
import { CodeComponent } from '../../../../components/code/code.component';
import { HeadingsModule } from '../../../../components/headings/headings.module';

@Component({
  selector: 'validators-page',
  standalone: true,
  imports: [CodeComponent, ArticleSectionsModule, HeadingsModule],
  templateUrl: './validators.page.html',
  styleUrl: './validators.page.scss',
})
export class ValidatorsPage {
  readonly containsExampleCode = dedent`
    const control = new FormControl('ng', ExtValidators.contains('angular'));
    console.log(control.errors);
    // { contains: { actualValue: 'ng', shouldContain: 'angular' } }
  `;
  readonly notContainsExampleCode = dedent`
    const control = new FormControl('angular', ExtValidators.notContains('ng'));
    console.log(control.errors);
    // { notContains: { actualValue: 'angular', shouldNotContain: 'ng' } }
  `;
  readonly lowercaseExampleCode = dedent`
    const control = new FormControl('Angular', ExtValidators.lowercase);
    console.log(control.errors);
    // { lowercase: { actualValue: 'Angular' } }
  `;
  readonly uppercaseExampleCode = dedent`
    const control = new FormControl('Angular', ExtValidators.uppercase);
    console.log(control.errors);
    // { uppercase: { actualValue: 'Angular' } }
  `;
  readonly namedPatternExampleCode = dedent`
    const control = new FormControl('abc-123', ExtValidators.namedPattern('sku', /^[A-Z]{3}-\d{3}$/));
    console.log(control.errors);
    // { sku: { actualValue: 'abc-123' } }
  `;
  readonly divisibleByExampleCode = dedent`
    const control = new FormControl('12', ExtValidators.divisibleBy(5));
    console.log(control.errors);
    // { divisibleBy: { divisor: 5, actual: '12' } }
  `;
  readonly asciiExampleCode = dedent`
    const control = new FormControl('Zażółć', ExtValidators.ascii);
    console.log(control.errors);
    // { ascii: { actualValue: 'Zażółć' } }
  `;
  readonly base64ExampleCode = dedent`
    const control = new FormControl('hello world', ExtValidators.base64);
    console.log(control.errors);
    // { base64: { actualValue: 'hello world' } }
  `;
  readonly hexExampleCode = dedent`
    const control = new FormControl('0xdeadbeef', ExtValidators.hex);
    console.log(control.errors);
    // { hex: { actualValue: '0xdeadbeef' } }
  `;
  readonly octalExampleCode = dedent`
    const control = new FormControl('128', ExtValidators.octal);
    console.log(control.errors);
    // { octal: { actualValue: '128' } }
  `;
  readonly binaryExampleCode = dedent`
    const control = new FormControl('10201', ExtValidators.binary);
    console.log(control.errors);
    // { binary: { actualValue: '10201' } }
  `;
  readonly ipAddressExampleCode = dedent`
    const control = new FormControl('999.1.2.3', ExtValidators.ipAddress(4));
    console.log(control.errors);
    // { ipAddress: { requiredType: 'IPv4', actualValue: '999.1.2.3' } }
    
    const control = new FormControl('not-an-ip', ExtValidators.ipAddress(6));
    console.log(control.errors);
    // { ipAddress: { requiredType: 'IPv6', actualValue: 'not-an-ip' } }
  `;
  readonly uuidExampleCode = dedent`
    const control = new FormControl('550e8400-e29b-41d4-a716-44665544ZZZZ', ExtValidators.uuid);
    console.log(control.errors);
    // { uuid: { actualValue: '550e8400-e29b-41d4-a716-44665544ZZZZ' } }
  `;
  readonly hexColorExampleCode = dedent`
    const control = new FormControl('#12FG00', ExtValidators.hexColor);
    console.log(control.errors);
    // { hexColor: { actualValue: '#12FG00' } }
  `;
  readonly rgbColorExampleCode = dedent`
    const control = new FormControl('rgb(256, 0, 0)', ExtValidators.rgbColor);
    console.log(control.errors);
    // { rgbColor: { actualValue: 'rgb(256, 0, 0)' } }
  `;
  readonly hslColorExampleCode = dedent`
    const control = new FormControl('hsl(361, 50%, 40%)', ExtValidators.hslColor);
    console.log(control.errors);
    // { hslColor: { actualValue: 'hsl(361, 50%, 40%)' } }
  `;
  readonly passwordExampleCode = dedent`
    const control = new FormControl('password', ExtValidators.password({
      minLength: 8,
      requireNumbers: true,
      requireUppercase: true,
      requireSpecialCharacters: true,
    }));
   
    console.log(control.errors);
    // {
    //   password: {
    //     requireNumbers: true,
    //     requireUppercase: true,
    //     requireSpecialCharacters: true
    //   }
    // }
  `;
  readonly arrayContainsExampleCode = dedent`
    const control = new FormControl(['a', 'b'], ExtValidators.arrayContains('c'));
    console.log(control.errors);
    // { arrayContains: { actualValue: ['a', 'b'], shouldContain: 'c' } }
  `;
  readonly arrayNotContainsExampleCode = dedent`
    const control = new FormControl(['a', 'b'], ExtValidators.arrayNotContains('b'));
    console.log(control.errors);
    // { arrayNotContains: { actualValue: ['a', 'b'], shouldNotContain: 'b' } }
  `;
  readonly arrayUniqueExampleCode = dedent`
    const control = new FormControl([1, 1, 2], ExtValidators.arrayUnique);
    console.log(control.errors);
    // { arrayUnique: { actualValue: [1, 1, 2] } }
  `;
  readonly fileMaxSizeExampleCode = dedent`
    const control = new FormControl<File | null>(/* file here */, ExtValidators.fileMaxSize(1_000));
    console.log(control.errors);
    // { fileMaxSize: { requiredMaxSize: 1000, actualSize: 10000000 } }
  `;
  readonly fileMinSizeExampleCode = dedent`
    const control = new FormControl<File | null>(/* file here */, ExtValidators.fileMinSize(100));
    console.log(control.errors);
    // { fileMinSize: { requiredMinSize: 100, actualSize: 50 } }
  `;
  readonly fileExtensionExampleCode = dedent`
    const control = new FormControl<File | null>(/* file here */, ExtValidators.fileExtension(['pdf', 'docx']));
    console.log(control.errors);
    // { fileExtension: { allowedExtensions: ['pdf', 'docx'], actualExtension: 'exe' } }
  `;
}

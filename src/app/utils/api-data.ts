import { FormElementAppearance } from '@ardium-ui/ui';
import { InputData } from '../components/api-page';

export const BOOLEAN_PROPERTY_DATA: InputData = {
  name: '$$$',
  description: '$$$',
  type: 'boolean-like',
  default: 'false',
};

export function FORM_ELEMENT_APPEARANCE_PROPERTY_DATA(
  description: string,
  defaultValue: FormElementAppearance = FormElementAppearance.Outlined,
  alias?: string
): InputData {
  return {
    name: alias ?? 'appearance',
    description,
    type: 'FormElementAppearance',
    default: `'${defaultValue}'`,
  };
}

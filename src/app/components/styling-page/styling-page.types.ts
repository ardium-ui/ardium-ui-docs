export interface StylingPageData {
  name: string;
  variables: VariableData[];
}

export interface VariableData {
  name: string;
  description?: string;
  default: string;
  inheritsFrom?: string;
}
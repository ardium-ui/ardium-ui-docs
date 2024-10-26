export interface ApiPageData {
  name: string;
  modules?: ModuleData[];
  components?: ComponentData[];
  directives?: DirectiveData[];
  pipes?: PipeData[];
  classes?: ClassData[];
  interfaces?: InterfaceData[];
  types?: TypeData[];
  enums?: EnumData[];
  functions?: FunctionData[];
  constants?: PropertyData[];
  injectionTokens?: any[]; // TODO
}

interface _BaseData {
  name: string;
  description?: string;
}
interface _Exportable extends _BaseData {
  exportedFrom: string;
}

export interface ModuleData extends _BaseData {
  exports: string | string[];
}
export interface DirectiveData extends _Exportable {
  selector: string;
  publicMethods?: (FunctionNonOverloadData | FunctionOverloadData)[];
  inputs?: InputData[];
  outputs?: OutputData[];
}
export interface ComponentData extends DirectiveData {
  contentChildren?: ContentChildData[];
}
export interface PipeData extends _Exportable {
  selector: string;
  params?: ParamData[];
  description: string;
}
export interface ClassData extends _BaseData {
  properties?: PropertyData[];
  methods?: FunctionNonOverloadData[];
}
export interface InterfaceData extends ClassData {}
export interface TypeData extends _Exportable {
  definition: string;
}
export interface EnumData extends TypeData {}

export interface PropertyData extends _BaseData {
  type: string;
  deprecated?: boolean;
}
export interface ParamData extends PropertyData {
  required?: boolean;
  default?: string;
}
export interface InputData extends ParamData {}
export interface OutputData extends ParamData {}
export interface ContentChildData {
  selector: string | null;
  description: string;
}
export interface EnumValueData {
  name: string;
  value: string;
}
export interface FunctionNonOverloadData extends _BaseData {
  params?: ParamData[];
  returnType: string;
  typeParams?: ParamData[];
}
export interface FunctionOverloadData extends _BaseData {
  overloads: Omit<FunctionNonOverloadData, 'name'>[];
}
export type FunctionData = FunctionNonOverloadData | FunctionOverloadData;

export interface ApiPageData {
  name: string;
  modules?: ModuleData[];
  components?: ComponentData[];
  directives?: DirectiveData[];
  pipes?: PipeData[];
  services?: ServiceData[];
  classes?: ClassData[];
  interfaces?: InterfaceData[];
  types?: TypeData[];
  enums?: EnumData[];
  functions?: FunctionData[];
  constants?: PropertyData[];
  injectionTokens?: InjectionTokenData[];
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
  extends?: string;
  typeParams?: ParamData[];
  properties?: PropertyData[];
  methods?: FunctionNonOverloadData[];
}
export interface InterfaceData extends ClassData {}
export interface ServiceData extends ClassData {
  providedIn: string;
}
export interface TypeData extends _BaseData {
  definition: string;
  typeParams?: ParamData[];
}
export interface EnumData extends TypeData {}

export interface PropertyData extends _BaseData {
  type: string;
  deprecated?: boolean;
}
export interface InputData extends PropertyData {
  required?: boolean;
  default?: string;
}
export interface ParamData extends InputData {
  isMergedObject?: boolean;
}
export interface OutputData extends PropertyData {}
export interface ContentChildData {
  selector: string | null;
  description: string;
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
export interface InjectionTokenData extends PropertyData {
  allOptional?: boolean;
}
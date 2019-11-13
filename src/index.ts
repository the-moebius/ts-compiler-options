
import { CompilerOptions as TSCompilerOptions } from 'typescript';


export enum JsxEmit {
  Preserve = 'preserve',
  React = 'react',
  ReactNative = 'react-native',
}

export enum ModuleKind {
  None = 'None',
  CommonJS = 'CommonJS',
  AMD = 'AMD',
  UMD = 'UMD',
  System = 'System',
  ES2015 = 'ES2015',
  ESNext = 'ESNext',
}

export enum ModuleResolutionKind {
  Classic = 'Classic',
  NodeJs = 'Node',
}

export enum NewLineKind {
  CarriageReturnLineFeed = 'crlf',
  LineFeed = 'lf',
}

export enum ScriptTarget {
  ES3 = 'ES3',
  ES5 = 'ES5',
  ES6 = 'ES6',
  ES2015 = 'ES2015',
  ES2016 = 'ES2016',
  ES2017 = 'ES2017',
  ES2018 = 'ES2018',
  ES2019 = 'ES2019',
  ES2020 = 'ES2020',
  ESNext = 'ESNext',
}

export type EnumFields = (
  'jsx' |
  'module' |
  'moduleResolution' |
  'newLine' |
  'target'
);

export interface CompilerOptions extends Omit<TSCompilerOptions, EnumFields> {
  jsx?: JsxEmit;
  module?: ModuleKind;
  moduleResolution?: ModuleResolutionKind;
  newLine?: NewLineKind;
  target?: ScriptTarget;
}

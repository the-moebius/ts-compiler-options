
import * as internal from 'typescript';

import * as external from './index';


export type ConversionDirection = (
  'internal-to-external' |
  'external-to-internal'
);


const fieldsToMap: { [key: string]: [{}, {}] } = {
  jsx: [
    external.JsxEmit,
    internal.JsxEmit,
  ],
  module: [
    external.ModuleKind,
    internal.ModuleKind,
  ],
  moduleResolution: [
    external.ModuleResolutionKind,
    internal.ModuleResolutionKind,
  ],
  newLine: [
    external.NewLineKind,
    internal.NewLineKind,
  ],
  target: [
    external.ScriptTarget,
    internal.ScriptTarget,
  ],
};


export function convertCompilerOptions(
  direction: 'internal-to-external',
  compilerOptions: internal.CompilerOptions

): external.CompilerOptions;

export function convertCompilerOptions(
  direction: 'external-to-internal',
  compilerOptions: external.CompilerOptions

): internal.CompilerOptions;

/**
 * Converts compiler options from one format to another.
 */
export function convertCompilerOptions(
  direction: ConversionDirection,
  compilerOptions: (internal.CompilerOptions | external.CompilerOptions)

): (internal.CompilerOptions | external.CompilerOptions) {

  const result: { [key: string]: any } = {};

  for (const [field, value] of Object.entries(compilerOptions)) {

    if (fieldsToMap[field]) {

      // Mapping the value
      const [externalMap, internalMap] = fieldsToMap[field];
      result[field] = mapValue(
        field,
        value,
        (direction === 'external-to-internal' ? externalMap : internalMap),
        (direction === 'external-to-internal' ? internalMap : externalMap)
      );

    } else {

      // Copying value directly if we doesn't have a map for it
      result[field] = value;

    }

  }

  return result;


  function mapValue(
    field: string,
    value: any,
    srcMap: any,
    destMap: any

  ): any {

    const key = findKeyByValue(srcMap, value);
    if (!key) {
      throw new Error(`Failed to map value "${value}" for field "${field}"`);
    }

    return destMap[key];

  }

}


function findKeyByValue(map: any, value: any): any | undefined {
  for (const [key, $value] of Object.entries(map)) {
    if (value === $value) {
      return key;
    }
  }
}

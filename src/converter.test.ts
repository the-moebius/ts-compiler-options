
import * as internal from 'typescript';

import * as external from '../dist';


describe('convertCompilerOptions()', () => {

  const { convertCompilerOptions } = external;

  test('external-to-internal', () => {

    const convertedOptions = convertCompilerOptions('external-to-internal', {
      jsx: external.JsxEmit.React,
      module: external.ModuleKind.ES2015,
      moduleResolution: external.ModuleResolutionKind.Classic,
      newLine: external.NewLineKind.CarriageReturnLineFeed,
      outDir: '/dist',
      strict: true,
      target: external.ScriptTarget.ES2018,
    });

    expect(convertedOptions).toStrictEqual({
      jsx: 2,
      module: 5,
      moduleResolution: 1,
      newLine: 0,
      outDir: '/dist',
      strict: true,
      target: 5,
    });

  });

  test('internal-to-external', () => {

    const externalOptions = convertCompilerOptions(
      'internal-to-external',
      {
        jsx: internal.JsxEmit.React,
        module: internal.ModuleKind.ES2015,
        moduleResolution: internal.ModuleResolutionKind.Classic,
        newLine: internal.NewLineKind.CarriageReturnLineFeed,
        outDir: '/dist',
        strict: true,
        target: internal.ScriptTarget.ES2018,
      }
    );

    expect(externalOptions).toStrictEqual({
      jsx: 'react',
      module: 'ES2015',
      moduleResolution: 'Classic',
      newLine: 'crlf',
      outDir: '/dist',
      strict: true,
      target: 'ES2018',
    });

  });

});

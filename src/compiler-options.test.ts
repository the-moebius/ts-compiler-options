
import {
  CompilerOptions,
  JsxEmit,
  ModuleKind,
  ModuleResolutionKind,
  NewLineKind,
  ScriptTarget,

} from '../dist';


test('CompilerOptions', () => {

  const myOptions: CompilerOptions = {
    jsx: JsxEmit.React,
    module: ModuleKind.ES2015,
    moduleResolution: ModuleResolutionKind.Classic,
    newLine: NewLineKind.CarriageReturnLineFeed,
    outDir: '/dist',
    strict: true,
    target: ScriptTarget.ES2018,
  };

  expect(myOptions).toStrictEqual({
    jsx: 'react',
    module: 'ES2015',
    moduleResolution: 'Classic',
    newLine: 'crlf',
    outDir: '/dist',
    strict: true,
    target: 'ES2018',
  });

});

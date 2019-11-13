
# TypeScript Compiler Options Types

[![npm version](https://badge.fury.io/js/%40moebius%2Fts-compiler-options.svg)](https://badge.fury.io/js/%40moebius%2Fts-compiler-options)

TypeScript declarations doesn't provide proper types for
[CompilerOptions][compiler-options]
that can be used to describe content of `tsconfig.json` file,
instead, they provide internal representation of CompilerOptions,
where enum values must be specified using numbers instead of strings.
This modules closes this gap.

Typings in this module are based on both typings provided by TypeScript as
well as [official documentation][compiler-options].

If it's not working for your configuration or TypeScript version,
please, [create an issue](./issues).


## Installation

**As development dependency**

`npm i -D @moebius/ts-compiler-options`

**As production dependency**

`npm i -S @moebius/ts-compiler-options typescript`

### Peer Dependencies

`typescript` package must be also installed in your project
(we treat it as a peer dependency).


## Support

If this library is useful to you, please add a star on
[GitHub repository][repo-gh].

Thank you!


## License

The MIT License (MIT)

Copyright (c) 2017—2019, MOEBIUS FOUNDATION, Slava Fomin II

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


  [repo-gh]: https://github.com/moebius-mlm/ts-compiler-options
  [compiler-options]: https://www.typescriptlang.org/docs/handbook/compiler-options.html
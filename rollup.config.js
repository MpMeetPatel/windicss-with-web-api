import fs from 'fs';
import path from 'path';
import replace from '@rollup/plugin-replace';
import resolve from '@rollup/plugin-node-resolve';
import sucrase from '@rollup/plugin-sucrase';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';
import { camelCase } from 'camel-case';
import pkg from './package.json';

const output_dir = './dist';

const prod = process.env.NODE_ENV === 'production';

const ts_plugin = prod
  ? typescript({
    target: 'es5',
    include: 'src/**',
    outDir: output_dir,
    typescript: require('typescript'),
  })
  : sucrase({
    exclude: ['node_modules/**'],
    transforms: ['typescript'],
  });

const dump = (file) => path.join(output_dir, file);

const copy = (files) => files.forEach((file) => fs.copyFileSync(file, dump(file)));

const rmdir = (dir) =>  fs.existsSync(dir) && fs.statSync(dir).isDirectory() && fs.rmdirSync(dir, { recursive: true });

const mkdir = (dir) => !(fs.existsSync(dir) && fs.statSync(dir).isDirectory()) && fs.mkdirSync(dir);

const pack = (dir, mjs = true) => {
  return {
    writeBundle() {
      fs.writeFileSync(
        `${dump(dir)}/package.json`,
        JSON.stringify(
          {
            main: './index.js',
            module: './index.mjs',
            types: './index.d.ts',
          },
          null,
          '  '
        )
      );
    },
  };
};

const types = (dest = "index.d.ts", src = "../types/index", module = "*") => {
  return {
    writeBundle() {
      fs.writeFileSync(dump(dest), `export ${module} from "${src}";`);
    },
  };
};

export default [
  // main
  {
    input: 'src/index.ts',
    output: [
      {
        file: dump('index.js'),
        format: 'cjs',
        exports: 'default',
        paths: (id) => `./${path.relative('./src', id)}/index.js`,
      },
      {
        file: dump('index.mjs'),
        format: 'esm',
        paths: (id) => `./${path.relative('./src', id)}/index.mjs`,
      },
    ],
    external: (id) => id.startsWith('./'),
    plugins: [
      ts_plugin,
      rmdir(output_dir),
      mkdir(output_dir),
      copy(['package.json', 'README.md', 'LICENSE']),
      types("index.d.ts", "./types/lib", "{ Processor as default }"),
    ],
  },

  // IIFE (main)
  {
    input: 'src/index.ts',
    output: [
      {
        file: dump('index.iife.js'),
        format: 'iife',
        name: 'windicss',
        globals: {
          windicss: 'windicss'
        }
      },
    ],
    // external: (id) => id.startsWith('./'),
    plugins: [
      ts_plugin,
      commonjs(),
      resolve({ browser: true }),
      terser({
        ecma: '5',
        compress: true,
        mangle: true,
      })
    ],
  },

  // colors
  {
    input: 'src/colors.ts',
    output: [
      {
        file: dump('colors.js'),
        format: 'cjs',
        exports: 'default',
        paths: (id) => `./${path.relative('./src', id)}/index.js`,
      },
      {
        file: dump('colors.mjs'),
        format: 'esm',
        paths: (id) => `./${path.relative('./src', id)}/index.mjs`,
      },
    ],
    external: (id) => id.startsWith('./'),
    plugins: [
      ts_plugin,
      types("colors.d.ts", "./types/config", "{ colors as default }"),
    ],
  },

  // IIFE (colors)
  {
    input: 'src/colors.ts',
    output: [
      {
        file: dump('colors.iife.js'),
        format: 'iife',
        name: 'colors',
        globals: {
          colors: 'colors'
        }
      },
    ],
    // external: (id) => id.startsWith('./'),
    plugins: [
      ts_plugin,
      commonjs(),
      resolve({ browser: true }),
      terser({
        ecma: '5',
        compress: true,
        mangle: true,
      })
    ],
  },

  // defaultConfig
  {
    input: 'src/defaultConfig.ts',
    output: [
      {
        file: dump('defaultConfig.js'),
        format: 'cjs',
        exports: 'default',
        paths: (id) => `./${path.relative('./src', id)}/index.js`,
      },
      {
        file: dump('defaultConfig.mjs'),
        format: 'esm',
        paths: (id) => `./${path.relative('./src', id)}/index.mjs`,
      },
    ],
    external: (id) => id.startsWith('./'),
    plugins: [
      ts_plugin,
      types("defaultConfig.d.ts", "./types/defaultConfig", "{ default }")],
  },

    // IIFE (defaultConfig)
    {
      input: 'src/defaultConfig.ts',
      output: [
        {
          file: dump('defaultConfig.iife.js'),
          format: 'iife',
          name: 'defaultConfig',
          globals: {
            defaultConfig: 'defaultConfig'
          }
        },
      ],
      plugins: [
        ts_plugin,
        commonjs(),
        resolve({ browser: true }),
        terser({
          ecma: '5',
          compress: true,
          mangle: true,
        })
      ],
    },

  // defaultTheme
  {
    input: 'src/defaultTheme.ts',
    output: [
      {
        file: dump('defaultTheme.js'),
        format: 'cjs',
        exports: 'default',
        paths: (id) => `./${path.relative('./src', id)}/index.js`,
      },
      {
        file: dump('defaultTheme.mjs'),
        format: 'esm',
        paths: (id) => `./${path.relative('./src', id)}/index.mjs`,
      },
    ],
    external: (id) => id.startsWith('./'),
    plugins: [
      ts_plugin,
      types("defaultTheme.d.ts", "./types/defaultTheme", "{ default }")
    ],
  },

  // IIFE (defaultTheme)
  {
    input: 'src/defaultTheme.ts',
    output: [
      {
        file: dump('defaultTheme.iife.js'),
        format: 'iife',
        name: 'defaultTheme',
        globals: {
          defaultTheme: 'defaultTheme'
        }
      },
    ],
    plugins: [
      ts_plugin,
      commonjs(),
      resolve({ browser: true }),
      terser({
        ecma: '5',
        compress: true,
        mangle: true,
      })
    ],
  },

  // resolveConfig
  {
    input: 'src/resolveConfig.ts',
    output: [
      {
        file: dump('resolveConfig.js'),
        format: 'cjs',
        exports: 'default',
        paths: (id) => `./${path.relative('./src', id)}/index.js`,
      },
      {
        file: dump('resolveConfig.mjs'),
        format: 'esm',
        paths: (id) => `./${path.relative('./src', id)}/index.mjs`,
      },
    ],
    external: (id) => id.startsWith('./'),
    plugins: [
      ts_plugin,
      types("resolveConfig.d.ts", "./types/resolveConfig", "{ default }")
    ],
  },

  // IIFE (defaultTheme)
  {
    input: 'src/resolveConfig.ts',
    output: [
      {
        file: dump('resolveConfig.iife.js'),
        format: 'iife',
        name: 'resolveConfig',
        globals: {
          resolveConfig: 'resolveConfig'
        }
      },
    ],
    plugins: [
      ts_plugin,
      commonjs(),
      resolve({ browser: true }),
      terser({
        ecma: '5',
        compress: true,
        mangle: true,
      })
    ],
  },

  // plugin
  {
    input: 'src/plugin/index.ts',
    output: [
      {
        file: dump('plugin/index.js'),
        exports: 'default',
        format: 'cjs',
      },
      {
        file: dump('plugin/index.mjs'),
        format: 'esm',
      },
    ],
    plugins: [
      ts_plugin,
      resolve(),
      pack('plugin'),
      types(`plugin/index.d.ts`, `../types/plugin/index`, "{ default }"),
    ],
  },

  // IIFE (plugin)
  {
    input: 'src/plugin/index.ts',
    output: [
      {
        file: dump('plugin/index.iife.js'),
        format: 'iife',
        name: 'plugin',
        globals: {
          plugin: 'plugin'
        }
      },
    ],
    plugins: [
      ts_plugin,
      commonjs(),
      resolve({ browser: true }),
      terser({
        ecma: '5',
        compress: true,
        mangle: true,
      })
    ],
  },

  // plugin deep
  ...fs.readdirSync('src/plugin').filter(dir => fs.statSync(`src/plugin/${dir}`).isDirectory())
    .map((dir) => ({
      input: `src/plugin/${dir}/index.ts`,
      output: [
        {
          file: dump(`plugin/${dir}/index.js`),
          exports: 'default',
          format: 'cjs',
        },
      ],
      plugins: [
        ts_plugin,
        resolve(),
        commonjs(),
        types(`plugin/${dir}/index.d.ts`, `../../types/plugin/${dir}/index`, "{ default }"),
      ],
    })),

    // IIFE (plugin deep)
  ...fs.readdirSync('src/plugin').filter(dir => fs.statSync(`src/plugin/${dir}`).isDirectory())
  .map((dir) => ({
    input: `src/plugin/${dir}/index.ts`,
    output: [
      {
        file: dump(`plugin/${dir}/index.iife.js`),
        format: 'iife',
        name: camelCase(dir),
        globals: {
          [camelCase(dir)]: camelCase(dir)
        }
      },
    ],
    plugins: [
      ts_plugin,
      commonjs(),
      resolve({ browser: true }),
      terser({
        ecma: '5',
        compress: true,
        mangle: true,
      })
    ],
  })),
  
  // cli
  {
    input: 'src/cli/index.ts',
    output: [
      {
        file: dump('cli/index.js'),
        banner: '#!/usr/bin/env node',
        format: 'cjs',
        paths: (id) =>
          id.match(/\/src\/(lib|utils|plugin|config|colors)/) &&
          `../${path.dirname(path.relative('./src', id))}/index.js`,
      },
    ],
    onwarn: (warning) => {
      if (warning.code === 'CIRCULAR_DEPENDENCY') return;
    },
    external: (id) =>
      id.match(/\/src\/(lib|utils|plugin|config|colors)/),
    plugins: [
      replace({
        preventAssignment: true,
        __NAME__: pkg.name,
        __VERSION__: pkg.version,
      }),
      ts_plugin,
      resolve(),
      commonjs(),
    ],
  },

  // utils
  ...fs.readdirSync('src/').filter((dir) => ['config', 'lib', 'utils', 'helpers'].includes(dir) && fs.statSync(`src/${dir}`).isDirectory())
    .map((dir) => ({
      input: `src/${dir}/index.ts`,
      output: [
        {
          file: dump(`${dir}/index.js`),
          format: 'cjs',
        },
        {
          file: dump(`${dir}/index.mjs`),
          format: 'esm',
        },
      ],
      plugins: [
        ts_plugin,
        json(),
        resolve(),
        commonjs(),
        pack(dir),
        types(`${dir}/index.d.ts`, `../types/${dir}/index`),
      ],
    })),

  // IIFE (utils)
  ...fs.readdirSync('src/').filter((dir) => ['config', 'lib', 'utils', 'helpers'].includes(dir) && fs.statSync(`src/${dir}`).isDirectory())
    .map((dir) => ({
      input: `src/${dir}/index.ts`,
      output: [
        {
          file: dump(`${dir}/index.iife.js`),
          format: 'iife',
          name: camelCase(dir),
          globals: {
            [camelCase(dir)]: camelCase(dir)
          }
        },
      ],
      plugins: [
        ts_plugin,
        commonjs(),
        resolve({ browser: true }),
        terser({
          ecma: '5',
          compress: true,
          mangle: true,
        })
      ],
    })),

  // utils deep
  ...fs
    .readdirSync('src/utils')
    .filter(
      (dir) =>
        dir !== 'algorithm' && fs.statSync(`src/utils/${dir}`).isDirectory()
    )
    .map((dir) => ({
      input: `src/utils/${dir}/index.ts`,
      output: [
        {
          file: dump(`utils/${dir}/index.js`),
          format: 'cjs',
        },
        {
          file: dump(`utils/${dir}/index.mjs`),
          format: 'esm',
        },
      ],
      plugins: [
        ts_plugin,
        json(),
        resolve(),
        commonjs(),
        pack(`utils/${dir}`),
        types(`utils/${dir}/index.d.ts`, `../../types/utils/${dir}/index`),
      ],
    })),

  // IIFE (utils deep)
  ...fs
    .readdirSync('src/utils')
    .filter(
      (dir) =>
        dir !== 'algorithm' && fs.statSync(`src/utils/${dir}`).isDirectory()
    )
    .map((dir) => ({
      input: `src/utils/${dir}/index.ts`,
      output: [
        {
          file: dump(`utils/${dir}/index.iife.js`),
          format: 'iife',
          name: camelCase(dir),
          globals: {
            [camelCase(dir)]: camelCase(dir)
          }
        },
      ],
      plugins: [
        ts_plugin,
        commonjs(),
        resolve({ browser: true }),
        terser({
          ecma: '5',
          compress: true,
          mangle: true,
        })
      ],
    })),
];

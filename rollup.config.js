import cleanup from 'rollup-plugin-cleanup';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

const externals = {
  'react': 'React',
  'react-dom': 'ReactDOM',
}

const createConf = ({ min } = {}) => {
  const suffix = min ? '.min' : '';
  return {
    input: './src/index.ts',
    output: [
      {
        file: `./dist/mota-es${suffix}.js`,
        format: 'es'
      },
      {
        file: `./dist/mota-cjs${suffix}.js`,
        format: 'cjs'
      },
      {
        file: `./dist/mota-umd${suffix}.js`,
        format: 'umd',
        name: 'Mota',
        globals: externals,
      },
      {
        file: `./dist/mota-iife${suffix}.js`,
        format: 'iife',
        name: 'Mota',
        globals: externals,
      }
    ],
    external: Object.keys(externals),
    plugins: [
      resolve(),
      min && terser(),
      cleanup({ comments: 'none' }),
      typescript({
        useTsconfigDeclarationDir: true,
      }),
    ].filter(Boolean)
  };
};

export default [
  createConf(),
  createConf({ min: true }),
];
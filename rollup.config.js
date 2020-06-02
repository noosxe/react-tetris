import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';

export default {
  output: {
    format: 'esm',
  },
  plugins: [
    resolve(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    commonjs({
      namedExports: {
        // left-hand side can be an absolute path, a path
        // relative to the current directory, or the name
        // of a module in node_modules
        'react': [
          'createElement',
          'Component',
          'useMemo',
          'useEffect',
          'useLayoutEffect',
          'useContext',
          'useReducer',
          'useRef',
        ],
        'react-dom': ['render', 'unstable_batchedUpdates'],
        'react-is': ['isValidElementType', 'isContextConsumer'],
      },
    }),
  ],
};

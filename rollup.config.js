import json from 'rollup-plugin-json';
import progress from 'rollup-plugin-progress'


//转es5
import buble from 'rollup-plugin-buble';
import html from 'rollup-plugin-html'
//
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace'
import license from 'rollup-plugin-license'
import uglify from 'rollup-plugin-uglify'

import { version } from './package.json';

export default {
    input: 'src/main.js',
    output: {
        file: 'dist/index.js',
        format: 'umd'
    },
    moduleName: 'vsui',
    plugins: [
        license({
            banner: `ui-editor ${version}\n created at ${new Date()}`
        }),
        json(),
        progress({
            clearLine: false
        }),
        html({
            include: "**/*.html",
            htmlMinifierOptions: {
                collapseWhitespace: true,
                collapseBooleanAttributes: true,
                conservativeCollapse: true
            }
        }),
        replace({
            VERSION: version
        }),
        resolve({
            jsnext: true
        }),
        commonjs({
            include: 'node_modules/lrz/**'
        }),
        buble({
            include: '**/*.js'
        }),
        uglify()
    ]
};
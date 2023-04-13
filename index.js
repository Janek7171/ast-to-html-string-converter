import convertASTToString from './convertASTtoString.js';
import data from './przeprogramowani-example-ast.json' assert { type: 'json' };
const astObj = data.ast;
console.log(convertASTToString(astObj));

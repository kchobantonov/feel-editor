import { snippets, keywordCompletions, snippetCompletion } from 'lang-feel';

import { pathExpressionCompletion } from './pathExpression';
import { variableCompletion } from './variable';

/**
 * @typedef { import('../core').Variable } Variable
 * @typedef { import('@codemirror/autocomplete').CompletionSource } CompletionSource
 */

/**
 * @param { {
 *   variables?: Variable[],
 *   builtins?: Variable[]
 * } } options
 *
 * @return { CompletionSource[] }
 */
export function completions({ variables = [], builtins = [] }) {

  return [
    pathExpressionCompletion({ variables }),
    variableCompletion({ variables, builtins }),
    snippetCompletion(snippets.map(snippet => ({ ...snippet, boost: -1 }))),
    ...keywordCompletions
  ];
}
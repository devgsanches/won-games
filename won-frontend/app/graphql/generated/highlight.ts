import * as Types from './globalTypes';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type HighlightFragmentFragment = { __typename?: 'ComponentPageHighlight', title: string, subtitle: string, textDirection?: Types.Enum_Componentpagehighlight_Textdirection | null, textButton?: string | null };

export const HighlightFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HighlightFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentPageHighlight"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"textDirection"}},{"kind":"Field","name":{"kind":"Name","value":"textButton"}}]}}]} as unknown as DocumentNode<HighlightFragmentFragment, unknown>;
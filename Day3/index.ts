import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import product from './product'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, blockContentType, categoryType, postType, authorType],
}
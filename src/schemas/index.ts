import { SchemaTypeDefinition } from 'sanity'

import blockContent from './blockContent'
import {heroType} from './heroType'
import pageType from './pageType'
import post from './post'

export const schemaTypes = [post, blockContent, pageType, heroType]
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, blockContent, pageType, heroType],
}

import type {Item} from '../models/item.ts'

export interface State {
  artifact: Item[]
  common: Item[]
  legendary: Item[]
  none: Item[]
  unknown: Item[]
  rare: Item[]
  veryRare: Item[]
  uncommon: Item[]
}
export interface ItemsState {
  artifact: Item[]
  common: Item[]
  legendary: Item[]
  none: Item[]
  unknown: Item[]
  rare: Item[]
  veryRare: Item[]
  uncommon: Item[]
}

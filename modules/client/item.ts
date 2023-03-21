import type Firebase from 'firebase/firestore'
type EpochTimestamp = number

export type Item = {
  name: string;
  quantity?: string;
  type: 'recurrent' | 'one-time';
}

export type Section = {
  name: string;
}

export type ShoppingList = {
  created: EpochTimestamp;
  list: List[]
}

type List = {
  section: string;
  items: ListItem[];
}

type ListItem = {
  name: string;
  quantity?: string;
}
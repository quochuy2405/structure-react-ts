interface KeyNameTree {
  name: string
  key: string
}
interface TreeView {
  link: string
  sizeItem: number
  treeKey: string
  titleTree?: string
  nameTree?: string
  itemLinks?: Array<KeyNameTree>
  icon?: React.ReactElement
  body?: React.ReactElement
}
interface TreeItem {
  link: string
  itemKey: string
  treeItemName?: string
}
interface TreeItemSwitch {
  parentURL: string
  opt: string
  body?: React.ReactElement
}
export type { TreeView, TreeItem, KeyNameTree, TreeItemSwitch }

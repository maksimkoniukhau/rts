import {TreeNode} from '../../src';
import {Option, options, OptionTreeNode} from './data';

export interface RandomTreeNode extends TreeNode {
  id?: string;
  name?: string;
  description?: string;
  customString?: string;
}

const mapOptionsToTreeNodes = (
  opts: Option[], selected?: boolean, expanded?: boolean, disabled?: boolean
): OptionTreeNode[] => {
  return opts.map(option => {
    const treeNode: OptionTreeNode = {
      option,
      label: option.name,
      selected: selected
        && (option.id === 6 || option.id === 7 || option.id === 3 || option.id === 18 || option.id === 23 || option.id === 28 || option.id === 29 || option.id === 41),
      expanded: expanded
        && (option.id === 1 || option.id === 2 || option.id === 11 || option.id === 12 || option.id === 40),
      disabled: disabled
        && (option.id === 2 || option.id === 7 || option.id === 18 || option.id === 34 || option.id === 35 || option.id === 40)
    };
    if (option.children.length) {
      treeNode.children = mapOptionsToTreeNodes(option.children, selected, expanded, disabled);
    }
    return treeNode;
  });
};

export const getTreeNodeData = (selected?: boolean, expanded?: boolean, disabled?: boolean): OptionTreeNode[] => {
  return mapOptionsToTreeNodes(options, selected, expanded, disabled);
};

const randomString = (length: number): string => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789 ';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
};

const generateData = (amount: number, deep: string): RandomTreeNode[] => {
  let nextAmount = amount > 10 ? 50 : amount;
  switch (nextAmount) {
    case 50:
      nextAmount = 10;
      break;
    case 10:
      nextAmount = 5;
      break;
    case 5:
      nextAmount = 4;
      break;
    case 4:
      nextAmount = 3;
      break;
    case 3:
      nextAmount = 2;
      break;
    default:
      nextAmount = 0;
  }
  const res: RandomTreeNode[] = [];
  for (let i = 0; i < amount; i++) {
    const id = amount > 10 ? `${i}` : `${deep}.${i}`;
    res.push({
      id,
      description: randomString(7),
      customString: randomString(10),
      label: `${id} - ${randomString(20)}`,
      selected: id === '1' || id === '5.5.3' || id === '10.3',
      expanded: true,
      children: nextAmount === 0 ? [] : generateData(nextAmount, id)
    });
  }
  return res;
};

const countData = (data: TreeNode[]): number => {
  let count = 0;
  data.forEach(d => {
    count++;
    if (d?.children?.length) {
      count = count + countData(d.children);
    }
  });
  return count;
};

const generateBigTreeNodeData = (rootAmount: number): { data: RandomTreeNode[], amount: number } => {
  const data = generateData(rootAmount, '0');
  return {data, amount: countData(data)};
};

export const bigTreeNodeData30: { data: RandomTreeNode[], amount: number } = generateBigTreeNodeData(30);
export const bigTreeNodeData50: { data: RandomTreeNode[], amount: number } = generateBigTreeNodeData(50);

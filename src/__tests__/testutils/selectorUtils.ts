export const getRootContainer = (container: HTMLElement): HTMLElement => {
  return container.querySelector('.rtms-tree-multi-select') as HTMLElement;
};

export const getField = (container: HTMLElement): HTMLElement => {
  return container.querySelector('.rtms-field') as HTMLElement;
};

export const getFieldInput = (container: HTMLElement): HTMLElement => {
  return getField(container).querySelector('.rtms-input') as HTMLElement;
};

export const getDropdownInput = (container: HTMLElement): HTMLElement => {
  return getDropdown(container).querySelector('.rtms-input') as HTMLElement;
};

export const getHiddenInput = (container: HTMLElement): HTMLElement => {
  return container.querySelector('.rtms-input-hidden') as HTMLElement;
};

export const getDropdown = (container: HTMLElement): HTMLElement => {
  return container.querySelector('.rtms-dropdown') as HTMLElement;
};

export const getListItems = (container: HTMLElement): HTMLElement[] => {
  return Array.from(getDropdown(container).querySelectorAll('.rtms-list-item')) as HTMLElement[];
};

export const getListItem = (container: HTMLElement, index: number): HTMLElement => {
  return getListItems(container)[index];
};

export interface TodoElement {
  id: string;
  text: string;
  done: boolean;
}

export interface TodoList {
  [index: number]: TodoElement;
}

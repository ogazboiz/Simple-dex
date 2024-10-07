export interface ILink {
  name: string;
  $isSelected: boolean;
}

export const TabLinks: ILink[] = [
  { name: "Swap", $isSelected: true },
  { name: "Limit", $isSelected: false },
  { name: "Send", $isSelected: false },
  { name: "Buy", $isSelected: false },
];

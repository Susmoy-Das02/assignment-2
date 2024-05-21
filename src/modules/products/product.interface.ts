export type SVariant = {
  type: string;
  value: string;
};

export type SInventory = {
  quantity: number;
  inStock: boolean;
};

export type SProduct = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: SVariant[];
  inventory: SInventory;
};

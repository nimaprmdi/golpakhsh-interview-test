interface ICheckout {
  email: string;
  region: string;
  firstName: string;
  lastName: string;
  company?: string;
  address: string;
  apartment?: string;
  postalCode: string;
  city: string;
  phone: string;
  saveInfo: boolean;
}

interface IShipping {
  expectedDate: string;
  guaranteed: string;
}

export type { ICheckout, IShipping };

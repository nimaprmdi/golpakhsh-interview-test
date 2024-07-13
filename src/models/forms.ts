interface Checkout {
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

interface Shipping {
  expectedDate: string;
  guaranteed: string;
}

export type { Checkout, Shipping };

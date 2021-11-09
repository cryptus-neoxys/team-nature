export interface Donation {
  id?: number;
  count: number;
  displayName: string;
  email: string;
  mobile?: string;
  team?: string;
  message?: string;
  createdAt?: string;
}

export type DonationQueryRes = {
  donations: Donation[];
};

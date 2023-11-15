import { customers } from '@/app/lib/placeholder-data';
import CustomersTable from '@/app/ui/customers/table';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customers',
};

export default function Page() {   
    <CustomersTable customers={[]} />
  }
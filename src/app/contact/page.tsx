import { Suspense } from 'react';
import ContactClient from './page.client';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function ContactPage() {
  return (
    <Suspense fallback={<div />}>
      <ContactClient />
    </Suspense>
  );
}

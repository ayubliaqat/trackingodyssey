import { notFound } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import TrackForm from '@/components/TrackForm';

interface Params {
  slug: string;
}

export default async function CourierDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;

  if (!slug) return notFound();

  const { data: courier, error } = await supabase
    .from('couriers')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error || !courier) return notFound();

  const { data: allCouriers } = await supabase.from('couriers').select('name, slug');

  const otherCouriers = allCouriers?.filter(c => c.slug !== slug) || [];
  const randomOtherCourier = otherCouriers.length
    ? otherCouriers[Math.floor(Math.random() * otherCouriers.length)]
    : null;

  return (
    <main className="px-4 sm:px-6 py-10 bg-white min-h-screen max-w-5xl mx-auto">
      {/* Page Header */}
      <header className="flex flex-col items-center mb-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#1e3d59] mb-4">
          {courier.name} Tracking
        </h1>
        <p className="text-base sm:text-lg text-gray-700">
          Enter your tracking number to find your parcel in real-time.
        </p>
      </header>

      {/* Tracking Form Section */}
      <section aria-labelledby="tracking-form" className="text-center mb-10">
        <TrackForm slug={courier.slug} />
      </section>

      {/* Website & Check Also Section */}
      <section className="bg-gray-100 rounded-lg p-4 mb-10 text-sm sm:text-base" aria-label="Courier links">
        {courier.website && (
          <p className="mb-2 text-gray-700 break-words">
            <strong>Visit Official Website: </strong>
            <a
              href={courier.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline break-words"
            >
              {courier.website}
            </a>
          </p>
        )}

        {randomOtherCourier && (
          <p className="text-gray-700">
            <strong>Check Also: </strong>
            <Link href={`/couriers/${randomOtherCourier.slug}`} className="text-blue-600 underline">
              {randomOtherCourier.name}
            </Link>
          </p>
        )}
      </section>

      {/* Contact Information Table */}
      <section aria-labelledby="contact-info" className="mb-12 overflow-x-auto">
        <h2 id="contact-info" className="text-lg sm:text-xl font-semibold mb-4 text-[#1e3d59]">
          Contact Information
        </h2>
        <table className="min-w-full border border-gray-300 text-sm">
          <tbody>
            <tr className="border-b">
              <th scope="row" className="font-medium px-4 py-2 bg-gray-50 text-left">City</th>
              <td className="px-4 py-2">{courier.city || 'N/A'}</td>
            </tr>
            <tr className="border-b">
              <th scope="row" className="font-medium px-4 py-2 bg-gray-50 text-left">Address</th>
              <td className="px-4 py-2">{courier.address || 'N/A'}</td>
            </tr>
            <tr className="border-b">
              <th scope="row" className="font-medium px-4 py-2 bg-gray-50 text-left">Phone Numbers</th>
              <td className="px-4 py-2 break-words">
                {courier.phone_numbers?.length ? courier.phone_numbers.join(', ') : 'N/A'}
              </td>
            </tr>
            <tr>
              <th scope="row" className="font-medium px-4 py-2 bg-gray-50 text-left">Emails</th>
              <td className="px-4 py-2 break-words">
                {courier.emails?.length ? courier.emails.join(', ') : 'N/A'}
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Other Couriers Links */}
      <section aria-labelledby="other-couriers" className="pt-8 border-t border-gray-200">
        <h2 id="other-couriers" className="text-lg sm:text-xl font-semibold mb-4 text-[#1e3d59] text-center">
          Explore Other Couriers
        </h2>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {allCouriers?.map(c => (
            <Link
              key={c.slug}
              href={`/couriers/${c.slug}`}
              className="px-3 py-1 bg-gray-100 rounded-full text-sm hover:bg-gray-200 transition text-center"
            >
              {c.name}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

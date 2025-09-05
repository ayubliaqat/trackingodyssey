import CouriersList from "@/components/CourierList";// import from components

export const metadata = {
  title: "All Couriers | Track Your Shipments",
  description:
    "Browse and track shipments with multiple courier partners in one place.",
};

export default function CouriersPage() {
  return <CouriersList />;
}

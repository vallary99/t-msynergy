import { ServicePage, serviceMetadata } from "@/components/ServicePage";

export const metadata = serviceMetadata("plant-automation");

export default function Page() {
  return <ServicePage slug="plant-automation" />;
}

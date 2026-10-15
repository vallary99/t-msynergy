import { ServicePage, serviceMetadata } from "@/components/ServicePage";

export const metadata = serviceMetadata("power-distribution");

export default function Page() {
  return <ServicePage slug="power-distribution" />;
}

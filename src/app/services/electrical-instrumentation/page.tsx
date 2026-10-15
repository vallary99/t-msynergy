import { ServicePage, serviceMetadata } from "@/components/ServicePage";

export const metadata = serviceMetadata("electrical-instrumentation");

export default function Page() {
  return <ServicePage slug="electrical-instrumentation" />;
}

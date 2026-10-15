import { ServicePage, serviceMetadata } from "@/components/ServicePage";

export const metadata = serviceMetadata("metering-testing-measurement");

export default function Page() {
  return <ServicePage slug="metering-testing-measurement" />;
}

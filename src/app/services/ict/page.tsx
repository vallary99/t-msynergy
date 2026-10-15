import { ServicePage, serviceMetadata } from "@/components/ServicePage";

export const metadata = serviceMetadata("ict");

export default function Page() {
  return <ServicePage slug="ict" />;
}

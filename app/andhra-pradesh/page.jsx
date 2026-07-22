import { redirect } from "next/navigation";

export const metadata = {
  title: "Andhra Pradesh Tour Packages",
  description: "Explore Andhra Pradesh tour packages.",
};

export default function AndhraPradeshPage() {
  redirect("/destinations?type=domestic");
}

import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Detailgames - Excellence in Details" },
    {
      name: "description",
      content: "Devil is in the details",
    },
  ];
}

export default function Home() {
  return <Welcome />;
}

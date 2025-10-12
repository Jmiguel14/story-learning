import { Suspense } from "react";
import SortWordActivity from "../../../components/sort-word-activity";

export default function SortWordActivityPage() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <SortWordActivity />
    </Suspense>
  );
}

import { Suspense } from "react";
import AutocompleteActivity from "../../../components/autocomplete-activity";

export default function AutocompletePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AutocompleteActivity />
    </Suspense>
  );
}

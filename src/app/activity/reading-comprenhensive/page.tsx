import { Suspense } from "react";
import ReadingComprenhensiveActivity from "../../../components/reading-comprenhensive-activity";

export default function ReadingComprenhensiveActivityPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ReadingComprenhensiveActivity />
    </Suspense>
  );
}
import clsx from "clsx";
import { Input as InputUi } from "@headlessui/react";
export default function Input({
  className,
  ...props
}: React.ComponentProps<"input">) {
  return (
    <InputUi
      className={clsx(
        "mt-3 block rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white",
        "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25"
      )}
      {...props}
    />
  );
}

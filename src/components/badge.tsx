import { forwardRef } from "react"

export const Badge = forwardRef<HTMLSpanElement, { children: React.ReactNode }>(({children}, ref) => {
  return <span ref={ref} className="inline-flex items-center rounded-md bg-blue-400/10 px-2 py-1 text-sm font-medium text-blue-400 inset-ring inset-ring-blue-400/30">{children}</span>
})
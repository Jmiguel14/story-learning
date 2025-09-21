export default function Badge({ children }: { children: React.ReactNode }) {
  return <span className="inline-flex items-center rounded-md bg-blue-400/10 px-2 py-1 text-xs font-medium text-blue-400 inset-ring inset-ring-blue-400/30">{children}</span>
}
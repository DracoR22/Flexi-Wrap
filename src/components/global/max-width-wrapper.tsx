import { cn } from "@/lib/utils"

interface Props {
    className?: string
    children: React.ReactNode
}

const MaxWidthWrapper = ({ children, className }: Props) => {
  return (
    <div className={cn('h-full mx-auto w-full max-w-screen-xl px-2.5 md:px-16', className)}>
       {children}
    </div>
  )
}

export default MaxWidthWrapper

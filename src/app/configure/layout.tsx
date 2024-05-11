import MaxWidthWrapper from "@/components/global/max-width-wrapper"
import { PropsWithChildren } from "react"

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <MaxWidthWrapper className="flex-1 flex flex-col">
       {children}
    </MaxWidthWrapper>
  )
}

export default Layout

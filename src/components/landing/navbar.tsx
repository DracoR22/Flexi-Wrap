import Image from "next/image"
import { Button } from "../ui/button"
import Link from "next/link"
import { MotionDiv } from "../motion"
import { RocketIcon, SparklesIcon } from "lucide-react"
import { GithubIcon } from "../icons/github-icon"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"


const Navbar = async () => {

  const { getUser } = getKindeServerSession()

  const user = await getUser()
  
  const isAdmin = user?.email === process.env.ADMIN_EMAIL

  return (
    <header className="relative flex justify-center">
    <div className="z-1 flex w-full items-center justify-between gap-2 overflow-hidden px-2 sm:px-8">
      <div className="flex flex-1 items-center justify-start gap-1 max-sm:hidden">
        <Button variant="secondary" size="icon" asChild >
          <a href="https://github.com/DracoR22/Rocket" target="_blank" aria-label="GitHub repo"  title="Github repo">
          <span className="size-10">
          <GithubIcon/>
          </span>
          </a>
        </Button>
        {/* <Button variant="ghost" size="icon" className="text-2xl" asChild>
          <ThemeToggle idPrefix="web" />
        </Button> */}
      </div>
      <MotionDiv
        initial={{ y: '-100%' }}
        animate={{ y: '0%' }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <Link
          href="/"
          className="group flex h-[100px] w-[100px] flex-col items-center gap-1 rounded-b-3xl bg-secondary/30 px-[6px] pt-2 text-2xl transition-colors hover:bg-primary/5 sm:size-32 sm:pt-4"
        >
          <Image src={'/flexiwrapbg.png'} alt="logo" height={500} width={500} className="w-[6.5em] " />
        </Link>
      </MotionDiv>
      <div className="flex flex-1 items-center justify-end space-x-3">
                 {user ? (
                   <>
                   <Button asChild variant="ghost" className="font-medium p-4 text-lg">
                    <Link href={'/api/auth/logout'}>
                      Sign out
                    </Link>
                  </Button>
                   {isAdmin && <Button asChild variant="ghost" className="font-medium p-4 text-lg">
                    <Link href={'/api/auth/logout'}>
                     Dashboard
                    </Link>
                  </Button>}
                   <Button asChild variant="default" className="font-medium p-4 text-lg">
                    <Link href={'/configure/upload'}>
                      Create case <RocketIcon className="ml-2"/>
                    </Link>
                  </Button>
                   </>
                 ): (
                  <>
                   <Button asChild variant="ghost" className="font-medium p-4 text-lg">
                    <Link href={'/api/auth/register'}>
                      Sign up
                    </Link>
                   </Button>
                   <Button asChild variant="default" className="font-medium p-4 text-lg">
                     <Link href={'/api/auth/login'}>
                        Login
                     </Link>
                   </Button>
                  </>
                 )}
      </div>
    </div>
    <div className="fixed bottom-4 right-4 z-50 sm:hidden">
      <Button variant="ghost" size="icon" className="size-12 border border-solid border-border bg-card/40 text-2xl backdrop-blur-lg" asChild>
        {/* <ThemeToggle idPrefix="mobile" /> */}
      </Button>
    </div>
  </header>
  )
}

export default Navbar

'use client'

import { getAuthStatus } from "@/actions/auth-actions"
import { useQuery } from "@tanstack/react-query"
import { Loader2Icon } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

// This page will create a user in our db after we log in and will redirect
// us to the summary page if we have a product in our local storage

const CallbackPage = () => {

    const [configId, setConfigId] = useState<string | null>(null)

    const router = useRouter()

    useEffect(() => {
        const configurationId = localStorage.getItem('configurationId')
        if (configurationId) setConfigId(configurationId)
    }, [])

    const { data } = useQuery({
        queryKey: ['auth-callback'],
        queryFn: async () => await getAuthStatus(),
        retry: true,
        retryDelay: 500
    })

    if (data?.success) {
        if (configId) {
            localStorage.removeItem('configurationId')
            router.push(`/configure/preview?id=${configId}`)
        } else {
            router.push('/')
        }
    }

  return (
    <div className="w-full mt-24 flex justify-center">
       <div className="flex flex-col items-center gap-2">
          <Loader2Icon className="h-8 w-8 animate-spin text-zinc-500"/>
          <h3 className="font-semibold text-xl">
              Logging you in...
          </h3>
          <p>You will be redirected automatically.</p>
       </div>
    </div>
  )
}

export default CallbackPage

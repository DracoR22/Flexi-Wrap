'use client'

import { useRef } from "react"
import MaxWidthWrapper from "../global/max-width-wrapper"
import { useInView } from "framer-motion"

const PHONES = [
    '/testimonials/1.jpg',
    '/testimonials/2.jpg',
    '/testimonials/3.jpg',
    '/testimonials/4.jpg',
    '/testimonials/5.jpg',
    '/testimonials/6.jpg'
]

function splitArray<T>(array: Array<T>, numParts: number) {

}

const ReviewGrid = () => {
    const containerRef = useRef<HTMLDivElement | null>(null)

    const isInView = useInView(containerRef, { once: true, amount: 0.4 })

    const columns = splitArray(PHONES, 3)

    return (
        <div ref={containerRef} className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3">

        </div>
    )
}

const Reviews = () => {
  return (
    <MaxWidthWrapper className="relative max-w-5xl">
        <img aria-hidden="true" src="/what-people-are-buying.png" alt="" />
        <ReviewGrid/>
    </MaxWidthWrapper>
  )
}

export default Reviews
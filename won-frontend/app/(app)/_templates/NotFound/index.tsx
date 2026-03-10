import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import Link from 'next/link'

export function NotFoundTemplate() {
  return (
    <div className="bg-main-bg h-screen px-6">
      <div className="flex flex-col items-center justify-center h-full w-full relative">
        <div className="w-full h-full flex flex-col items-center justify-center">
          <div className="absolute top-0 lg:-top-25 animate-float-up">
            <DotLottieReact
              src="/animations/UFO animation.json"
              loop
              autoplay
              className="w-130 h-130 md:w-96 md:h-96 lg:w-[950px] lg:h-[950px]"
            />
          </div>
          <div className="flex flex-col items-center gap-4 absolute lg:top-100">
            <div className="flex flex-col items-center gap-2">
              <p className="text-8xl font-bold text-primary">404</p>
              <p className="text-4xl text-white font-bold capitalize">
                Page Not Found
              </p>
            </div>
            <p className="text-lg text-center">
              The page you are looking for does not exist.
            </p>
            <Link
              href="/"
              className="text-blue-500 relative group hover:text-blue-600 transition-all duration-400 ease-out text-center"
            >
              Go back to the home page
              <div className="w-full flex justify-center">
                <span className="absolute -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-400 ease-out group-hover:w-40" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

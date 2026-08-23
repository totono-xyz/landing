import type { ReactNode } from 'react'
import { Footer } from '@/components/footer'
import { TopNavBar } from '@/components/top-nav-bar'

type PageProps = {
  label: string
  title: string
  children: ReactNode
}

function Page({ label, title, children }: PageProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <TopNavBar />

      <main className="flex-grow pt-32">
        <article className="mx-auto mt-20 mb-40 max-w-3xl px-12">
          <span className="text-secondary mb-4 block font-sans text-[0.6875rem] font-bold tracking-[0.2em] uppercase">
            {label}
          </span>
          <h1 className="font-display text-primary mb-12 text-4xl leading-[1.1] font-extrabold tracking-tight md:text-6xl">
            {title}
          </h1>
          <div className="text-on-surface-variant [&_h2]:font-display [&_h2]:text-primary [&_a]:text-primary space-y-6 font-sans text-lg leading-relaxed [&_a]:underline [&_a]:underline-offset-4 [&_h2]:mt-12 [&_h2]:text-2xl [&_h2]:font-bold [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
            {children}
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}

export default Page

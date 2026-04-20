type HeroProps = {
  badge?: string
  title: string
  highlightText: string
  description: string
  avatarSrc: string
  avatarAlt: string
}

export default function Hero({
  badge = 'React + TypeScript + Tailwind CSS',
  title,
  highlightText,
  description,
  avatarSrc,
  avatarAlt,
}: HeroProps) {
  return (
    <section id="home" className="py-16 sm:py-24">
      <div className="grid items-center gap-10 sm:grid-cols-[1fr_auto]">
        <div>
          <p className="text-sm font-medium text-white/70">{badge}</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {title}{' '}
            <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-sky-400 bg-clip-text text-transparent">
              {highlightText}
            </span>
            .
          </h1>
          <p className="mt-5 max-w-prose text-white/80">{description}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-black hover:bg-white/90"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-white/15 px-5 py-2 text-sm font-semibold text-white hover:border-white/25"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Lazy-load avatar image for better initial page performance. */}
        <img
          src={avatarSrc}
          width={170}
          height={179}
          loading="lazy"
          className="mx-auto rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_20px_80px_rgba(0,0,0,0.55)]"
          alt={avatarAlt}
        />
      </div>
    </section>
  )
}

import heroImg from './assets/hero.png'
import Hero from './components/Hero'
import Projects from './components/Projects'

export default function App() {
  return (
    <div className="min-h-dvh">
      <header className="sticky top-0 z-10 border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <a
            href="#home"
            className="font-semibold tracking-tight text-white"
            aria-label="Go to top"
          >
            Shuyi
          </a>
          <div className="flex items-center gap-4 text-sm text-white/80">
            <a className="hover:text-white" href="#about">
              About
            </a>
            <a className="hover:text-white" href="#projects">
              Projects
            </a>
            <a className="hover:text-white" href="#contact">
              Contact
            </a>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-4">
        <Hero
          title="A simple, modern"
          highlightText="personal portfolio"
          description="这里会放你的简介、技能、项目作品和联系方式。页面已默认深色主题并启用平滑滚动。"
          avatarSrc={heroImg}
          avatarAlt="Avatar"
        />

        <section id="about" className="scroll-mt-20 border-t border-white/10 py-16">
          <h2 className="text-2xl font-semibold tracking-tight text-white">
            About me
          </h2>
          <p className="mt-4 max-w-prose text-white/80">
            在这里写详细介绍与技能列表（后续会按 `TECH_DESIGN.md` 拆分为可复用组件）。
          </p>
        </section>

        <Projects />

        <section
          id="contact"
          className="scroll-mt-20 border-t border-white/10 py-16"
        >
          <h2 className="text-2xl font-semibold tracking-tight text-white">
            Contact
          </h2>
          <div className="mt-5 flex flex-wrap gap-3 text-sm">
            <a
              className="rounded-full border border-white/15 px-4 py-2 text-white hover:border-white/25"
              href="mailto:your@email.com"
            >
              Email
            </a>
            <a
              className="rounded-full border border-white/15 px-4 py-2 text-white hover:border-white/25"
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Shuyi. All rights reserved.
      </footer>
    </div>
  )
}

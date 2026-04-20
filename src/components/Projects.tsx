type Project = {
  title: string
  description: string
  screenshot: string
  techStack: string[]
}

type ProjectsProps = {
  projects?: Project[]
}

const defaultProjects: Project[] = [
  {
    title: 'Portfolio Website',
    description:
      '个人作品集首页，突出个人简介、项目展示和联系方式，支持深色主题与响应式布局。',
    screenshot:
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=80',
    techStack: ['React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'Task Management Dashboard',
    description:
      '任务看板应用，支持任务分类、进度追踪和快速筛选，提升日常项目管理效率。',
    screenshot:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    techStack: ['React', 'Vite', 'Node.js'],
  },
  {
    title: 'E-commerce Landing Page',
    description:
      '电商营销落地页，聚焦转化率优化，包含模块化内容区块和移动端优先设计。',
    screenshot:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80',
    techStack: ['React', 'Tailwind CSS', 'Figma'],
  },
]

export default function Projects({ projects = defaultProjects }: ProjectsProps) {
  return (
    <section id="projects" className="scroll-mt-20 border-t border-white/10 py-16">
      <h2 className="text-2xl font-semibold tracking-tight text-white">Projects</h2>
      <p className="mt-4 max-w-prose text-white/80">
        这里展示精选项目，每张卡片包含项目截图、介绍与核心技术栈。
      </p>

      {/* Responsive project grid keeps cards readable on mobile and desktop. */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_12px_40px_rgba(0,0,0,0.45)]"
          >
            {/* Lazy-load screenshots to improve first contentful paint. */}
            <img
              src={project.screenshot}
              alt={`${project.title} screenshot`}
              loading="lazy"
              className="h-48 w-full object-cover"
            />

            <div className="p-5">
              <h3 className="text-lg font-semibold text-white">{project.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/80">{project.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={`${project.title}-${tech}`}
                    className="rounded-full border border-fuchsia-400/35 bg-gradient-to-r from-fuchsia-400/15 to-sky-400/15 px-3 py-1 text-xs font-medium text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

import { prisma } from '@/lib';

export default async function Home() {
  const projects = await prisma.project.findMany();

  return (
    <main>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.title}</li>
        ))}
      </ul>
    </main>
  );
}

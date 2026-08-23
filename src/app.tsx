import { notFound, routes } from '@/routes'

export default function App({ path }: { path: string }) {
  const { Component } = routes[path] ?? notFound
  return <Component />
}

import { Outlet } from 'react-router'

export default function Component() {
  return (
    <div className="prose container mx-auto my-8 max-w-3xl">
      <Outlet />
    </div>
  )
}

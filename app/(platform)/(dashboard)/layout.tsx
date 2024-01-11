import { Navbar } from './_components/navbar'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar></Navbar>
      {children}
    </div>
  )
}

export default DashboardLayout

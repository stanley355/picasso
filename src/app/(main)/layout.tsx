import MainHeader from "./_header"

type TMainLayout = {
  children: React.ReactNode
}

const MainLayout = ({ children }: TMainLayout) => {
  return (
    <div className='h-screen w-full overflow-hidden p-2 bg-foreground flex flex-col md:p-4'>
      <MainHeader />
      <div className="overflow-y-auto bg-background rounded-lg flex-1">
        {children}
      </div>
    </div >
  )
}

export default MainLayout 
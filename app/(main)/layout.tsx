import Header from '@/components/header'
import React, { ReactNode } from 'react'

type Props = {
    children:ReactNode
}

const layout = ({children}: Props) => {
  return (
    <div>
        <Header/>
        <main className='min-h-[calc(100vh-70px)]'>
        {children}
        </main>
       
    </div>
  )
}

export default layout
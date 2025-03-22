import { Wallet } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Logo() {
  return (
    <Link href='/' className='flex items-center gap-2 p-4 '>
        <Wallet className='stroke h-10 w-10 stroke-emerald-500 stroke-[2]' />
        <p className='bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-3xl font-bold leading-tight tracking-tighter text-transparent'>FinanceTracker</p>
    </Link>
  )
}

export function LogoMobile() {
  return (
    <Link href='/' className='flex items-center gap-2 p-4 '>
        <p className='bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-3xl font-bold leading-tight tracking-tighter text-transparent'>FinanceTracker</p>
    </Link>
  )
}

export default Logo
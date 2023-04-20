import useCurrentUser from '@/hooks/useCurrentUser'
import { getSession } from 'next-auth/react';
import React from 'react'
import { NextPageContext } from 'next';
import { useRouter } from 'next/router';

export async function getServerSideProps(context: NextPageContext) {
    const session = await getSession(context);
  
    if (!session) {
      return {
        redirect: {
          destination: '/auth',
          permanent: false,
        }
      }
    }
  
    return {
      props: {}
    }
  }

const profiles = () => {

    const router = useRouter();
    const {data: user} = useCurrentUser();

  return (
    <div onClick={()=> router.push("/")} className="group flex-row w-44 mx-auto">
        <div className="w-44 h-44 rounded-md flex items-center justify-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden">
          <img draggable={false} className="w-max h-max object-contain" src="/images/default-blue.png" alt="Profile" />
        </div>
      <div className="mt-4 text-gray-400 text-2xl text-center group-hover:text-white">{user?.name}</div>
   </div>
  )
}

export default profiles
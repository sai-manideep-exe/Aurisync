import React from 'react'
import useAuthUser from '../hooks/useAuthUser'
import { Link, useLocation } from 'react-router'
import { BellIcon, HomeIcon, UsersIcon } from 'lucide-react'

const Sidebar = () => {
  const {authUser} = useAuthUser()
  const location = useLocation()
  const currentPath = location.pathname;

  

  return (
    <aside className="w-64 bg-base-200 border-r border-base-300 hidden lg:flex flex-col h-screen sticky top-0">
        <div className="p-1 border-b border-base-500">
            <Link to="/" className="flex items-center gap-0.5">
                <img src="./Logo.png" className="w-20 h-25 rounded-full"/>
                <span className="text-3xl font-bold font-roboto bg-clip-text text-transparent bg-gradient-to-r pb-2 from-primary to-secondary tracking-wider">
                    Aurisync
                </span>
            </Link>
        </div>

        <nav className="flex-1 p-4 space-y-1">
            <Link
                to="/"
                className={`btn btn-ghost justify-start w-full gap-3 rounded-full px-3 normal-case ${
                    currentPath === "/" ? "btn-active" : ""
                }`}
                >
                <HomeIcon className="size-5 text-base-content opacity-70" />
                <span>Home</span>
            </Link>

            

            <Link
                to="/notifications"
                className={`btn btn-ghost justify-start rounded-full w-full gap-3 px-3 normal-case ${
                    currentPath === "/notifications" ? "btn-active" : ""
                }`}
                >
                <BellIcon className="size-5 text-base-content opacity-70" />
                <span>Notifications</span>
            </Link>
      
        </nav>

        {/*USER PROFILE SECTION*/}
        <div className="p-4 border-t border-base-300 mt-auto">
             <div className="flex items-center gap-3">
                <div className="avatar">
                    <div className="w-10 rounded-full">
                    <img src={authUser?.profilePic} alt="User Avatar" />
                    </div>
                </div>
                <div className="flex-1">
                    <p className="font-semibold text-sm">{authUser?.fullName}</p>
                    <p className="text-xs text-success flex items-center gap-1">
                    <span className="size-2 rounded-full bg-success inline-block" />
                    Online
                    </p>
                </div>
            </div>
        </div>
    </aside>
  )
}

export default Sidebar
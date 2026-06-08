<template>
    <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl"> <RouterLink to="/">MySpace</RouterLink></a>
  </div>
  <div className="flex gap-2">
    <input type="checkbox" value="synthwave" className="toggle theme-controller" />
    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    <div className="dropdown dropdown-end">
        
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="/public/mario.jpg" />
        </div>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><RouterLink className="justify-between" to="/profile">Profile</RouterLink>
            <span className="badge">New</span>
          </li>
        <li><RouterLink to="/about">A Propos</RouterLink></li>
        <li><RouterLink to="/contact">Contact</RouterLink></li>
      </ul>
    </div>
  </div>
</div>
</template>


      
      
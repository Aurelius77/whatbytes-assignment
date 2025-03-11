import dashboard from "../../public/dashboard.png"
import skill from "../../public/skill.png"
import internship from "../../public/internship.png"
import Image from "next/image"
import profile from "../../public/profile.png"

export default function Sidebar({ isOpen }) {
  return (
    <aside
      className={`fixed inset-y-0 left-0 z-50 w-64 bg-white transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:relative md:translate-x-0`}
    >
      <nav className="flex flex-col p-4 items-center border-r border-gray-200 h-full">
        <div className="flex md:hidden items-center border border-gray-300 rounded-md shadow mb-5">
          <Image
            src={profile}
            width="50"
            height="50"
            alt="img"
            className="rounded-full w-1/6 m-1"
          />
          <p className="m-1 font-bold">Rahil Siddique</p>
        </div>

        <div className="m-5 flex items-center">
          <Image src={dashboard} alt="" />
          <p className="m-2">Dashboard</p>
        </div>

        <div className="m-5 flex items-center bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
          <Image src={skill} alt="" />
          <p className="m-2 text-blue-300">Skill Test</p>
        </div>

        <div className="m-5 flex items-center">
          <Image src={internship} alt="" />
          <p className="m-2">Internship</p>
        </div>
      </nav>
    </aside>
  )
}


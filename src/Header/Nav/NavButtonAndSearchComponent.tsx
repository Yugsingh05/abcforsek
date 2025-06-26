import CustomButton from "@/components/CustomComponent/CustomButton"
import { SearchIcon } from "lucide-react"
import Link from "next/link"

export const NavButtonsAndSearchComponent = () => {
  return (
    <>
      <Link
        href="/search"
        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#040f4e] hover:bg-[#030c3c] transition"
      >
        <span className="sr-only">Search</span>
        <SearchIcon className="w-5 h-5 text-white" />
      </Link>
      <CustomButton
        buttonText="Anmeld Scalde"
        buttonLink="/search"
        backgroundColor="#040f4e"
        className="mt-0 py-2.5 text-sm"
      />
      <CustomButton
        buttonText="Min Side"
        buttonLink="/search"
        backgroundColor="#7f86e5"
        className="mt-0 py-2.5 text-sm"
      />
    </>
  )
}

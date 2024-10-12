import Link from "next/link"
import LanguageaiHeaderSelect from "./LanguageaiHeaderSelect"
import MainHeaderSelect from "./MainHeaderSelect"

const HeaderLeft = () => {
  return (
    <div className="flex items-center gap-1">
      <MainHeaderSelect />
      <LanguageaiHeaderSelect />
    </div>
  )
}

export default HeaderLeft
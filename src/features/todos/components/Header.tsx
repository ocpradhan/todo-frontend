import { PlusIcon, Search } from "lucide-react";
import Button from "../../../components/common/Button";
import SearchInput from "./SearchInput";

export default function Header() {
  return (
    <header className="min-w-0 border-green-300 border-2 grid grid-cols-1 md:grid-cols-[1fr_10rem] px-5 py-5">
      <div>
        <h3 className="">Today</h3>
        <p>Focus on what matters today</p>
      </div>

      <div className="flex justify-self-end items-center">
        <Button>
          <PlusIcon className="text-primary-100" size={14} /> Add Task
        </Button>
      </div>

      <SearchInput Icon={Search} />
    </header>
  );
}

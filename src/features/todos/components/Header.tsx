import { PlusIcon, Search } from "lucide-react";
import Button from "../../../components/common/Button";
import Input from "../../../components/common/Input";
import Modal from "../../../components/common/Modal";

export default function Header() {
  return (
    <header className="min-w-0 border-border border-b grid grid-cols-1 md:grid-cols-[1fr_auto]  px-5 py-5 gap-5">
      <div className="flex flex-col gap-1">
        <h3 className="font-semibold text-3xl text-heading">Today</h3>
        <p className="text-sm text-body">Focus on what matters today</p>
      </div>

      <div className="flex md:justify-self-end items-start row-start-3 md:row-start-1 md:col-start-2">
        <Button>
          <PlusIcon className="text-primary-100" size={14} /> Add Task
        </Button>
      </div>

      <Modal />

      <Input Icon={Search} placeholder="Search tasks..." className="w-96" />
    </header>
  );
}

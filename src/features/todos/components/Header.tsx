import { Calendar, Flag, PlusIcon, Search } from "lucide-react";
import Button from "../../../components/common/Button";
import Input from "../../../components/common/Input";
import Modal from "../../../components/common/Modal";
import { useState } from "react";

export default function Header() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleModalOpen = () => {
    setIsOpenModal(true);
  };

  return (
    <header className="min-w-0 border-border border-b grid grid-cols-1 md:grid-cols-[1fr_auto] px-5 py-5 gap-5">
      <div className="flex flex-col gap-1">
        <h3 className="font-semibold text-3xl text-heading">Today 2</h3>
        <p className="text-sm text-body">Focus on what matters today</p>
      </div>

      <div className="flex md:justify-self-end items-start row-start-3 md:row-start-1 md:col-start-2">
        <Button onClick={handleModalOpen}>
          <PlusIcon className="text-primary-100" size={14} /> Add Task
        </Button>
      </div>

      <Modal isOpen={isOpenModal} closeModal={setIsOpenModal}>
        <label htmlFor="taskTitle">Task Title</label>
        <Input
          type="text"
          id="taskTitle"
          name="taskTitle"
          placeholder="What needs to be done?"
        />

        <label htmlFor="description">
          Description <span>(Optional)</span>
        </label>
        <Input
          type="text"
          id="description"
          name="description"
          placeholder="Add more details..."
        />

        <div className="flex gap-5">
          <div>
            <label htmlFor="dueDate" className="flex gap-2">
              <span className="inline-flex items-center gap-4 font-semibold text-body">
                <Calendar size={15} />
              </span>
              Due Date
            </label>
            <Input
              name="dueDate"
              id="dueDate"
              placeholder="Add more details..."
              type="date"
            />
          </div>
          <div>
            <div className="flex gap-2 items-center">
              <span className="inline-flex items-center gap-4 font-semibold text-body">
                <Flag size={15} />
              </span>
              Priority
            </div>
            <input type="radio" name="priority" id="high" />
            <label htmlFor="high">High</label>
            <input type="radio" id="medium" name="priority" />
            <label htmlFor="medium">Medium</label>
            <input type="radio" id="low" name="priority" />
            <label htmlFor="low">Low</label>
          </div>
        </div>
      </Modal>

      <Input Icon={Search} placeholder="Search tasks..." className="w-96" />
    </header>
  );
}

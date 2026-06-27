import { useState } from "react";

import { Calendar, Flag, PlusIcon, Search } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Button from "../../ui/Button";
import Input from "../../ui/Input";
import RadioButton from "../../ui/RadioButton";
import Modal from "../../ui/Modal";
import { useLocation } from "react-router";
import { getHeaderContent } from "../../utils/getHeaderContent";

export default function Header() {
  const location = useLocation();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { title, subHeading } = getHeaderContent(location.pathname);

  const handleModalOpen = () => {
    setIsOpenModal(true);
  };

  return (
    <header className="min-w-0 border-border border-b grid grid-cols-1 md:grid-cols-[1fr_auto] px-5 py-5 gap-5">
      <div className="flex flex-col gap-1">
        <h3 className="font-semibold text-3xl text-heading">{title}</h3>
        <p className="text-sm text-body">{subHeading}</p>
      </div>

      <div className="flex md:justify-self-end items-start row-start-3 md:row-start-1 md:col-start-2">
        <Button onClick={handleModalOpen}>
          <PlusIcon className="text-primary-100" size={14} /> Add Task
        </Button>
      </div>

      <Modal isOpen={isOpenModal} closeModal={setIsOpenModal}>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <label htmlFor="taskTitle" className="text-heading">
              Task Title
            </label>
            <Input
              type="text"
              id="taskTitle"
              name="taskTitle"
              placeholder="What needs to be done?"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="description" className="text-heading">
              Description <span>(Optional)</span>
            </label>
            <Input
              type="text"
              id="description"
              name="description"
              placeholder="Add more details..."
            />
          </div>

          <div className="flex gap-5">
            <div className="flex flex-col gap-1">
              <label htmlFor="dueDate" className="flex gap-2 text-heading">
                <span className="inline-flex items-center gap-4 font-semibold text-body">
                  <Calendar size={15} />
                </span>
                Due Date
              </label>
              <DatePicker
                name="dueDate"
                id="dueDate"
                dateFormat="MM/dd/yyyy"
                selected={new Date()}
                className="w-full border outline-none! border-border rounded-lg px-2 h-8  focus:border-primary-600!
    focus:border! focus:ring-2! focus:ring-blue-500/50! transition duration-300 bg-page"
              />
            </div>
            <div>
              <div className="flex gap-1 items-center text-heading">
                <span className="inline-flex items-center gap-4 font-semibold text-body">
                  <Flag size={15} />
                </span>
                Priority
              </div>
              <div className="flex items-center justify-center gap-1">
                <RadioButton type="high" />
                <RadioButton type="medium" className="w-22!" />
                <RadioButton type="low" />
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Input Icon={Search} placeholder="Search tasks..." className="w-96" />
    </header>
  );
}

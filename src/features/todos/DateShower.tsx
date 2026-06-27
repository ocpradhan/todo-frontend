import { Calendar } from "lucide-react";
import { formatDate } from "../../utils/formatDate";

type DateShowerProps = {
  children: Date;
};

export default function DateShower({ children }: DateShowerProps) {
  const priorityColor: boolean = formatDate(children) === "Today";

  return (
    <span
      className={`inline-flex items-center gap-2 ${priorityColor ? "text-danger" : "text-body"} text-xs`}
    >
      <Calendar size={13} /> {formatDate(children)}
    </span>
  );
}

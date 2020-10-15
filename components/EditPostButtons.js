import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../utils/utils";
import Button from "./Button";

export default function EditPostButtons({ deleteFn, editFn }) {
  const buttons = [
    {
      icon: "edit",
      onClick: editFn,
    },
    {
      icon: "delete",
      onClick: deleteFn,
    },
  ];

  return (
    <div className="flex items-center w-40">
      {buttons.map(({ icon, onClick }) => {
        return (
          <Button spaced variant="terciary" onClick={onClick}>
            <FontAwesomeIcon icon={icons[icon]} />
          </Button>
        );
      })}
    </div>
  );
}

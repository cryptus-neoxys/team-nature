import { format } from "date-fns";

const dateFormat = (time?: string | number | Date) => {
  if (!time) {
    return;
  }

  return format(new Date(time), "PP");
};

export default dateFormat;

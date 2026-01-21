import { Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function EditableCell({ getValue, row, column, table }) {
  const initialValue = getValue();
  const [value, setValue] = useState(initialValue);
  const { updateData } = table.options.meta;
  const onBlur = () => updateData(row.index, column.id, value);
  useEffect(() => setValue(initialValue), [initialValue]);
  return (
    <Input
      onBlur={onBlur}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      variant="filled"
      size="sm"
      w="85%"
      overflow="hidden"
      textOverflow="ellipsis"
      whiteSpace="nowrap"
    />
  );
}

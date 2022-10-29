import { Accordion } from '@components';
import { Section } from '@models';

type DropdownItem = {
  id: number;
  label: string;
  value: string;
};

const dropdownItems: DropdownItem[] = Object.keys(Section).map(
  (item, index) => ({
    id: index,
    label: item,
    value: item,
  })
);

export const SectionAccordion = () => {
  const onSelectedItemsChange = () => {};
  return (
    <Accordion
      items={dropdownItems}
      onSelect={() => {}}
      header={"Section"}
      displayKey={"label"}
      itemIdKey={"id"}
    />
  );
};

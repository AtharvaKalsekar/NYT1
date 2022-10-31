import { Accordion } from '@components';
import { Section } from '@models';
import { AppDispatch, FiltersState, modifyFilters, RootState } from '@store';
import { useDispatch, useSelector } from 'react-redux';

type DropdownItem = {
  id: number;
  label: string;
  value: Section;
};

const dropdownItems: DropdownItem[] = Object.keys(Section).map(
  (item, index) => ({
    id: index,
    label: item,
    value: item as Section,
  })
);

export const SectionAccordion = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { appliedFilters } = useSelector<RootState, FiltersState>(
    (state) => state.filters
  );

  const onSelectedItemsChange = (selectedItem: DropdownItem) => {
    dispatch(modifyFilters(selectedItem.value));
  };

  return (
    <Accordion
      items={dropdownItems}
      onSelect={onSelectedItemsChange}
      header={"Section"}
      displayKey={"label"}
      itemIdKey={"id"}
    />
  );
};

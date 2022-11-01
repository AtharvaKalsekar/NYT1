import { Accordion, AccordionItem } from '@components';
import { Section } from '@models';
import { AppDispatch, FiltersState, modifyFilters, RootState } from '@store';
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const dropdownItems: AccordionItem[] = Object.keys(Section).map(
  (item, index) => ({
    id: item,
    label: item,
    value: item as Section,
  })
);

export const SectionAccordion = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { appliedFilters } = useSelector<RootState, FiltersState>(
    (state) => state.filters
  );

  const onSelectedItemsChange = (selectedItem: AccordionItem) => {
    dispatch(modifyFilters(selectedItem.value));
  };

  const selectedSections = useMemo<AccordionItem[]>(() => {
    return appliedFilters.map((section) => ({
      id: section,
      label: section,
      value: section,
    }));
  }, [appliedFilters]);

  return (
    <Accordion
      items={dropdownItems}
      alreadySelectedItems={selectedSections}
      onSelect={onSelectedItemsChange}
      header={"Section"}
      displayKey={"label"}
      itemIdKey={"id"}
    />
  );
};

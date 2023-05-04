
export function optionify<
  T extends Record<LabelKey, any> & Record<ValueKey, any>,
  LabelKey extends keyof T = keyof T,
  ValueKey extends keyof T = keyof T,
  R extends { label: T[LabelKey]; value: T[ValueKey] } = { label: T[LabelKey]; value: T[ValueKey] }
>(
  arr: T[],
  labelKey: LabelKey = 'label' as LabelKey,
  valueKey: ValueKey = 'value' as ValueKey
): R[] {
  return arr.map((item) => ({ label: item[labelKey], value: item[valueKey] })) as R[];
}


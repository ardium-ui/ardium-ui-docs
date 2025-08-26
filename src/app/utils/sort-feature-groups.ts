import { GroupName } from './routes';

const GROUP_SORT_ORDER: Record<GroupName, number> = {
  // components
  [GroupName.FormElements]: 1,
  [GroupName.Buttons]: 2,
  [GroupName.DataDisplay]: 3,
  [GroupName.Feedback]: 4,
  [GroupName.Layout]: 5,
  [GroupName.Popups]: 6,
  [GroupName.Stars]: 7,
  // devkit
  [GroupName.CustomSignals]: 1,
};

export function sortFeatureGroups<T extends { group: GroupName }>(a: T, b: T): number {
  return GROUP_SORT_ORDER[a.group] - GROUP_SORT_ORDER[b.group];
}

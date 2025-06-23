export function groupBy<T extends object>(array: T[], keyFn: (item: T) => string): Array<{ group: string; children: T[] }> {
  const map = new Map<string, T[]>();

  for (const item of array) {
    const key = keyFn(item);
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key)!.push(item);
  }

  return Array.from(map.entries()).map(([group, children]) => ({
    group,
    children,
  }));
}

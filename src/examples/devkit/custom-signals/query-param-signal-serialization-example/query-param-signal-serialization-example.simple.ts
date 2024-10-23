readonly acceptsTerms = queryParamSignal<boolean>(false, {
  paramName: 'accepts-terms',
  serialize: v => (v === null ? null : String(v)),
  deserialize: v => v === 'true',
});
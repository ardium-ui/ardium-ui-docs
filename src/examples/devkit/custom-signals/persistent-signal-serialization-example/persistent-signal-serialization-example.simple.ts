readonly acceptsTerms = persistentSignal<boolean>(false, {
  name: 'accepts-terms',
  method: PersistentStorageMethod.LocalStorage,
  serialize: v => String(!!v),
  deserialize: v => v === 'true',
});
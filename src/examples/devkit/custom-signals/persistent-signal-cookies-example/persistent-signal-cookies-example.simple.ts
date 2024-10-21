readonly favoriteFood = persistentSignal('chocolate chip cookies', {
  name: 'favorite-food',
  method: PersistentStorageMethod.Cookies,
  maxAge: 60 * 60 * 24 * 7,
});

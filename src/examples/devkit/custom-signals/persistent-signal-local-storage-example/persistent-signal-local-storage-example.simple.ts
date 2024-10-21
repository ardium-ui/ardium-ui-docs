readonly favoriteFood = persistentSignal('spaghetti', {
  name: 'favorite-food',
  method: PersistentStorageMethod.LocalStorage, // SessionStorage can be used too
});

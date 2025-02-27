this.keyboard.listenToShortcut(['Ctrl', 'F']).subscribe(({ event }) => {
  event.preventDefault();
  this.isOpen.update(v => !v);
});
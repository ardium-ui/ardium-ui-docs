this.keyboard.listenToKeyState('0').subscribe(({ isHeld }) => {
  this.isZeroHeld.set(isHeld);
});
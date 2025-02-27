this.keyboard.listenToKey('A').subscribe(() => {
  if (this.position() <= 0) return;
  this.position.update(v => v - STEP);
});
this.keyboard.listenToKey('D').subscribe(() => {
  if (this.position() >= MAX) return;
  this.position.update(v => v + STEP);
});
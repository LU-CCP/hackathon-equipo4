const manager = {
  root: null,
  register(root) {
    this.root = root;
  },
  unregister() {
    this.root = null;
  },
  openDrawer() {
    if (this.root) {
      this.root.openDrawer();
    }
  },
  closeDrawer() {
    if (this.root) {
      this.root.closeDrawer();
    }
  }
};

export default manager;

export function hotModuleReplacement(): void {
  if ((module as any).hot) {
    (module as any).hot.accept();
  }
}

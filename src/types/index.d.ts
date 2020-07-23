import RootStore from '@/store';

declare module '@loadable/component';

declare global {
  /*~ Here, declare things that go in the global namespace, or augment
   *~ existing declarations in the global namespace
   */

  type IRootStore = RootStore;

  interface IProps {
    store?: IRootStore;
  }
}

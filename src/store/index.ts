import { HomeStore } from '@/store/homeStore';
import { HelpStore } from '@/store/helpStore';

const stores = {
  homeStore: new HomeStore(),
  helpStore: new HelpStore()
};
/// 默认导出接口
export default stores;

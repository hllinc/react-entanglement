/**
 * 状态管理器管理中心
 * @Description:
 * @author hongliang7
 * @date 2020/7/23 11:29 上午
 */
import { observable } from 'mobx';
import HomeStore from '@/store/home.store';
import HelpStore from '@/store/help.store';

class RootStore {
  @observable homeStore = new HomeStore();
  @observable helpStore = new HelpStore();
}

/// 默认导出接口
export type IRootStore = RootStore;
export default RootStore;

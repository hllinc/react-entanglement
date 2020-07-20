/**
 * Created by hllinc on 2020/7/20 21:51
 */
import { observable } from 'mobx';

export interface IHelpStore {
  oneNum: number;
}

export class HelpStore implements IHelpStore {
  @observable oneNum = 3333;
}

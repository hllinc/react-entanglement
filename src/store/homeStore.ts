/**
 * Created by hllinc on 2020/7/20 21:47
 */
import { observable } from 'mobx';

export interface IHomeStore {
  homeNum: number;
}

export class HomeStore implements IHomeStore {
  @observable homeNum = 100;
}

import {Category} from './Category';
import {Post} from "./Post";

export class ChildCategory {
  private _childCategoryId: number;
  private _childCategoryName: string;
  private _category: Category;
  private _deleteFlag: boolean;
  private _post: Post[];


  constructor(childCategoryId: number, childCategoryName: string, category: Category, deleteFlag: boolean, post: Post[]) {
    this._childCategoryId = childCategoryId;
    this._childCategoryName = childCategoryName;
    this._category = category;
    this._deleteFlag = deleteFlag;
    this._post = post;
  }


  get childCategoryId(): number {
    return this._childCategoryId;
  }

  set childCategoryId(value: number) {
    this._childCategoryId = value;
  }

  get childCategoryName(): string {
    return this._childCategoryName;
  }

  set childCategoryName(value: string) {
    this._childCategoryName = value;
  }

  get category(): Category {
    return this._category;
  }

  set category(value: Category) {
    this._category = value;
  }

  get deleteFlag(): boolean {
    return this._deleteFlag;
  }

  set deleteFlag(value: boolean) {
    this._deleteFlag = value;
  }

  get post(): Post[] {
    return this._post;
  }

  set post(value: Post[]) {
    this._post = value;
  }
}

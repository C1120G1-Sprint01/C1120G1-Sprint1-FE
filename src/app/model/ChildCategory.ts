import {Category} from './Category';

export class ChildCategory {
  childCategoryId: number;
  childCategoryName: string;
  category: Category;

  constructor(childCategoryId: number, childCategoryName: string, category: Category) {
    this.childCategoryId = childCategoryId;
    this.childCategoryName = childCategoryName;
    this.category = category;
  }
}

import {ChildCategory} from "./ChildCategory";

export class Category {
  categoryId: number;
  categoryName: string;

  childCategoryList: ChildCategory[];
  deleteFlag: boolean;


  constructor(categoryId: number, categoryName: string, childCategoryList: ChildCategory[], deleteFlag: boolean) {
    this.categoryId = categoryId;
    this.categoryName = categoryName;
    this.childCategoryList = childCategoryList;
    this.deleteFlag = deleteFlag;
  }
}

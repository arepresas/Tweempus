import { throwError } from 'rxjs';

export class ApiUtils {
  public static TWIMPS_URL: string = 'http://localhost:3000/twimps';
  public static TWIMPS_FAVOURITE_URL: string =
    'http://localhost:3000/author-favorites';

  public static AUTHOR_URL: string = 'http://localhost:3000/authors';

  public static AUTH_TOKEN: string = 'http://localhost:3000/authenticated';

  static handleError(error: any) {
    let errorMsg = error.message
      ? error.message
      : error.status
      ? `${error.status} - ${error.statusText}`
      : 'Server error';
    console.log(errorMsg);

    return throwError(() => new Error(errorMsg));
  }

  static addUrlToObject(object: any, url: string): any {
    object.url = url + '/' + object.id;
    return object;
  }

  static addUrlToObjectList(objectList: any[], url: string): any[] {
    objectList.forEach((object) => {
      ApiUtils.addUrlToObject(object, url);
    });

    return objectList;
  }
}

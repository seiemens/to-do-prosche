// import internal from "stream";

export class ToDoError {
  title = '';
  message = '';
  code = 0;

  constructor(title: string, message: string, code: number) {
    this.title = title;
    this.message = message;
    this.code = code;
  }

  static GeneralError = new ToDoError("GeneralError", "Your Request on a Survey object could not be completed. Reason unknown", 500);

  static UserError = new ToDoError("User Error", "Your Request on a Survey object could not be completed. Reason unknown", 500)


}

export class RequestError {
  title = '';
  message = '';
  code = 0;

  constructor(title: string, message: string, code: number) {
    this.title = title;
    this.message = message;
    this.code = code;
  }

  static ParamsError = new RequestError("UrlError", "Your URL params were not in the correct format", 400);

  static BodyError = new RequestError("BodyError", "not all required Body Params were given or in the correct Format", 400);

  static GeneralError = new RequestError("RequestError", "Your Request couldn't be handled. Reason unknown", 400);

  static AuthorizationError = new RequestError("AuthorizationError", "Your Request couldn't be handled because your Authorization was invalid", 403);
}


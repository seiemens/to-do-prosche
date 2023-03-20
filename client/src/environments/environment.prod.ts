import { HttpServerAccessService } from "src/app/services/HttpServerAccessService/http-server-access.service";
import IServerAccessService from "src/app/services/server-access.service";

export const environment = {
    production: false,
    providers: [
      { provide: IServerAccessService, useClass: HttpServerAccessService }
    ]
  };
  
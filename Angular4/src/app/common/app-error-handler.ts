import { ErrorHandler } from "@angular/core";

export class AppErrorHandler implements ErrorHandler {

    handleError (error : any) {
        alert('AppErrorHandler : An unexpected error occured');
        console.log(error);
    }
}
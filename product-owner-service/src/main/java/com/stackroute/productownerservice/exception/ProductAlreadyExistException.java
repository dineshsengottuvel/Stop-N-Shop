package com.stackroute.productownerservice.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.CONFLICT,reason = "Product Already Exists")
public class ProductAlreadyExistException extends Exception{
}

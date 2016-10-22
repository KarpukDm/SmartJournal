package com.smartjournal.controller;

import com.smartjournal.dto.UserModel;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * Created by KarpukDM on 22.10.2016.
 */

@RestController
public class SignupController {

    @RequestMapping(value = "/signup", method = RequestMethod.POST)
    public ResponseEntity signup(@RequestBody UserModel userModel){

        return new ResponseEntity(userModel, HttpStatus.OK);
    }
}

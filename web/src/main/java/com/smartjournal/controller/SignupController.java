package com.smartjournal.controller;

import com.smartjournal.dto.SignupModel;
import com.smartjournal.entity.UserModel;
import com.smartjournal.service.UserService;
import com.smartjournal.validator.SignupValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import javax.validation.ValidationException;

/**
 * Created by KarpukDM on 22.10.2016.
 */

@RestController
public class SignupController {

    @Autowired
    private SignupValidator signupValidator;

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/signup", method = RequestMethod.POST)
    public ResponseEntity signup(@Valid @RequestBody SignupModel signupModel,
                                 BindingResult binding){

        signupValidator.validate(signupModel, binding);
        if (binding.hasErrors()) {
            throw new ValidationException(String.valueOf(binding.getFieldErrors()));
        }

        UserModel userModel = new UserModel(signupModel.getName(), signupModel.getEmail(), signupModel.getPassword());
        userModel.setId(1);
        //userService.save(userModel);

        return new ResponseEntity(userModel, HttpStatus.OK);
    }

    @RequestMapping(value = "/signup", method = RequestMethod.GET)
    public ResponseEntity signup2(){

        UserModel x = new UserModel("fdsfsd", "dfsdfsdf", "dffdsfsdfsd");
        x.setId(1);

        return new ResponseEntity(x, HttpStatus.OK);
    }
}

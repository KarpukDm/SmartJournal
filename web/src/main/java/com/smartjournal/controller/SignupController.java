package com.smartjournal.controller;

import com.smartjournal.datamodel.entity.UserModel;
import com.smartjournal.dto.SignupModel;
import com.smartjournal.service.UserService;
import com.smartjournal.validator.SignupValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.ValidationException;

/**
 * Created by KarpukDM on 22.10.2016.
 */
@CrossOrigin(origins = "http://localhost:8080")
@RestController
public class SignupController {

    private final SignupValidator signupValidator;

    private final UserService userService;

    @Autowired
    public SignupController(SignupValidator signupValidator, UserService userService) {
        this.signupValidator = signupValidator;
        this.userService = userService;
    }

    @RequestMapping(value = "/signup", method = RequestMethod.POST)
    public ResponseEntity signup(@Valid @RequestBody SignupModel signupModel,
                                 BindingResult binding){

        signupValidator.validate(signupModel, binding);
        if (binding.hasErrors()) {
            throw new ValidationException(String.valueOf(binding.getFieldErrors()));
        }

        UserModel userModel = new UserModel(signupModel.getName(), signupModel.getEmail(), signupModel.getPassword());
        userModel.setId(1);
        userService.save(userModel);

        return new ResponseEntity(userModel, HttpStatus.OK);
    }

    @RequestMapping(value = "/signup", method = RequestMethod.GET)
    public ResponseEntity signup2(){

        UserModel x = new UserModel("fdsfsd", "dfsdfsdf", "dffdsfsdfsd");
        x.setId(1);

        return new ResponseEntity(x, HttpStatus.OK);
    }
}

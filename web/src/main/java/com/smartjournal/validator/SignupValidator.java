package com.smartjournal.validator;

import com.smartjournal.dto.SignupModel;
import com.smartjournal.entity.UserModel;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Created by karpukdm on 10/24/16.
 */

@Component
public class SignupValidator implements Validator {
    @Override
    public boolean supports(Class<?> aClass) {
        return UserModel.class.isAssignableFrom(aClass);
    }

    @Override
    public void validate(Object o, Errors errors) {

        SignupModel signupModel = (SignupModel) o;

        if(signupModel.getEmail() == null ||!isValidEmail(signupModel.getEmail())){
            errors.rejectValue("email", "email", "error.incorrect.email");
        }

        if(signupModel.getName() == null || !isValidName(signupModel.getName())){
            errors.rejectValue("name", "name", "error.incorrect.data");
        }

        if(signupModel.getPassword() == null || signupModel.getRepeatedPassword() == null
                || !isValidPassword(signupModel.getPassword(), signupModel.getRepeatedPassword())){
            errors.rejectValue("password", "password", "error.incorrect.password");
        }
    }

    private boolean isValidEmail(String email){
        String pattern = "[a-zA-Z0-9._]+@[a-z]+.[a-z]+";

        Pattern p = Pattern.compile(pattern);
        Matcher m = p.matcher(email);

        return m.matches();
    }


    private boolean isValidName(String name){
        return name.length() > 2;
    }

    private boolean isValidPassword(String p1, String p2){
        String pattern = "[a-zA-Z0-9._]{4,}";

        Pattern p = Pattern.compile(pattern);
        Matcher m = p.matcher(p1);

        return m.matches() && p1.equals(p2);
    }
}

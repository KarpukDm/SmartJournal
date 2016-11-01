package com.smartjournal.security;

import com.smartjournal.datamodel.entity.UserModel;
import com.smartjournal.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;

import java.util.Collections;
import java.util.List;

/**
 * Created by karpukdm on 10/24/16.
 */
@Component
public class SmartJournalAuthenticationProvider implements AuthenticationProvider {

    @Autowired
    private UserService userService;

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        String username = (String) authentication.getPrincipal();
        String password = (String) authentication.getCredentials();

        try {
            UserModel user = userService.findOneUserModelByEmailAndPassword(username, password);

            if (authentication.getCredentials() == null || user == null) {
                throw new BadCredentialsException("No pre-authenticated credentials found in request.");
            }

            ((SmartJournalUsernamePasswordAuthToken) authentication).setDetails(user);

            List<GrantedAuthority> grantedAuthorities = Collections.singletonList(new SimpleGrantedAuthority("USER"));
            return new UsernamePasswordAuthenticationToken(username, null, grantedAuthorities);
        } catch (Exception e) {
            throw new BadCredentialsException("journal.message.incorrectLogin", e);
        }
    }

    @Override
    public boolean supports(Class<?> aClass) {
        return SmartJournalUsernamePasswordAuthToken.class.isAssignableFrom(aClass);
    }
}

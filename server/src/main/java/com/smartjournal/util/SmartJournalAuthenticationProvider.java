package com.smartjournal.util;

import com.smartjournal.model.Account;
import com.smartjournal.repository.UserRepository;
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

@Component
public class SmartJournalAuthenticationProvider implements AuthenticationProvider {

    private final UserRepository userRepository;

    @Autowired
    public SmartJournalAuthenticationProvider(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        String username = (String) authentication.getPrincipal();
        String password = (String) authentication.getCredentials();

        try {
            Account account = userRepository.findOneUserByEmailAndPassword(username, password);

            if (authentication.getCredentials() == null || account == null) {
                throw new BadCredentialsException("No pre-authenticated credentials found in request.");
            }

            ((SmartJournalUsernamePasswordAuthToken) authentication).setDetails(account);

            List<GrantedAuthority> grantedAuthorities = Collections.singletonList(new SimpleGrantedAuthority("USER"));

            return new UsernamePasswordAuthenticationToken(username, password, grantedAuthorities);
        } catch (Exception e) {
            throw new BadCredentialsException("Login is incorrect", e);
        }
    }

    @Override
    public boolean supports(Class<?> aClass) {
        return SmartJournalUsernamePasswordAuthToken.class.isAssignableFrom(aClass);
    }
}

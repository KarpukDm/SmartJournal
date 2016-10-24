package com.smartjournal.auth.facebook;

import com.restfb.DefaultFacebookClient;
import com.restfb.Parameter;
import com.restfb.Version;
import com.restfb.types.User;
import com.smartjournal.dto.AccessTokenModel;
import org.springframework.stereotype.Component;

/**
 * Created by KarpukDM on 11.10.2016.
 */
@Component
public class FacebookClient {

    private AccessTokenModel accessToken;

    public User getProfileInfo(){

        DefaultFacebookClient facebookClient = new DefaultFacebookClient(accessToken.getAccessToken(), Version.VERSION_2_7);

        return facebookClient.fetchObject("me", User.class,
                Parameter.with("fields", "id,name,email"));
    }

    public void setAccessToken(AccessTokenModel accessToken) {
        this.accessToken = accessToken;
    }
}

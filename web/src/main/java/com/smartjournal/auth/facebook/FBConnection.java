package com.smartjournal.auth.facebook;

import com.smartjournal.datamodel.entity.AppModel;
import com.smartjournal.dto.AccessTokenModel;
import com.smartjournal.service.AppService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;
import java.net.URLEncoder;

/**
 * Created by KarpukDM on 10.10.2016.
 */
@Component
public class FBConnection {

    @Autowired
    private AppService appService;

    private AppModel appModel;

    private final String SERVICE_NAME = "facebook";

    private String appId;
    private String appSecret;
    private String redirectUrl;
    private String accessToken;
    private String code;

    public FBConnection(){
       redirectUrl = "http://localhost:8080/authenticate/facebook";
    }

    public String getFBAuthUrl() {

        accessToken = "";
        if(appModel == null) {
            appModel = appService.findOneByName(SERVICE_NAME);
        }

        if(appModel == null){
            return null;
        }

        appId = appModel.getAppId();
        appSecret = appModel.getAppSecret();

        String fbLoginUrl = "";
        try {
            fbLoginUrl = "http://www.facebook.com/dialog/oauth?" + "client_id="
                    + this.appId + "&redirect_uri="
                    + URLEncoder.encode(this.redirectUrl, "UTF-8")
                    + "&scope=public_profile";
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
        return fbLoginUrl;
    }

    private String getFBGraphUrl(String code) {

        if(appModel == null) {
            appModel = appService.findOneByName(SERVICE_NAME);
        }

        if(appModel == null){
            return null;
        }
        appId = appModel.getAppId();
        appSecret = appModel.getAppSecret();

        String fbGraphUrl = "";
        try {
            fbGraphUrl = "https://graph.facebook.com/oauth/access_token?"
                    + "client_id=" + this.appId + "&redirect_uri="
                    + URLEncoder.encode(this.redirectUrl, "UTF-8")
                    + "&client_secret=" + this.appSecret + "&code=" + code;
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
        return fbGraphUrl;
    }

    public AccessTokenModel getAccessToken(String code) {
        if ("".equals(accessToken)) {
            URL fbGraphURL;
            try {
                fbGraphURL = new URL(getFBGraphUrl(code));
            } catch (MalformedURLException e) {
                e.printStackTrace();
                throw new RuntimeException("Invalid code received " + e);
            }
            URLConnection fbConnection;
            StringBuffer b;
            try {
                fbConnection = fbGraphURL.openConnection();
                BufferedReader in;
                in = new BufferedReader(new InputStreamReader(
                        fbConnection.getInputStream()));
                String inputLine;
                b = new StringBuffer();
                while ((inputLine = in.readLine()) != null)
                    b.append(inputLine).append("\n");
                in.close();
            } catch (IOException e) {
                e.printStackTrace();
                throw new RuntimeException("Unable to connect with Facebook "
                        + e);
            }

            accessToken = b.toString();
            if (accessToken.startsWith("{")) {
                throw new RuntimeException("ERROR: Access Token Invalid: "
                        + accessToken);
            }
        }

        AccessTokenModel accessTokenModel = new AccessTokenModel();
        accessTokenModel.setAccessToken(accessToken.replace("access_token=", ""));
        accessTokenModel.setAccessToken(accessTokenModel.getAccessToken().split("&")[0]);
        return accessTokenModel;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public AppService getAuthService() {
        return appService;
    }

    public void setAuthService(AppService authService) {
        this.appService = authService;
    }

    public String getAppId() {
        return appId;
    }

    public void setAppId(String appId) {
        this.appId = appId;
    }

    public String getAppSecret() {
        return appSecret;
    }

    public void setAppSecret(String appSecret) {
        this.appSecret = appSecret;
    }

    public String getRedirectUrl() {
        return redirectUrl;
    }

    public void setRedirectUrl(String redirectUrl) {
        this.redirectUrl = redirectUrl;
    }

    public String getAccessToken() {
        return accessToken;
    }

    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }
}
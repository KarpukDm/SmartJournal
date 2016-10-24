package com.smartjournal.config;

import com.smartjournal.auth.facebook.FBConnection;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Created by karpukdm on 10/11/16.
 */
@EnableWebMvc
@Configuration
public class WebMvcConfig extends WebMvcConfigurerAdapter {

    private final FBConnection fbConnection;

    @Autowired
    public WebMvcConfig(FBConnection fbConnection) {
        this.fbConnection = fbConnection;
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(new HandlerInterceptorAdapter() {
            @Override
            public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {

                String code = request.getParameter("code");
                fbConnection.setCode(code);
                return super.preHandle(request, response, handler);
            }
        }).addPathPatterns("/authenticate/facebook");
    }
}

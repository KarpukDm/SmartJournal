package com.smartjournal;

import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.testng.AbstractTestNGSpringContextTests;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;

/**
 * Created by karpukdm on 10/24/16.
 */
@WebAppConfiguration
@SpringBootTest
public class AuthControllerTest extends AbstractTestNGSpringContextTests {

    @Autowired
    private WebApplicationContext context;

    private MockMvc mvc;

    @BeforeClass
    public void setUp() throws Exception {
        MockitoAnnotations.initMocks(this);
        mvc = MockMvcBuilders.webAppContextSetup(context).build();
    }

    @Test()
    public void loginWithFacebook() throws Exception {
        mvc.perform(MockMvcRequestBuilders.get("/authenticate/facebook"))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andDo(print());
        // .andExpect(MockMvcResultMatchers.jsonPath("$", hasSize(greaterThanOrEqualTo(0))));
    }
}

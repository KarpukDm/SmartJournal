package com.smartjournal;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.smartjournal.dto.SignupModel;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.testng.AbstractTestNGSpringContextTests;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

import static org.hamcrest.Matchers.is;

@WebAppConfiguration
@SpringBootTest
public class SignupControllerTest extends AbstractTestNGSpringContextTests {

	@Autowired
	private WebApplicationContext context;

	private MockMvc mvc;

	@BeforeClass
	public void setUp() throws Exception {
		MockitoAnnotations.initMocks(this);
		mvc = MockMvcBuilders.webAppContextSetup(context).build();
	}

	@Test
	public void signupTest() throws Exception {
		ObjectMapper objectMapper = new ObjectMapper();
		SignupModel signupModel = new SignupModel("karpukdm", "karpukdm@yandex.ru", "admin", "admin");

		mvc.perform(MockMvcRequestBuilders.post("/signup")
				.contentType(MediaType.APPLICATION_JSON).accept(MediaType.APPLICATION_JSON)
				.content(objectMapper.writeValueAsString(signupModel)))
				.andExpect(MockMvcResultMatchers.status().isOk())
				.andExpect(MockMvcResultMatchers.jsonPath("$.name", is(signupModel.getName())))
				.andExpect(MockMvcResultMatchers.jsonPath("$.email", is(signupModel.getEmail())))
				.andExpect(MockMvcResultMatchers.jsonPath("$.password", is(signupModel.getPassword())));
	}
}

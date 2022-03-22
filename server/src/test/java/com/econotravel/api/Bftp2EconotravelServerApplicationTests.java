package com.econotravel.api;

import com.econotravel.api.repositories.Experience;
import com.econotravel.api.repositories.ExperienceRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;

import java.util.List;
import java.util.Optional;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class Bftp2EconotravelServerApplicationTests {

    @Autowired
    MockMvc mockMvc;

    @Autowired
    ExperienceRepository experienceRepository;

    @BeforeEach
    void setUp() {
        experienceRepository.deleteAll();
    }

    @Test
    void returnsTheExistingExperiences() throws Exception {

        addSampleExperiences();

        mockMvc.perform(get("/api/experiences"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[*]", hasSize(2)))
                .andExpect(jsonPath("$[0].name", equalTo("Paseo por el Montseny")))
                .andExpect(jsonPath("$[1].name", equalTo("Visita a la sagrada familia")))
                .andDo(print());
    }

    private void addSampleExperiences() {
        List<Experience> experiences = List.of(
                new Experience(1L,"image", "Paseo por el Montseny", "description", 255.00, "6h", true, "description"),
                new Experience(2L,"image", "Visita a la sagrada familia", "descrption", 50.00, "4h", true, "description" )

        );

        experienceRepository.saveAll(experiences);
    }

    @Test
    void createsNewExperiences() throws Exception {

        mockMvc.perform(post("/api/experiences/new")
                .contentType(MediaType.APPLICATION_JSON)
                .content("{\"name\": \"Paseo en Bici por el Montseny\"}")
        ).andExpect(status().is(200));

        var experiences = experienceRepository.findAll();

        assertThat(experiences, contains(
                hasProperty("name", is("Paseo en Bici por el Mont"))
        ));
    }

    @Test
    void allowsToDeleteAExperience() throws Exception {
        Experience experience = experienceRepository.save(new Experience(1L, "image", "Paseo en Bici por el Montseny", "description", 255.00, "2h", true, "description"));
        mockMvc.perform(get("/api/experiences/delete/" + experience.getId()))
                .andExpect(status().is(200));

        assertThat(experienceRepository.findById(experience.getId()), equalTo(Optional.empty()));
    }

}

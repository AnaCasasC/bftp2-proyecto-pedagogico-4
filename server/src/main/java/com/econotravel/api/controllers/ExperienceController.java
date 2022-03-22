package com.econotravel.api.controllers;

import com.econotravel.api.repositories.Experience;
import com.econotravel.api.repositories.ExperienceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.List;

@RestController
@RequestMapping("/api/experiences")
// NO INCLUIR NUNCA LA CABECERA CrossOrigin en un proyecto real
@CrossOrigin (origins = "http://localhost:3000", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.OPTIONS})


public class ExperienceController {

    private final ExperienceRepository experienceRepository;



    @Autowired
    public ExperienceController(ExperienceRepository experienceRepository) {
        this.experienceRepository = experienceRepository;
    }

    @GetMapping
    public List<Experience> allExperiences() {
        return experienceRepository.findAll();
    }

    @GetMapping("/{id}")
    public Experience findExperience(@PathVariable Long id){
        return experienceRepository.findById(id).orElseThrow(null);
    }

    @GetMapping("/edit/{id}")
    public Experience updateExperienceById(@RequestBody Experience experience) {
        experienceRepository.findById(experience.getId());
        return experienceRepository.save(experience);
    }

    @PostMapping
    public Experience createExperience(@RequestBody Experience experience) {
        return experienceRepository.save(experience);
    }

    @GetMapping("/delete/{id}")
    public Experience deleteExperienceById(@PathVariable Long id) {
        Experience experience = experienceRepository.findById(id).get();
        experienceRepository.deleteById(id);
        return experience;
    }


}

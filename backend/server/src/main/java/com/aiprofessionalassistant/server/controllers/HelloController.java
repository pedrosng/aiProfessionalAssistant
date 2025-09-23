package com.aiprofessionalassistant.server.controllers;

import com.aiprofessionalassistant.server.dto.AnswerDto;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/hello")
    public AnswerDto getAnswer(){
        return new AnswerDto("hello");
    }

}

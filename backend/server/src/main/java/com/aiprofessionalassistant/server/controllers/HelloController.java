package com.aiprofessionalassistant.server.controllers;

import com.aiprofessionalassistant.server.dto.AnswerDto;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class HelloController {

    private int count;

    @PostMapping("/hello")
    public AnswerDto getAnswer(){
        count++;
        return new AnswerDto("hello " + count);
    }

}

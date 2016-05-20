package edu.uta.sis.mvc1.web;

import edu.uta.sis.mvc1.domain.service.FileUploadService;
import edu.uta.sis.mvc1.domain.service.IntegrationEndPoint;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by Hannu Lohtander on 13.3.2016.
 */
@Controller
public class HomeController {

    @Autowired
    IntegrationEndPoint integrationEndPoint;

    @RequestMapping(value = {"", "/", "/home"})
    public String home(Model model) {

        return "/home";
    }

    @RequestMapping(value="/ping")
    @ResponseBody
    public String ping() {
        integrationEndPoint.send("PING");
        return "OK";
    }



}

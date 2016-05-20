package edu.uta.sis.mvc1.web;

import edu.uta.sis.mvc1.domain.service.FileUploadService;
import edu.uta.sis.mvc1.domain.service.IntegrationEndPoint;
import edu.uta.sis.mvc1.domain.service.IntegrationOut;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by Hannu Lohtander on 13.3.2016.
 */
@Controller
public class HomeController {

    @Autowired
    IntegrationOut integrationOut;

    @Autowired
    IntegrationEndPoint iep;

    @Autowired
    private SimpMessagingTemplate template;

    @RequestMapping(value = {"", "/", "/home"})
    public String home(Model model) {

        return "/home";
    }

    @RequestMapping(value="/ping")
    @ResponseBody
    public String ping() {
        //integrationOut.send("PING");
        Map<String,Object> headers = new HashMap<String, Object>();
        headers.put(SimpMessageHeaderAccessor.SESSION_ID_HEADER, iep.getSessionId() );
        headers.put(SimpMessageHeaderAccessor.DESTINATION_HEADER, iep.getDestination() );
        headers.put(SimpMessageHeaderAccessor.SUBSCRIPTION_ID_HEADER, iep.getSubscription() );

        this.template.convertAndSend("/app1", "PING",headers);
        return "OK";
    }



}

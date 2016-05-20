package edu.uta.sis.mvc1.domain.service.impl;

import edu.uta.sis.mvc1.domain.service.IntegrationOut;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

/**
 * Created by hannu on 20.5.2016.
 */

@Service("integrationOut")
public class IntegrationOutImpl implements IntegrationOut {

    //@Autowired
    private SimpMessagingTemplate template;

    public void send(String message) {
        //this.template.convertAndSend("/topic/a1", message);
    }

}

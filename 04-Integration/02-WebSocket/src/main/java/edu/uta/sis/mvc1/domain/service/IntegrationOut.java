package edu.uta.sis.mvc1.domain.service;

import org.springframework.stereotype.Component;

/**
 * Created by Hannu Lohtander on 20.5.2016.
 */
@Component("integrationOut")
public interface IntegrationOut {

    public void send(String message);

}

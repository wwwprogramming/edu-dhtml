package edu.uta.sis.mvc1.domain.service;

import org.springframework.integration.metadata.SimpleMetadataStore;
import org.springframework.messaging.Message;
import org.springframework.messaging.MessageHeaders;

import java.util.List;

/**
 * Created by Hannu Lohtander on 20.5.2016.
 */
public interface IntegrationEndPoint {

    public void messageIn(String message);

    public void handleEvent(MessageHeaders headers, Message<Object> message);

    public List<SimpleMetadataStore> getSubscriptions();


}

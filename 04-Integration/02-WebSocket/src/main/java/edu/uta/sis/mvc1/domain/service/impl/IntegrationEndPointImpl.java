package edu.uta.sis.mvc1.domain.service.impl;

import edu.uta.sis.mvc1.domain.service.IntegrationEndPoint;
import org.apache.log4j.Logger;
import org.springframework.integration.metadata.SimpleMetadataStore;
import org.springframework.messaging.Message;
import org.springframework.messaging.MessageHeaders;
import org.springframework.messaging.core.MessageSendingOperations;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.stereotype.Service;

import java.util.Map;


/**
 * Created by Hannu Lohtander on 20.5.2016.
 */
@Service("integrationEndPoint")
public class IntegrationEndPointImpl implements IntegrationEndPoint {

    Logger logger = Logger.getLogger(this.getClass().getName());

    SimpleMetadataStore metadataStore = new SimpleMetadataStore();

    public void messageIn(String message) {
        logger.info("INCOMING: ["+message+"]");
    }

    public void handleEvent(MessageHeaders headers, Message<Object> message) {
        for (Map.Entry<String,Object> e:  headers.entrySet()) {
            logger.debug(e.getKey() + " => " + e.getValue());
        }
        if (headers.get(SimpMessageHeaderAccessor.MESSAGE_TYPE_HEADER).equals("CONNECT_ACK")) {
            metadataStore.put((String)headers.get(SimpMessageHeaderAccessor.MESSAGE_TYPE_HEADER), "identifier-1");
        }
        if (headers.get(SimpMessageHeaderAccessor.MESSAGE_TYPE_HEADER).equals("SUBSCRIBE")) {
            metadataStore.put((String)headers.get(SimpMessageHeaderAccessor.MESSAGE_TYPE_HEADER),
                    (String)headers.get(SimpMessageHeaderAccessor.SUBSCRIPTION_ID_HEADER));
        }
    }



}

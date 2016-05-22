package edu.uta.sis.mvc1.domain.service.impl;

import edu.uta.sis.mvc1.domain.service.IntegrationEndPoint;
import org.apache.log4j.Logger;
import org.springframework.integration.metadata.MetadataStore;
import org.springframework.integration.metadata.SimpleMetadataStore;
import org.springframework.messaging.Message;
import org.springframework.messaging.MessageHeaders;
import org.springframework.messaging.core.MessageSendingOperations;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;


/**
 * Created by Hannu Lohtander on 20.5.2016.
 */
@Service("integrationEndPoint")
public class IntegrationEndPointImpl implements IntegrationEndPoint {

    Logger logger = Logger.getLogger(this.getClass().getName());

    class Subscriptions {

        String destination;

        public Subscriptions(String destination) {
            this.destination = destination;
        }

        public String getDestination() {
            return destination;
        }

        public void setDestination(String destination) {
            this.destination = destination;
        }

        public List<SimpleMetadataStore> getSubstrictionsT1() {
            return substrictionsT1;
        }

        public void setSubstrictionsT1(List<SimpleMetadataStore> substrictionsT1) {
            this.substrictionsT1 = substrictionsT1;
        }

        List<SimpleMetadataStore> substrictionsT1 = new ArrayList<SimpleMetadataStore>();

        public void addT1Subscription(SimpleMetadataStore s) {
            substrictionsT1.add(s);
        }

        public SimpleMetadataStore getSubscription(String sessionId) {
            for (SimpleMetadataStore store: substrictionsT1) {
                if (store.get("simpSessionId").equals(sessionId)) {
                    return store;
                }
            }
            return null;
        }

        public SimpleMetadataStore removeSubscription(String sessionId) {
            for (SimpleMetadataStore store: substrictionsT1) {
                if (store.get("simpSessionId").equals(sessionId)) {
                    substrictionsT1.remove(store);
                    return store;
                }
            }
            return null;
        }


        public List<SimpleMetadataStore> getT1Subscriptions() {
            return substrictionsT1;
        }

    }

    Subscriptions subscriptions;

    @PostConstruct
    public void postConstruct() {
        subscriptions = new Subscriptions("/t1");
    }


    public void messageIn(String message) {
        logger.info("INCOMING: ["+message+"]");
    }

    public void handleEvent(MessageHeaders headers, Message<Object> message) {
        for (Map.Entry<String,Object> e:  headers.entrySet()) {
            logger.debug(e.getKey() + " => " + e.getValue());
        }
        String messageType = headers.get(SimpMessageHeaderAccessor.MESSAGE_TYPE_HEADER).toString();
        if (messageType.equals("CONNECT_ACK")) {
            SimpleMetadataStore m = new SimpleMetadataStore();
            //m.put((String) headers.get(SimpMessageHeaderAccessor.MESSAGE_TYPE_HEADER));
            m.put(SimpMessageHeaderAccessor.SESSION_ID_HEADER,(String)headers.get(SimpMessageHeaderAccessor.SESSION_ID_HEADER));
            subscriptions.addT1Subscription(m);
        }
        if (messageType.equals("DISCONNECT")) {
            String sessionId = (String)headers.get(SimpMessageHeaderAccessor.SESSION_ID_HEADER);
            subscriptions.removeSubscription(sessionId);
        }
        if (messageType.equals("SUBSCRIBE")) {
            String sessionId = (String)headers.get(SimpMessageHeaderAccessor.SESSION_ID_HEADER);
            SimpleMetadataStore s = subscriptions.getSubscription(sessionId);
            s.put(SimpMessageHeaderAccessor.SUBSCRIPTION_ID_HEADER,
                    (String)headers.get(SimpMessageHeaderAccessor.SUBSCRIPTION_ID_HEADER));

            s.put(SimpMessageHeaderAccessor.DESTINATION_HEADER,
                    (String)headers.get(SimpMessageHeaderAccessor.DESTINATION_HEADER));

            //s.put(SimpMessageHeaderAccessor.SESSION_ID_HEADER,
            //        (String)headers.get(SimpMessageHeaderAccessor.SESSION_ID_HEADER))
        }

        if (messageType.equals("UNSUBSCRIBE")) {
            String sessionId = (String)headers.get(SimpMessageHeaderAccessor.SESSION_ID_HEADER);
            SimpleMetadataStore s = subscriptions.getSubscription(sessionId);
            s.remove(SimpMessageHeaderAccessor.SUBSCRIPTION_ID_HEADER);
            s.remove(SimpMessageHeaderAccessor.DESTINATION_HEADER);

        }
    }



    public List<SimpleMetadataStore> getSubscriptions() {
        return subscriptions.getT1Subscriptions();
    }


}

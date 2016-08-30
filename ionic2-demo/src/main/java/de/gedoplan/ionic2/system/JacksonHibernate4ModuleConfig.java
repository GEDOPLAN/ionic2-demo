package de.gedoplan.ionic2.system;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.hibernate5.Hibernate5Module;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.ext.ContextResolver;
import javax.ws.rs.ext.Provider;

@Provider
@Produces(MediaType.APPLICATION_JSON)
public class JacksonHibernate4ModuleConfig implements ContextResolver<ObjectMapper> {

    private ObjectMapper objectMapper = new ObjectMapper() {
        private static final long serialVersionUID = 1L;

        {
            Hibernate5Module hibernate5Module = new Hibernate5Module();
            //hibernate4Module.configure(Hibernate4Module.Feature.SERIALIZE_IDENTIFIER_FOR_LAZY_NOT_LOADED_OBJECTS, true);
            registerModule(hibernate5Module);
        }
    };

    @Override
    public ObjectMapper getContext(Class<?> objectType) {
        return objectMapper;
    }
}

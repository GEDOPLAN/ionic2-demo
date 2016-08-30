package de.gedoplan.ionic2.resource;

import com.fasterxml.jackson.annotation.JsonView;
import de.gedoplan.ionic2.model.Customer;
import de.gedoplan.ionic2.model.views.DetailView;
import de.gedoplan.ionic2.model.views.ListView;
import de.gedoplan.ionic2.repository.CustomerRepository;
import java.util.List;
import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

/**
 *
 * @author Dominik Mathmann
 */
@ApplicationScoped
@Path("customer")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class CustomerResource {

    @Inject
    private CustomerRepository customerRepository;

    @GET
    @JsonView(ListView.class)
    public List<Customer> getCustomers() {
        return customerRepository.getAll();
    }

    @GET
    @Path("{id}")
    @JsonView(DetailView.class)
    public Customer getCustomers(@PathParam("id") String id) {
        return customerRepository.getCustomerByID(id);
    }

}

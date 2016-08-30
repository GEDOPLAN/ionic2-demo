package de.gedoplan.ionic2.repository;

import de.gedoplan.ionic2.model.Customer;
import de.gedoplan.ionic2.model.Order;
import de.gedoplan.ionic2.model.OrderDetail;
import de.gedoplan.ionic2.model.OrderDetail_;
import de.gedoplan.ionic2.model.Order_;
import de.gedoplan.ionic2.model.dto.CustomerOrderInformation;
import de.gedoplan.ionic2.model.dto.QueryResult;
import de.gedoplan.ionic2.model.dto.QuerySettings;
import javax.enterprise.context.RequestScoped;
import javax.persistence.criteria.CollectionJoin;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import javax.transaction.Transactional;

@RequestScoped
public class CustomerRepository extends BasicRepository<Customer, String> {

    public CustomerRepository() {
        super(Customer.class);
    }

    public QueryResult queryCustomer(QuerySettings settings) {
        return search(settings);
    }

    public Customer getCustomerByID(String customerID) {
        return findById(customerID);
    }

    @Transactional(Transactional.TxType.REQUIRED)
    public Customer updateCustomer(Customer entity) {
        return super.merge(entity);
    }

    public CustomerOrderInformation getCustomerOrderInfomration(String customerId) {
        CriteriaBuilder cb = getEntityManager().getCriteriaBuilder();
        CriteriaQuery<CustomerOrderInformation> query = cb.createQuery(CustomerOrderInformation.class);
        Root<Order> root = query.from(Order.class);
        CollectionJoin<Order, OrderDetail> detailJoin = root.join(Order_.orderDetails);

        query.select(cb.construct(
                CustomerOrderInformation.class,
                cb.count(detailJoin),
                cb.sum(cb.prod(detailJoin.get(OrderDetail_.quantity), detailJoin.get(OrderDetail_.unitPrice)))
        ));

        query.where(cb.equal(root.get(Order_.customer), getEntityManager().getReference(Customer.class, customerId)));

        return getEntityManager().createQuery(query).getSingleResult();
    }
}
